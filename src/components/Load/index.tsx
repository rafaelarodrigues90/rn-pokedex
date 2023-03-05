import React from "react";
import LottieView from "lottie-react-native";
import load from "./load.json";
import * as s from "./styles";

export function Load() {
  return (
    <s.Container>
      <LottieView autoPlay source={load} loop style={{ width: 250 }} />
    </s.Container>
  );
}
