import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color, Height, Width } from "../GlobalStyles";

export type HomeIndicatorType = {
  mode?: string;
  homeIndicatorBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const HomeIndicator = ({ mode = "Light", homeIndicatorBackgroundColor, }: HomeIndicatorType) => {
  const homeIndicatorStyle = useMemo(() => ({
    ...getStyleValue("backgroundColor", homeIndicatorBackgroundColor),
  }), [homeIndicatorBackgroundColor]);

  return (
    <View style={styles.homeIndicator}>
      <View style={[styles.homeIndicator2, homeIndicatorStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator: { height: Height.height_34, width: Width.width_375, flexDirection: "row" },
  homeIndicator2: { height: Height.height_5, width: Width.width_134, position: "absolute", right: 120, bottom: 8, borderRadius: Border.br_100, backgroundColor: Color.labelColorDarkPrimary, zIndex: 0 },
});

export default HomeIndicator;
