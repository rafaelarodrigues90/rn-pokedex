import React, { useEffect, useState } from "react";
import pokeballHeader from "../../../assets/img/pokeball.png";
import * as s from "./styles";
import api from "../../services/api";
import { FlatList } from "react-native";
import { Card, Pokemon, PokemonType } from "../../components/Card";
import { Load } from "../../components/Load";

export type GetMoreInfoResponse = {
  id: number;
  types: PokemonType[];
};

export function Home({ navigation }: any) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getPokemonsList() {
      // TODO: paginação
      const response = await api.get("/pokemon?limit=3000&offset=0");
      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            id,
            name: pokemon.name,
            types,
          };
        })
      );

      setPokemons(payloadPokemons);
      setLoad(false);
    }

    getPokemonsList();
  }, []);

  async function getMoreInfo(url: string): Promise<GetMoreInfoResponse> {
    const formatUrl = url.substring(25);

    const { data } = await api.get(formatUrl);

    return {
      id: data.id,
      types: data.types,
    };
  }

  function handleNavigation(pokemonId: number) {
    navigation.navigate("About", { pokemonId });
  }

  return (
    <>
      {load ? (
        <s.LoadingScreen>
          <Load />
        </s.LoadingScreen>
      ) : (
        // TODO: talvez buscar alternativa ao flatlist
        <s.Container>
          <FlatList
            ListHeaderComponent={
              <>
                <s.Header source={pokeballHeader}></s.Header>
                <s.Title>Pokédex</s.Title>
              </>
            }
            contentContainerStyle={{
              paddingHorizontal: 20,
            }}
            data={pokemons}
            keyExtractor={(pokemon) => pokemon.id.toString()}
            renderItem={({ item: pokemon }) => (
              <Card
                data={pokemon}
                onPress={() => handleNavigation(pokemon.id)}
              />
            )}
          />
        </s.Container>
      )}
    </>
  );
}
