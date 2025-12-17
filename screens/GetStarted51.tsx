import * as React from "react";
import { ScrollView, StyleSheet, Pressable, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import CaretLeft5 from "../assets/CaretLeft.svg";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent12 from "../components/FrameComponent12";
import HomeIndicator from "../components/HomeIndicator";
import {
  Padding,
  Width,
  Color,
  FontFamily,
  Height,
  FontSize,
  LetterSpacing,
  LineHeight,
  Gap,
} from "../GlobalStyles";

const GetStarted51 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <KeyboardAwareScrollView
      style={styles.getStarted5}
      contentContainerStyle={styles.getStarted5Content}
    >
      <View style={[styles.getStarted5Inner, styles.wrapperSpaceBlock]}>
        <View style={styles.caretleftParent}>
          <Pressable
            style={styles.caretleft}
            onPress={() => navigation.navigate("FrameComponent9")}
          >
            <CaretLeft5 style={styles.icon} width={24} height={24} />
          </Pressable>
          <View style={styles.step25Wrapper}>
            <Text style={[styles.step25, styles.step25Typo]}>Step 2/5</Text>
          </View>
        </View>
      </View>
      <View style={[styles.getStarted5Child, styles.wrapperSpaceBlock]}>
        <FrameComponent7 state="40%" />
      </View>
      <FrameComponent4 />
      <View
        style={[
          styles.byProvidingYourPhoneNumberWrapper,
          styles.wrapperSpaceBlock,
        ]}
      >
        <Text style={[styles.byProvidingYour, styles.step25Typo]}>
          By providing your phone number, you agree that we may contact you by
          SMS/text messaging. Carrier messaging and data rates may apply.
        </Text>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.instanceWrapper, styles.wrapperSpaceBlock]}>
          <FrameComponent12 state="Loading" property1="1" />
        </View>
        <View style={styles.homeIndicator}>
          <HomeIndicator mode="Light" homeIndicatorBackgroundColor="#000" />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  getStarted5Content: {
    flexDirection: "column",
    paddingTop: 59,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 20,
    height: 812,
    flex: 1,
  },
  wrapperSpaceBlock: {
    paddingLeft: Padding.padding_20,
    width: Width.width_355,
    flexDirection: "row",
  },
  step25Typo: {
    color: Color.colorSlategray,
    fontFamily: FontFamily.darkerGrotesqueMedium,
    fontWeight: "500",
  },
  getStarted5: {
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
  getStarted5Inner: {
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
  getStarted5Child: {
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
  frameParent: {
    height: Height.height_107,
    gap: Gap.gap_20,
    width: Width.width_375,
  },
  instanceWrapper: {
    height: Height.height_53,
  },
  homeIndicator: {
    height: Height.height_34,
    width: Width.width_375,
    flexDirection: "row",
  },
});

export default GetStarted51;
