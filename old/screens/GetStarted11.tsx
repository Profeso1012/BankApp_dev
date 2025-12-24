import * as React from "react";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import CaretLeft1 from "../assets/CaretLeft.svg";
import FrameComponent7 from "../components/FrameComponent7";
import Password from "../components/Password";
import FrameComponent6 from "../components/FrameComponent6";
import {
  Padding,
  Width,
  FontFamily,
  Color,
  Height,
  FontSize,
  LetterSpacing,
  LineHeight,
  Gap,
} from "../GlobalStyles";

const GetStarted11 = () => {
  const [checkbox1checked, setCheckbox1checked] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <KeyboardAwareScrollView
      style={styles.getStarted1}
      contentContainerStyle={styles.getStarted1Content}
    >
      <View style={[styles.getStarted1Inner, styles.getSpaceBlock1]}>
        <View style={styles.caretleftParent}>
          <Pressable
            style={styles.caretleft}
            onPress={() => navigation.navigate("MainContent")}
          >
            <CaretLeft1 style={styles.icon} width={24} height={24} />
          </Pressable>
          <View style={styles.step15Wrapper}>
            <Text style={[styles.step15, styles.step15Typo]}>Step 1/5</Text>
          </View>
        </View>
      </View>
      <View style={[styles.getStarted1Child, styles.getSpaceBlock1]}>
        <FrameComponent7 state="20%" />
      </View>
      <View
        style={[styles.getStartedWithYourAccountWrapper, styles.getSpaceBlock]}
      >
        <Text style={styles.getStartedWith}>
          Get started with your account!
        </Text>
      </View>
      <View style={[styles.frameView, styles.getSpaceBlock1]}>
        <View style={styles.emailAddressParent}>
          <TextInput
            style={styles.emailAddress}
            placeholder="Email Address"
            multiline={false}
            placeholderTextColor="#7d7c93"
          />
          <Password state="Default" />
        </View>
      </View>
      <View style={[styles.getStarted1Inner2, styles.getSpaceBlock]}>
        <View style={styles.checkboxParent}>
          <View style={styles.checkbox}>
            <Checkbox
              status={checkbox1checked ? "checked" : "unchecked"}
              onPress={() => setCheckbox1checked(!checkbox1checked)}
              color="#000"
            />
          </View>
          <Text style={[styles.iHaveReadContainer, styles.step15Typo]}>
            <Text
              style={styles.iHaveRead}
            >{`I have read and I understand Swift Pay Bank’s `}</Text>
            <Text style={styles.terms}>Terms</Text>
            <Text style={styles.iHaveRead}>{` `}</Text>
            <Text style={styles.terms}>and conditions</Text>
            <Text style={styles.iHaveRead}>{` and `}</Text>
            <Text style={styles.terms}>Privacy Policy</Text>
            <Text style={styles.iHaveRead}>.</Text>
          </Text>
        </View>
      </View>
      <FrameComponent6
        state="Disabled"
        getStarted="Get Started"
        mode="Light"
        homeIndicatorBackgroundColor="#000"
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  getStarted1Content: {
    flexDirection: "column",
    paddingTop: 59,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 20,
    height: 812,
    flex: 1,
  },
  getSpaceBlock1: {
    paddingLeft: Padding.padding_20,
    width: Width.width_355,
    flexDirection: "row",
  },
  step15Typo: {
    fontFamily: FontFamily.darkerGrotesqueMedium,
    fontWeight: "500",
  },
  getSpaceBlock: {
    paddingBottom: Padding.padding_4,
    paddingLeft: Padding.padding_20,
    flexDirection: "row",
    width: Width.width_355,
  },
  getStarted1: {
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
  getStarted1Inner: {
    height: Height.height_31,
    paddingBottom: Padding.padding_7,
    zIndex: null,
  },
  caretleftParent: {
    gap: 261,
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
  step15Wrapper: {
    width: 50,
    height: Height.height_22_5,
    paddingTop: Padding.padding_1_5,
    zIndex: null,
  },
  step15: {
    width: 53,
    height: Height.height_21,
    fontSize: FontSize.fs_13,
    letterSpacing: LetterSpacing.ls__0_3,
    lineHeight: LineHeight.lh_21,
    textAlign: "center",
    color: Color.colorSlategray,
  },
  getStarted1Child: {
    height: Height.height_4,
  },
  getStartedWithYourAccountWrapper: {
    height: Height.height_72,
    zIndex: null,
  },
  getStartedWith: {
    height: Height.height_68,
    width: Width.width_338,
    fontSize: FontSize.fs_28,
    letterSpacing: LetterSpacing.ls__0_6,
    lineHeight: LineHeight.lh_34,
    fontWeight: "700",
    fontFamily: FontFamily.darkerGrotesqueBold,
    color: Color.colorDarkslategray100,
    textAlign: "left",
  },
  frameView: {
    height: 405,
    paddingBottom: 289,
    zIndex: null,
  },
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
    paddingHorizontal: Padding.padding_0,
    paddingVertical: 16,
    fontFamily: FontFamily.darkerGrotesqueRegular,
    fontSize: FontSize.fs_14,
    width: Width.width_335,
    flexDirection: "row",
  },
  getStarted1Inner2: {
    height: Height.height_34,
  },
  checkboxParent: {
    alignItems: "center",
    gap: Gap.gap_12,
    flexDirection: "row",
  },
  checkbox: {
    width: Width.width_201,
    height: Height.height_201,
    justifyContent: "center",
    alignItems: "center",
    transform: "scale(NaN)",
  },
  iHaveReadContainer: {
    width: Width.width_303,
    fontSize: FontSize.fs_11,
    letterSpacing: LetterSpacing.ls__0_2,
    lineHeight: LineHeight.lh_15,
    textAlign: "left",
  },
  iHaveRead: {
    color: Color.colorSlategray,
  },
  terms: {
    color: Color.colorDarkslateblue,
  },
});

export default GetStarted11;
