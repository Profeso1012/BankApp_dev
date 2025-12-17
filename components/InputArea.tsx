import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import PhoneNumber from "./PhoneNumber";
import {
  Height,
  Gap,
  Width,
  FontSize,
  LetterSpacing,
  LineHeight,
  FontFamily,
  Color,
} from "../GlobalStyles";

const InputArea = () => {
  return (
    <View style={styles.inputArea}>
      <View style={styles.phoneNumberDetails}>
        <Text style={styles.whatsYourMobile}>What’s your mobile number?</Text>
        <Text style={styles.wellUseThis}>
          We’ll use this as your Swift Pay account number.
        </Text>
      </View>
      <PhoneNumber state="Default" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    height: Height.height_169,
    gap: Gap.gap_24,
    width: Width.width_335,
  },
  phoneNumberDetails: {
    height: Height.height_97,
    zIndex: null,
    gap: Gap.gap_8,
    width: Width.width_335,
  },
  whatsYourMobile: {
    width: Width.width_338,
    height: Height.height_68,
    fontSize: FontSize.fs_28,
    letterSpacing: LetterSpacing.ls__0_6,
    lineHeight: LineHeight.lh_34,
    fontWeight: "700",
    fontFamily: FontFamily.darkerGrotesqueBold,
    color: Color.colorDarkslategray100,
    textAlign: "left",
  },
  wellUseThis: {
    height: Height.height_21,
    fontSize: FontSize.fs_15,
    letterSpacing: LetterSpacing.ls__0_3,
    lineHeight: LineHeight.lh_21,
    fontFamily: FontFamily.darkerGrotesqueRegular,
    color: Color.colorSlategray,
    textAlign: "left",
    width: Width.width_335,
  },
});

export default InputArea;
