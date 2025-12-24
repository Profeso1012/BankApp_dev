import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import Flag from "../assets/Flag.svg";
import {
  FontFamily,
  Gap,
  Width,
  Color,
  Height,
  FontSize,
  LetterSpacing,
  LineHeight,
} from "../GlobalStyles";

export type PhoneNumberType = {
  /** Variant props */
  state?: string;
};

const PhoneNumber = ({ state = "Default" }: PhoneNumberType) => {
  return (
    <View style={styles.phoneNumber}>
      <View style={styles.countryCode}>
        <Text style={[styles.country, styles.codeTypo]}>Country</Text>
        <Flag
          style={styles.flagIcon}
          width={Width.width_19}
          height={Height.height_13_57}
        />
        <Text style={[styles.code, styles.codeTypo]}>+234</Text>
      </View>
      <TextInput
        style={styles.numberInput}
        placeholder="Phone Number"
        multiline={false}
        placeholderTextColor="#7d7c93"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  codeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.darkerGrotesqueRegular,
    position: "absolute",
  },
  phoneNumber: {
    flexDirection: "row",
    gap: Gap.gap_12,
  },
  countryCode: {
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
    fontSize: FontSize.fs_12,
    letterSpacing: LetterSpacing.ls__0_2,
    lineHeight: LineHeight.lh_14,
    color: Color.colorSlategray,
    width: Width.width_46,
    height: Height.height_14,
  },
  flagIcon: {
    top: 24,
    left: 3,
    width: Width.width_19,
    height: Height.height_13_57,
    position: "absolute",
  },
  code: {
    top: 22,
    left: 26,
    fontSize: FontSize.fs_15,
    letterSpacing: LetterSpacing.ls__0_3,
    lineHeight: LineHeight.lh_18,
    color: Color.colorDarkslategray200,
    width: Width.width_36,
    height: Height.height_18,
  },
  numberInput: {
    width: Width.width_261,
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.darkerGrotesqueRegular,
    overflow: "hidden",
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro100,
    borderStyle: "solid",
    height: Height.height_48,
  },
});

export default PhoneNumber;
