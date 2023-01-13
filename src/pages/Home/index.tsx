import React, { useEffect, useState } from "react";
import * as s from "./styles";
import api from "../../services/api";
import { FlatList } from "react-native";
import { Card, Pokemon, PokemonType } from "../../components/Card";
import { FadeAnimation } from "../../components/FadeAnimation";

// TODO: organizar entidades do projeto

export type GetMoreInfoResponse = {
  id: number;
  types: PokemonType[];
};

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getPokemonsList() {
      // TODO: paginação
      // const response = await api.get("/pokemon?limit=1279");
      const response = await api.get("/pokemon?limit=50");
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

  return (
    <s.Container>
      <s.Content>
        <FlatList
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.id.toString()}
          renderItem={({ item: pokemon }) => (
            <FadeAnimation>
              <Card data={pokemon} />
            </FadeAnimation>
          )}
        />
      </s.Content>
      <s.Footer></s.Footer>
    </s.Container>
  );
}
