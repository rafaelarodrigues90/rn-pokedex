import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import circle from "../../../assets/img/circle.png";
import dots from "../../../assets/img/dots.png";
import * as s from "./styles";
import { useTheme } from "styled-components/native";
import { FadeAnimation } from "../../components/FadeAnimation";
import { Load } from "../../components/Load";

type RouteParams = {
  pokemonId: number;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type Ability = {
  ability: {
    name: string;
  };
};

export type TypeName =
  | "grass"
  | "fire"
  | "water"
  | "poison"
  | "normal"
  | "bug"
  | "flying"
  | "electric"
  | "ground";

type PokemonTypes = {
  type: {
    name: TypeName;
  };
};

type PokemonProps = {
  id: number;
  name: string;
  types: PokemonTypes[];
  abilities: Ability[];
  stats: Stat[];
  color: string;
};

export function About() {
  const route = useRoute();
  const { pokemonId } = route.params as RouteParams;
  const { goBack } = useNavigation();
  const { colors } = useTheme();
  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getPokemonById() {
      try {
        const response = await api.get(`/pokemon/${pokemonId}`);
        const { stats, abilities, id, name, types } = response.data;

        const currentType = types[0].type.name;
        const color =
          colors.backgroundTypes[
            currentType as keyof typeof colors.backgroundTypes
          ];

        setPokemon({
          stats,
          abilities,
          id,
          name,
          types,
          color,
        });
      } catch (err) {
      } finally {
        setLoad(false);
      }
    }

    getPokemonById();
  }, [pokemonId]);

  function navigateBack() {
    goBack();
  }

  return (
    <>
      {load ? (
        <s.LoadingScreen>
          <Load />
        </s.LoadingScreen>
      ) : (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
          <s.Header type={pokemon.types[0].type.name}>
            <s.BackButton onPress={navigateBack}>
              <Feather name="chevron-left" size={24} color="#fff" />
            </s.BackButton>
            <s.ContentImage>
              <s.CircleImage source={circle} />
              <FadeAnimation>
                <s.PokemonImage
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                  }}
                />
              </FadeAnimation>
            </s.ContentImage>

            <s.Content>
              <s.PokemonId>#{pokemon.id}</s.PokemonId>
              <s.PokemonName>{pokemon.name}</s.PokemonName>

              <s.PokemonTypeContainer>
                {pokemon.types.map(({ type }) => (
                  <s.PokemonType type={type.name} key={type.name}>
                    <s.PokemonTypeText>{type.name}</s.PokemonTypeText>
                  </s.PokemonType>
                ))}
              </s.PokemonTypeContainer>
            </s.Content>
            <s.DotsImage source={dots} />
          </s.Header>
          <s.Container>
            <s.Title type={pokemon.types[0].type.name}>Base stats</s.Title>
            {pokemon.stats.map((attribute) => (
              <s.StatsBar key={attribute.stat.name}>
                <s.Attributes>{attribute.stat.name}</s.Attributes>
                <s.AttributeNumber>{attribute.base_stat}</s.AttributeNumber>
                <s.ContentBar>
                  <s.ProgressBar
                    type={pokemon.types[0].type.name}
                    borderWidth={0}
                    progress={100}
                    width={attribute.base_stat}
                    color={pokemon.color}
                  />
                </s.ContentBar>
              </s.StatsBar>
            ))}
            <s.Title type={pokemon.types[0].type.name}>Abilities</s.Title>
            {pokemon.abilities.map((abilityItem) => (
              <s.Ability key={abilityItem.ability.name}>
                {abilityItem.ability.name}
              </s.Ability>
            ))}
          </s.Container>
        </ScrollView>
      )}
    </>
  );
}
