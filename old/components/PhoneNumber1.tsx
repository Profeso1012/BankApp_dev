import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import Flag from "../assets/Flag.svg";
import {
  FontFamily,
  Gap,
  Width,
  Color,
  Height,
  LetterSpacing,
  LineHeight,
  FontSize,
} from "../GlobalStyles";

export type PhoneNumber1Type = {
  /** Variant props */
  state?: string;
};

const PhoneNumber1 = ({ state = "Default" }: PhoneNumber1Type) => {
  return (
    <View style={styles.phoneNumber}>
      <View style={styles.countryParent}>
        <Text style={[styles.country, styles.countryTypo]}>Country</Text>
        <Flag
          style={styles.flagIcon}
          width={Width.width_19}
          height={Height.height_13_57}
        />
        <Text style={[styles.countryCode, styles.countryTypo]}>+234</Text>
      </View>
      <TextInput
        style={styles.phoneNumberChild}
        placeholder="08085472417"
        multiline={false}
        placeholderTextColor="#373f46"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  countryTypo: {
    textAlign: "left",
    fontFamily: FontFamily.darkerGrotesqueRegular,
    position: "absolute",
  },
  phoneNumber: {
    flexDirection: "row",
    gap: Gap.gap_12,
  },
  countryParent: {
    width: Width.width_62,
    overflow: "hidden",
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro100,
    borderStyle: "solid",
    height: Height.height_48,
  },
  country: {
    top: 0,
    left: 0,
    letterSpacing: LetterSpacing.ls__0_2,
    lineHeight: LineHeight.lh_14,
    color: Color.colorSlategray,
    width: Width.width_46,
    height: Height.height_14,
    fontSize: FontSize.fs_12,
    textAlign: "left",
  },
  flagIcon: {
    top: 24,
    left: 3,
    width: Width.width_19,
    height: Height.height_13_57,
    position: "absolute",
  },
  countryCode: {
    top: 22,
    left: 26,
    fontSize: FontSize.fs_15,
    letterSpacing: LetterSpacing.ls__0_3,
    lineHeight: LineHeight.lh_18,
    color: Color.colorDarkslategray200,
    width: Width.width_36,
    height: Height.height_18,
  },
  phoneNumberChild: {
    width: Width.width_261,
    fontFamily: FontFamily.darkerGrotesqueRegular,
    fontSize: FontSize.fs_12,
    overflow: "hidden",
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro100,
    borderStyle: "solid",
    height: Height.height_48,
  },
});

export default PhoneNumber1;
