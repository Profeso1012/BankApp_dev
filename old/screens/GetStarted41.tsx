import * as React from "react";
import { ScrollView, StyleSheet, Pressable, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import CaretLeft4 from "../assets/CaretLeft.svg";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent6 from "../components/FrameComponent6";
import {
  Padding,
  Width,
  Color,
  FontFamily,
  Height,
  FontSize,
  LetterSpacing,
  LineHeight,
} from "../GlobalStyles";

const GetStarted41 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <KeyboardAwareScrollView
      style={styles.getStarted4}
      contentContainerStyle={styles.getStarted4Content}
    >
      <View style={[styles.getStarted4Inner, styles.getSpaceBlock]}>
        <View style={styles.caretleftParent}>
          <Pressable
            style={styles.caretleft}
            onPress={() => navigation.navigate("FrameComponent9")}
          >
            <CaretLeft4 style={styles.icon} width={24} height={24} />
          </Pressable>
          <View style={styles.step25Wrapper}>
            <Text style={[styles.step25, styles.step25Typo]}>Step 2/5</Text>
          </View>
        </View>
      </View>
      <View style={[styles.getStarted4Child, styles.getSpaceBlock]}>
        <FrameComponent7 state="40%" />
      </View>
      <FrameComponent4 />
      <View
        style={[styles.byProvidingYourPhoneNumberWrapper, styles.getSpaceBlock]}
      >
        <Text style={[styles.byProvidingYour, styles.step25Typo]}>
          By providing your phone number, you agree that we may contact you by
          SMS/text messaging. Carrier messaging and data rates may apply.
        </Text>
      </View>
      <FrameComponent6 mode="Light" homeIndicatorBackgroundColor="#000" />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  getStarted4Content: {
    flexDirection: "column",
    paddingTop: 59,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 20,
    height: 812,
    flex: 1,
  },
  getSpaceBlock: {
    paddingLeft: Padding.padding_20,
    width: Width.width_355,
    flexDirection: "row",
  },
  step25Typo: {
    color: Color.colorSlategray,
    fontFamily: FontFamily.darkerGrotesqueMedium,
    fontWeight: "500",
  },
  getStarted4: {
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
  getStarted4Inner: {
    height: Height.height_31,
    paddingBottom: Padding.padding_7,
    zIndex: null,
  },
  caretleftParent: {
    gap: 259,
    width: Width.width_335,
    height: Height.height_24,
    flexDirection: "row",
    zIndex: null,
  },
  caretleft: {
    width: Width.width_24,
    height: Height.height_24,
  },
  icon: {
    nodeWidth: 24,
    nodeHeight: 24,
  },
  step25Wrapper: {
    width: 52,
    height: Height.height_22_5,
    paddingTop: Padding.padding_1_5,
    zIndex: null,
  },
  step25: {
    width: 55,
    height: Height.height_21,
    fontSize: FontSize.fs_13,
    letterSpacing: LetterSpacing.ls__0_3,
    lineHeight: LineHeight.lh_21,
    textAlign: "right",
  },
  getStarted4Child: {
    height: Height.height_4,
  },
  byProvidingYourPhoneNumberWrapper: {
    height: 49,
    paddingBottom: Padding.padding_4,
    zIndex: null,
  },
  byProvidingYour: {
    height: 45,
    fontSize: FontSize.fs_11,
    letterSpacing: LetterSpacing.ls__0_2,
    lineHeight: LineHeight.lh_15,
    textAlign: "left",
    width: Width.width_335,
  },
});

export default GetStarted41;
