import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Height,
  Width,
  Border,
  Padding,
  FontSize,
  LetterSpacing,
  LineHeight,
  FontFamily,
  Color,
} from "../GlobalStyles";

const StatusBarTime = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.timeValue}>9:41</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: Height.height_21,
    width: Width.width_54,
    borderRadius: Border.br_24,
    flexDirection: "row",
    paddingTop: Padding.padding_1,
  },
  timeValue: {
    height: Height.height_20,
    width: Width.width_57,
    fontSize: FontSize.fs_15,
    letterSpacing: LetterSpacing.ls__0_5,
    lineHeight: LineHeight.lh_20,
    fontWeight: "600",
    fontFamily: FontFamily.darkerGrotesqueSemiBold,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
  },
});

export default StatusBarTime;
