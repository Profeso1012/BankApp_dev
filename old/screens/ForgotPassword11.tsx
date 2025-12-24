import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import CaretLeft7 from "../assets/CaretLeft.svg";
import IPhoneXOrNewer from "../components/IPhoneXOrNewer";
import FrameComponent6 from "../components/FrameComponent6";
import {
  Padding,
  Width,
  FontFamily,
  LineHeight,
  LetterSpacing,
  FontSize,
  Height,
  Color,
  Gap,
} from "../GlobalStyles";

const ForgotPassword11 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <KeyboardAwareScrollView
      style={styles.forgotPassword1}
      contentContainerStyle={styles.forgotPassword1Content}
    >
      <Pressable
        style={styles.caretleft}
        onPress={() => navigation.navigate("InputField")}
      >
        <CaretLeft7 style={styles.icon} width={24} height={24} />
      </Pressable>
      <View style={[styles.forgotPassword1Inner, styles.forgotSpaceBlock]}>
        <View style={styles.forgotPasswordParent}>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
          <Text style={[styles.ohSorryEnter, styles.ohSorryEnterTypo]}>
            Oh sorry! Enter your email address below and we will send you a
            reset link.
          </Text>
        </View>
      </View>
      <View style={[styles.forgotPassword1Child, styles.forgotSpaceBlock]}>
        <View style={styles.emailAddressParent}>
          <TextInput
            style={[styles.emailAddress, styles.ohSorryEnterTypo]}
            placeholder="Email Address"
            multiline={false}
            placeholderTextColor="#7d7c93"
          />
          <View style={styles.frameWrapper}>
            <View style={styles.rememberYourPasswordParent}>
              <Text
                style={[styles.rememberYourPassword, styles.clickHere2Typo]}
              >
                Remember your password?
              </Text>
              <Pressable onPress={() => navigation.navigate("InputField")}>
                <Text style={[styles.clickHere2, styles.clickHere2Typo]}>
                  Click here
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <IPhoneXOrNewer />
      <FrameComponent6
        state="Disabled"
        getStarted="Next"
        getStartedWidth="34"
        mode="Light"
        homeIndicatorBackgroundColor="#000"
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  forgotPassword1Content: {
    flexDirection: "column",
    paddingTop: 110,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 24,
    height: 812,
    flex: 1,
  },
  forgotSpaceBlock: {
    paddingLeft: Padding.padding_20,
    width: Width.width_355,
    flexDirection: "row",
    zIndex: null,
  },
  ohSorryEnterTypo: {
    fontFamily: FontFamily.darkerGrotesqueRegular,
    width: Width.width_335,
  },
  clickHere2Typo: {
    textAlign: "center",
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    lineHeight: LineHeight.lh_18,
    letterSpacing: LetterSpacing.ls__0_4,
    fontSize: FontSize.fs_12,
    height: Height.height_18,
  },
  forgotPassword1: {
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
  forgotPassword1Inner: {
    height: Height.height_84,
  },
  forgotPasswordParent: {
    gap: Gap.gap_8,
    width: Width.width_335,
    height: Height.height_84,
    zIndex: null,
  },
  forgotPassword: {
    width: Width.width_338,
    height: Height.height_34,
    fontSize: FontSize.fs_28,
    letterSpacing: LetterSpacing.ls__0_6,
    lineHeight: LineHeight.lh_34,
    fontWeight: "700",
    fontFamily: FontFamily.darkerGrotesqueBold,
    color: Color.colorDarkslategray100,
    textAlign: "left",
  },
  ohSorryEnter: {
    height: 42,
    fontSize: FontSize.fs_15,
    letterSpacing: LetterSpacing.ls__0_3,
    lineHeight: LineHeight.lh_21,
    color: Color.colorSlategray,
    textAlign: "left",
  },
  forgotPassword1Child: {
    height: 463,
    paddingBottom: 377,
  },
  emailAddressParent: {
    height: 86,
    zIndex: 2,
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
    fontSize: FontSize.fs_14,
    zIndex: 2,
    flexDirection: "row",
  },
  frameWrapper: {
    width: 273,
    paddingLeft: 62,
    height: Height.height_18,
    flexDirection: "row",
  },
  rememberYourPasswordParent: {
    gap: Gap.gap_4,
    flexDirection: "row",
  },
  rememberYourPassword: {
    width: 154,
    color: Color.colorSlategray,
  },
  clickHere2: {
    width: 58,
    color: Color.colorDarkslateblue,
  },
});

export default ForgotPassword11;
