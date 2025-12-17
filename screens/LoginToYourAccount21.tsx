import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import CaretLeft from "../assets/CaretLeft.svg";
import FrameComponent11 from "../components/FrameComponent11";
import IPhoneXOrNewer from "../components/IPhoneXOrNewer";
import FrameComponent6 from "../components/FrameComponent6";
import {
  Color,
  Width,
  Height,
  Padding,
  FontSize,
  LetterSpacing,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

const LoginToYourAccount21 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <KeyboardAwareScrollView
      style={styles.loginToYourAccount2}
      contentContainerStyle={styles.loginToYourAccount2Content}
    >
      <CaretLeft
        style={styles.caretleftIcon}
        width={Width.width_24}
        height={Height.height_24}
      />
      <View style={styles.logInToYourSwiftPayAccouWrapper}>
        <Text style={styles.logInTo}>Log in to your Swift Pay account.</Text>
      </View>
      <FrameComponent11
        onForgotPasswordPress={() => navigation.navigate("ForgotPassword11")}
      />
      <IPhoneXOrNewer />
      <FrameComponent6 mode="Light" homeIndicatorBackgroundColor="#000" />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  loginToYourAccount2Content: {
    flexDirection: "column",
    paddingTop: 110,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 24,
    height: 812,
    flex: 1,
  },
  loginToYourAccount2: {
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
    width: Width.width_355,
    flexDirection: "row",
    paddingLeft: Padding.padding_20,
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
});

export default LoginToYourAccount21;
