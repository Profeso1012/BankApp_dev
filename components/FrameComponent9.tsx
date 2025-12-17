import * as React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import {
  Gap,
  Width,
  Height,
  Color,
  Padding,
  FontFamily,
  FontSize,
} from "../GlobalStyles";

const FrameComponent9 = () => {
  return (
    <View style={styles.emailAddressParent}>
      <TextInput
        style={styles.emailAddress}
        placeholder="victorjimoh62@gmail.com"
        multiline={false}
        placeholderTextColor="#373f46"
      />
      <TextInput
        style={styles.emailAddress}
        placeholder="Password"
        multiline={false}
        placeholderTextColor="#313131"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailAddressParent: {
    height: 116,
    gap: Gap.gap_20,
    width: Width.width_335,
  },
  emailAddress: {
    height: Height.height_48,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro100,
    borderBottomWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: Padding.padding_8,
    fontFamily: FontFamily.darkerGrotesqueRegular,
    fontSize: FontSize.fs_12,
    width: Width.width_335,
  },
});

export default FrameComponent9;
