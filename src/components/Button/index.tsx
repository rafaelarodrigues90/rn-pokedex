import React from "react";
import * as s from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = {
  title: string;
} & TouchableOpacityProps;

export function Button({ title, ...rest }: Props) {
  return (
    <s.Container {...rest}>
      <s.Title>{title}</s.Title>
    </s.Container>
  );
}
