import * as React from "react";
import { useState, useMemo } from "react";
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

export type FrameComponent11Type = {
  /** Style props */
  inputContainerZIndex?: number;
  forgotPasswordHeight?: number | string;
  forgotPasswordWidth?: number | string;

  /** Action props */
  onForgotPasswordPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent11 = ({
  inputContainerZIndex,
  onForgotPasswordPress,
  forgotPasswordHeight,
  forgotPasswordWidth,
}: FrameComponent11Type) => {
  const [frameIconchecked, setFrameIconchecked] = useState(false);
  const inputContainerStyle = useMemo(() => {
    return {
      ...getStyleValue("zIndex", inputContainerZIndex),
    };
  }, [inputContainerZIndex]);

  const forgotPasswordStyle = useMemo(() => {
    return {
      ...getStyleValue("height", forgotPasswordHeight),
      ...getStyleValue("width", forgotPasswordWidth),
    };
  }, [forgotPasswordHeight, forgotPasswordWidth]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.inputContainerWrapper}>
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <TextInput
          style={[styles.emailAddress, styles.passwordTypo]}
          placeholder="victorjimoh62@gmail.com"
          multiline={false}
          placeholderTextColor="#373f46"
        />
        <TextInput
          style={[styles.password, styles.passwordTypo]}
          placeholder="Password"
          multiline={false}
          placeholderTextColor="#313131"
        />
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={styles.wrapper}>
            <Checkbox
              status={frameIconchecked ? "checked" : "unchecked"}
              onPress={() => setFrameIconchecked(!frameIconchecked)}
              color="#235697"
            />
          </View>
          <View style={[styles.rememberMeParent, styles.parentFlexBox]}>
            <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
              Remember Me
            </Text>
            <Pressable onPress={onForgotPasswordPress}>
              <Text style={[styles.forgotPassword2, styles.rememberMeTypo]}>
                Forgot Password?
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordTypo: {
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.darkerGrotesqueRegular,
    paddingBottom: Padding.padding_8,
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
  inputContainerWrapper: {
    zIndex: null,
    width: Width.width_355,
    height: 479,
    paddingLeft: Padding.padding_20,
    paddingBottom: 323,
    flexDirection: "row",
  },
  inputContainer: {
    height: Height.height_156,
    gap: Gap.gap_20,
    width: Width.width_335,
  },
  emailAddress: {
    zIndex: 3,
  },
  password: {
    alignItems: "flex-end",
    flexDirection: "row",
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

export default FrameComponent11;
