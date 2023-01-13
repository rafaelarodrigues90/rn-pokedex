import React from "react";
import * as s from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = {
  title: string;
} & TouchableOpacityProps;

export function Button({ title }: Props) {
  return (
    <s.Container>
      <s.Title>{title}</s.Title>
    </s.Container>
  );
}
