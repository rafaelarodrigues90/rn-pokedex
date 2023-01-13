import React, { useEffect, useState } from "react";
import * as s from "./styles";
import api from "../../services/api";
import { FlatList, Text, View } from "react-native";

export type Pokemon = {
  name: string;
  url: string;
}[];

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon>([]);
  const [pokemonInfo, setPokemonInfo] = useState();

  const getPokemonsList = (): Pokemon => {
    api
      .get("/pokemon?limit=1000")
      .then((response) => response.data)
      .then((pokemons) => setPokemons(pokemons.results));

    return pokemons;
  };

  const getMoreInfo = (url: string) => {
    const formatUrl = url.substring(25);

    api
      .get(formatUrl)
      .then((response) => response.data)
      .then((pokemon) => setPokemonInfo(pokemon));

    return pokemonInfo;
  };

  useEffect(() => {
    const pokemons = getPokemonsList();
  });

  const Item = ({ name, url }: any) => (
    <View>
      <Text>{name} </Text>
      <Text>{url} </Text>
    </View>
  );

  const renderItem = ({ item }: any) => {
    return <Item name={item.name} url={item.url} />;
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
