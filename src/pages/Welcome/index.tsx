import React from "react";
import * as s from "./styles";
import AnimatedLottieView from "lottie-react-native";
import squirtleAnimation from "../../../assets/squirtle.json";
import { Button } from "../../components/Button";

export function Welcome() {
  return (
    <s.Container>
      <s.Content>
        <s.WrapperAnimation>
          <s.WrapperImage>
            <AnimatedLottieView
              style={{ width: 200 }}
              autoPlay
              source={squirtleAnimation}
              loop
            />
          </s.WrapperImage>
        </s.WrapperAnimation>

        <s.Title>Bem-vindo</s.Title>
        <s.Subtitle>Encontre todos os pokémons em um só lugar</s.Subtitle>
      </s.Content>
      <s.Footer>
        <Button title="Iniciar" />
      </s.Footer>
    </s.Container>
  );
}
