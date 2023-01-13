import React, { useEffect, useState } from "react";
import * as s from "./styles";
import api from "../../services/api";
import { FlatList, Text, View } from "react-native";

export type PokemonType = {
  type: string;
};

export type Pokemon = {
  id: number;
  name: string;
  url: string;
  types: PokemonType[];
};

export type GetMoreInfoResponse = {
  id: number;
  types: PokemonType[];
};

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getPokemonsList() {
      const response = await api.get("/pokemon?limit=1279");
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

  const Item = ({ name }: any) => (
    <View>
      <Text>{name} </Text>
    </View>
  );

  const renderItem = ({ item }: any) => {
    return <Item name={item.name} />;
  };

  return (
    <s.Container>
      <s.Content>
        {pokemons && <FlatList data={pokemons} renderItem={renderItem} />}
      </s.Content>
      <s.Footer></s.Footer>
    </s.Container>
  );
}
