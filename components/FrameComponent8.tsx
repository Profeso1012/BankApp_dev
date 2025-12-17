import * as React from "react";
import { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import {
  Height,
  Width,
  Border,
  Color,
  Padding,
  FontSize,
  LetterSpacing,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

export type FrameComponent8Type = {
  getStarted?: string;

  /** Variant props */
  state?: string;

  /** Style props */
  getStartedWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent8 = ({
  state = "Disabled",
  getStarted,
  getStartedWidth,
}: FrameComponent8Type) => {
  const getStartedStyle = useMemo(() => {
    return {
      ...getStyleValue("width", getStartedWidth),
    };
  }, [getStartedWidth]);

  return (
    <Pressable style={styles.getStartedWrapper}>
      <Text style={[styles.getStarted, getStartedStyle]}>{getStarted}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  getStartedWrapper: {
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
  getStarted: {
    height: Height.height_21,
    width: Width.width_82,
    fontSize: FontSize.fs_15,
    letterSpacing: LetterSpacing.ls__0_3,
    lineHeight: LineHeight.lh_21,
    fontWeight: "500",
    fontFamily: FontFamily.darkerGrotesqueMedium,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
  },
});

export default FrameComponent8;
