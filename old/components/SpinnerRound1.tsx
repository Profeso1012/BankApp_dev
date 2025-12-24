import * as React from "react";
import { StyleSheet, View } from "react-native";
import SpinnerElements1 from "../assets/Spinner-Elements1.svg";
import SpinnerElements from "../assets/Spinner-Elements.svg";
import { Width, Height, Color } from "../GlobalStyles";

export type SpinnerRound1Type = {
  /** Variant props */
  property1?: 1;
};

const SpinnerRound1 = ({ property1 = 1 }: SpinnerRound1Type) => {
  return (
    <View style={styles.spinnerRoundspinnerRound10}>
      <SpinnerElements1
        style={[styles.spinnerElementsIcon, styles.spinnerIconPosition]}
        width={Width.width_24}
        height={Height.height_24}
      />
      <SpinnerElements
        style={[styles.spinnerElementsIcon2, styles.spinnerIconPosition]}
        width={Width.width_24}
        height={Height.height_24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    width: Width.width_24,
    height: Height.height_24,
  },
  spinnerRoundspinnerRound10: {
    width: Width.width_24,
    height: Height.height_24,
  },
  spinnerElementsIcon: {
    color: Color.colorGainsboro200,
  },
  spinnerElementsIcon2: {
    color: Color.colorDarkslategray300,
  },
});

export default SpinnerRound1;
