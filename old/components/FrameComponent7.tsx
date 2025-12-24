import * as React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Width, Height, Border, Color } from "../GlobalStyles";

export type FrameComponent7Type = {
  /** Variant props */
  state?: "20%" | "40%";
};

const getFrameStyle = (styleKey: string) => {
  switch (styleKey) {
    case "40%":
      return {
        width: Width.width_134,
      };
  }
};
const FrameComponent7 = ({ state = "20%" }: FrameComponent7Type) => {
  const variantKey = `${state}`;

  return (
    <View style={[styles.root, styles.rootLayout]}>
      <LinearGradient
        style={[
          styles.instanceChild,
          getFrameStyle(variantKey),
          styles.rootLayout,
        ]}
        locations={[0, 1]}
        colors={["#285998", "#4681aa"]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootLayout: {
    overflow: "hidden",
    height: Height.height_4,
  },
  root: {
    width: Width.width_335,
    borderRadius: Border.br_8,
    backgroundColor: Color.colorWhitesmoke,
    flexDirection: "row",
  },
  instanceChild: {
    width: 67,
    backgroundColor: "transparent",
  },
});

export default FrameComponent7;
