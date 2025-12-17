import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import PhoneNumber1 from "./PhoneNumber1";
import {
  Width,
  Padding,
  Height,
  Gap,
  FontSize,
  LetterSpacing,
  LineHeight,
  FontFamily,
  Color,
} from "../GlobalStyles";

const FrameComponent4 = () => {
  return (
    <View style={styles.getStarted4Inner}>
      <View style={styles.frameParent}>
        <View style={styles.whatsYourMobileNumberParent}>
          <Text style={styles.whatsYourMobile}>What’s your mobile number?</Text>
          <Text style={styles.wellUseThis}>
            We’ll use this as your Swift Pay account number.
          </Text>
        </View>
        <PhoneNumber1 state="Completed" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  getStarted4Inner: {
    width: Width.width_355,
    height: 482,
    flexDirection: "row",
    paddingLeft: Padding.padding_20,
    paddingBottom: 313,
    zIndex: null,
  },
  frameParent: {
    height: Height.height_169,
    gap: Gap.gap_24,
    width: Width.width_335,
  },
  whatsYourMobileNumberParent: {
    height: Height.height_97,
    gap: Gap.gap_8,
    width: Width.width_335,
    zIndex: null,
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

export default FrameComponent4;
