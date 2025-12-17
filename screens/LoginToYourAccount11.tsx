import * as React from "react";
import { ScrollView, StyleSheet, Pressable, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import CaretLeft6 from "../assets/CaretLeft.svg";
import InputField from "../components/InputField";
import IPhoneXOrNewer from "../components/IPhoneXOrNewer";
import FrameComponent6 from "../components/FrameComponent6";
import {
  Padding,
  Width,
  Color,
  Height,
  FontSize,
  LetterSpacing,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

const LoginToYourAccount11 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <KeyboardAwareScrollView
      style={styles.loginToYourAccount1}
      contentContainerStyle={styles.loginToYourAccount1Content}
    >
      <Pressable
        style={styles.caretleft}
        onPress={() => navigation.navigate("MainContent")}
      >
        <CaretLeft6 style={styles.icon} width={24} height={24} />
      </Pressable>
      <View
        style={[
          styles.logInToYourSwiftPayAccouWrapper,
          styles.wrapperSpaceBlock,
        ]}
      >
        <Text style={styles.logInTo}>Log in to your Swift Pay account.</Text>
      </View>
      <View style={[styles.inputFieldWrapper, styles.wrapperSpaceBlock]}>
        <InputField />
      </View>
      <IPhoneXOrNewer />
      <FrameComponent6
        state="Disabled"
        getStarted="Log in"
        getStartedWidth="45"
        mode="Light"
        homeIndicatorBackgroundColor="#000"
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  loginToYourAccount1Content: {
    flexDirection: "column",
    paddingTop: 110,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 24,
    height: 812,
    flex: 1,
  },
  wrapperSpaceBlock: {
    paddingLeft: Padding.padding_20,
    flexDirection: "row",
    width: Width.width_355,
    zIndex: null,
  },
  loginToYourAccount1: {
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
  caretleft: {
    position: "absolute",
    left: 20,
    top: 59,
    width: Width.width_24,
    height: Height.height_24,
  },
  icon: {
    nodeWidth: 24,
    nodeHeight: 24,
  },
  logInToYourSwiftPayAccouWrapper: {
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
  inputFieldWrapper: {
    height: 479,
    paddingBottom: 323,
  },
});

export default LoginToYourAccount11;
