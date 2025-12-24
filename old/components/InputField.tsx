import * as React from "react";
import { useState } from "react";
import { TextInput, StyleSheet, View, Text, Pressable } from "react-native";
import { Checkbox } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  Padding,
  Color,
  Height,
  Width,
  LineHeight,
  LetterSpacing,
  Gap,
} from "../GlobalStyles";

const InputField = () => {
  const [frameIconchecked, setFrameIconchecked] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.inputField}>
      <TextInput
        style={[styles.emailAddress, styles.passwordTypo]}
        placeholder="Email Address"
        multiline={false}
        placeholderTextColor="#7d7c93"
      />
      <TextInput
        style={[styles.password, styles.passwordTypo]}
        placeholder="Password"
        multiline={false}
        placeholderTextColor="#7d7c93"
      />
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.wrapper}>
          <Checkbox
            status={frameIconchecked ? "checked" : "unchecked"}
            onPress={() => setFrameIconchecked(!frameIconchecked)}
            color="#000"
          />
        </View>
        <View style={[styles.rememberMeParent, styles.parentFlexBox]}>
          <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
            Remember Me
          </Text>
          <Pressable onPress={() => navigation.navigate("ForgotPassword11")}>
            <Text style={[styles.forgotPassword2, styles.rememberMeTypo]}>
              Forgot Password?
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordTypo: {
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.darkerGrotesqueRegular,
    paddingHorizontal: Padding.padding_0,
    flexDirection: "row",
    overflow: "hidden",
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro100,
    borderStyle: "solid",
    height: Height.height_48,
    width: Width.width_335,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  rememberMeTypo: {
    textAlign: "left",
    lineHeight: LineHeight.lh_18,
    letterSpacing: LetterSpacing.ls__0_3,
    fontSize: FontSize.fs_13,
    height: Height.height_18,
  },
  inputField: {
    height: Height.height_156,
    zIndex: 1,
    gap: Gap.gap_20,
    width: Width.width_335,
  },
  emailAddress: {
    paddingVertical: 16,
    zIndex: 2,
  },
  password: {
    paddingVertical: Padding.padding_14,
    zIndex: 3,
  },
  frameParent: {
    gap: Gap.gap_12,
    zIndex: 1,
  },
  wrapper: {
    width: Width.width_201,
    height: Height.height_201,
    justifyContent: "center",
    alignItems: "center",
    transform: "scale(NaN)",
  },
  rememberMeParent: {
    width: Width.width_303,
    justifyContent: "space-between",
    gap: Gap.gap_20,
  },
  rememberMe: {
    width: Width.width_88,
    fontWeight: "500",
    fontFamily: FontFamily.darkerGrotesqueMedium,
    color: Color.colorSlategray,
  },
  forgotPassword2: {
    width: Width.width_109,
    fontWeight: "700",
    fontFamily: FontFamily.darkerGrotesqueBold,
    color: Color.colorDarkslateblue,
  },
});

export default InputField;
