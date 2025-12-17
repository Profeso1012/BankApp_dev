import * as React from "react";
import { ScrollView, StyleSheet, Pressable, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import CaretLeft3 from "../assets/CaretLeft.svg";
import FrameComponent7 from "../components/FrameComponent7";
import InputArea from "../components/InputArea";
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

const GetStarted31 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <KeyboardAwareScrollView
      style={styles.getStarted3}
      contentContainerStyle={styles.getStarted3Content}
    >
      <View style={[styles.steps, styles.stepsSpaceBlock]}>
        <View style={styles.step}>
          <Pressable
            style={styles.caretleft}
            onPress={() => navigation.navigate("FrameComponent9")}
          >
            <CaretLeft3 style={styles.icon} width={24} height={24} />
          </Pressable>
          <View style={styles.stepContainer}>
            <Text style={[styles.step25, styles.step25Typo]}>Step 2/5</Text>
          </View>
        </View>
      </View>
      <View style={[styles.illustrationContainer, styles.stepsSpaceBlock]}>
        <FrameComponent7 state="40%" />
      </View>
      <View style={[styles.inputAreaWrapper, styles.stepsSpaceBlock]}>
        <InputArea />
      </View>
      <View style={[styles.termsAgreement, styles.stepsSpaceBlock]}>
        <Text style={[styles.byProvidingYour, styles.step25Typo]}>
          By providing your phone number, you agree that we may contact you by
          SMS/text messaging. Carrier messaging and data rates may apply.
        </Text>
      </View>
      <FrameComponent6
        state="Disabled"
        getStarted="Submit"
        getStartedWidth="51"
        mode="Light"
        homeIndicatorBackgroundColor="#000"
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  getStarted3Content: {
    flexDirection: "column",
    paddingTop: 59,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 20,
    height: 812,
    flex: 1,
  },
  stepsSpaceBlock: {
    paddingLeft: Padding.padding_20,
    width: Width.width_355,
    flexDirection: "row",
  },
  step25Typo: {
    color: Color.colorSlategray,
    fontFamily: FontFamily.darkerGrotesqueMedium,
    fontWeight: "500",
  },
  getStarted3: {
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
  steps: {
    height: Height.height_31,
    paddingBottom: Padding.padding_7,
    zIndex: null,
  },
  step: {
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
  stepContainer: {
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
  illustrationContainer: {
    height: Height.height_4,
  },
  inputAreaWrapper: {
    height: 482,
    paddingBottom: 313,
    zIndex: null,
  },
  termsAgreement: {
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

export default GetStarted31;
