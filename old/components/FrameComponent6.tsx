import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import FrameComponent8 from "./FrameComponent8";
import HomeIndicator from "./HomeIndicator";
import { Height, Gap, Width, Padding } from "../GlobalStyles";

export type FrameComponent6Type = {
  state?: string;
  getStarted?: string;
  getStartedWidth?: string;
  mode?: string;
  homeIndicatorBackgroundColor?: string;
};

const FrameComponent6 = ({
  state,
  getStarted,
  getStartedWidth,
  mode,
  homeIndicatorBackgroundColor,
}: FrameComponent6Type) => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.instanceWrapper}>
        <FrameComponent8
          state={state}
          getStarted={getStarted}
          getStartedWidth={getStartedWidth}
        />
      </View>
      <View style={styles.homeIndicator}>
        <HomeIndicator
          mode={mode}
          homeIndicatorBackgroundColor={homeIndicatorBackgroundColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParent: {
    height: Height.height_107,
    gap: Gap.gap_20,
    width: Width.width_375,
  },
  instanceWrapper: {
    width: Width.width_355,
    height: Height.height_53,
    paddingLeft: Padding.padding_20,
    flexDirection: "row",
  },
  homeIndicator: {
    height: Height.height_34,
    flexDirection: "row",
    width: Width.width_375,
  },
});

export default FrameComponent6;
