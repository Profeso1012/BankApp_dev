import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import SpinnerRound1 from "./SpinnerRound1";
import { Height, Width, Border, Color, Padding } from "../GlobalStyles";

export type FrameComponent12Type = {
  property1?: 1;

  /** Variant props */
  state?: string;
};

const FrameComponent12 = ({
  state = "Disabled",
  property1 = 1,
}: FrameComponent12Type) => {
  return (
    <View style={styles.spinnerRoundspinnerRound10Wrapper}>
      <SpinnerRound1 property1={property1} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerRoundspinnerRound10Wrapper: {
    height: Height.height_53,
    width: Width.width_335,
    borderRadius: Border.br_8,
    backgroundColor: Color.colorLightsteelblue,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.padding_128,
    paddingVertical: Padding.padding_16,
  },
});

export default FrameComponent12;
