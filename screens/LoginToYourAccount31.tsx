import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CaretLeft from "../assets/CaretLeft.svg";
import FrameComponent11 from "../components/FrameComponent11";
import IPhoneXOrNewer from "../components/IPhoneXOrNewer";
import FrameComponent12 from "../components/FrameComponent12";
import HomeIndicator from "../components/HomeIndicator";
import {
  Padding,
  Width,
  Color,
  Height,
  FontSize,
  LetterSpacing,
  LineHeight,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const LoginToYourAccount31 = () => {
  return (
    <KeyboardAwareScrollView
      style={styles.loginToYourAccount3}
      contentContainerStyle={styles.loginToYourAccount3Content}
    >
      <CaretLeft
        style={styles.caretleftIcon}
        width={Width.width_24}
        height={Height.height_24}
      />
      <View
        style={[
          styles.logInToYourSwiftPayAccouWrapper,
          styles.loadingAreaSpaceBlock,
        ]}
      >
        <Text style={styles.logInTo}>Log in to your Swift Pay account.</Text>
      </View>
      <FrameComponent11
        inputContainerZIndex={1}
        forgotPasswordHeight={18}
        forgotPasswordWidth={109}
      />
      <IPhoneXOrNewer />
      <View style={styles.loadingAreaParent}>
        <View style={[styles.loadingArea, styles.loadingAreaSpaceBlock]}>
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
  loginToYourAccount3Content: {
    flexDirection: "column",
    paddingTop: 110,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 24,
    height: 812,
    flex: 1,
  },
  loadingAreaSpaceBlock: {
    paddingLeft: Padding.padding_20,
    width: Width.width_355,
    flexDirection: "row",
  },
  loginToYourAccount3: {
    width: "100%",
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
    maxWidth: "100%",
  },
  caretleftIcon: {
    width: Width.width_24,
    height: Height.height_24,
    position: "absolute",
    top: 59,
    left: 20,
  },
  logInToYourSwiftPayAccouWrapper: {
    zIndex: null,
    height: Height.height_68,
  },
  logInTo: {
    width: Width.width_335,
    fontSize: FontSize.fs_28,
    letterSpacing: LetterSpacing.ls__0_6,
    lineHeight: LineHeight.lh_34,
    fontWeight: "700",
    fontFamily: FontFamily.darkerGrotesqueBold,
    color: Color.colorDarkslategray100,
    textAlign: "left",
    height: Height.height_68,
  },
  loadingAreaParent: {
    height: Height.height_107,
    gap: Gap.gap_20,
    width: Width.width_375,
  },
  loadingArea: {
    height: Height.height_53,
  },
  homeIndicator: {
    height: Height.height_34,
    width: Width.width_375,
    flexDirection: "row",
  },
});

export default LoginToYourAccount31;
