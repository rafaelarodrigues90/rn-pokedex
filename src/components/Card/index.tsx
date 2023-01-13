import React from "react";
import dotsImage from "../../../assets/img/dots.png";
import pokeballImage from "../../../assets/img/pokeballCard.png";
import * as s from "./styles";
import { TouchableOpacityProps } from "react-native";

export type PokemonType = {
  type: { name: string };
};

export type Pokemon = {
  id: number;
  name: string;
  url: string;
  types: PokemonType[];
};

type Props = {
  data: Pokemon;
} & TouchableOpacityProps;

export function Card({ data, ...rest }: Props) {
  return (
    <s.PokemonCard type={data.types[0].type.name} {...rest}>
      <s.LeftSide>
        <s.PokemonId>#{data.id}</s.PokemonId>
        <s.PokemonName>{data.name}</s.PokemonName>

        <s.ImageDetailLeft source={dotsImage} />

        <s.PokemonContentType>
          {data.types.map((pokemonType) => (
            <s.PokemonType
              key={pokemonType.type.name}
              type={pokemonType.type.name}
            >
              <s.PokemonTypeText>{pokemonType.type.name}</s.PokemonTypeText>
            </s.PokemonType>
          ))}
        </s.PokemonContentType>
      </s.LeftSide>

      <s.RightSide>
        <s.PokeballDetail source={pokeballImage} />
        <s.PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          }}
        />
      </s.RightSide>
    </s.PokemonCard>
  );
}
