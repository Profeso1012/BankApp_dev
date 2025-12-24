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
import CaretLeft9 from "../assets/CaretLeft.svg";
import IPhoneXOrNewer from "../components/IPhoneXOrNewer";
import FrameComponent12 from "../components/FrameComponent12";
import HomeIndicator from "../components/HomeIndicator";
import {
  Padding,
  Width,
  Height,
  FontFamily,
  LineHeight,
  LetterSpacing,
  FontSize,
  Color,
  Gap,
} from "../GlobalStyles";

const ForgotPassword31 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <KeyboardAwareScrollView
      style={styles.forgotPassword3}
      contentContainerStyle={styles.forgotPassword3Content}
    >
      <Pressable
        style={styles.caretleft}
        onPress={() => navigation.navigate("InputField")}
      >
        <CaretLeft9 style={styles.icon} width={24} height={24} />
      </Pressable>
      <View style={[styles.forgotPanel, styles.panelSpaceBlock]}>
        <View style={[styles.forgotPanelContainer, styles.forgotLayout]}>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
          <Text style={styles.ohSorryEnter}>
            Oh sorry! Enter your email address below and we will send you a
            reset link.
          </Text>
        </View>
      </View>
      <View style={[styles.emailPanel, styles.panelSpaceBlock]}>
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.emailAddress}
            placeholder="victorjimoh62@gmail.com"
            multiline={false}
            placeholderTextColor="#373f46"
          />
          <View style={styles.passwordReset}>
            <View style={styles.passwordHint}>
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
      <View style={styles.bottomArea}>
        <View style={[styles.loadingArea, styles.panelSpaceBlock]}>
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
  forgotPassword3Content: {
    flexDirection: "column",
    paddingTop: 110,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 24,
    height: 812,
    flex: 1,
  },
  panelSpaceBlock: {
    paddingLeft: Padding.padding_20,
    width: Width.width_355,
    flexDirection: "row",
  },
  forgotLayout: {
    height: Height.height_84,
    zIndex: null,
  },
  clickHere2Typo: {
    textAlign: "center",
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    fontWeight: "600",
    lineHeight: LineHeight.lh_18,
    letterSpacing: LetterSpacing.ls__0_4,
    height: Height.height_18,
    fontSize: FontSize.fs_12,
  },
  forgotPassword3: {
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
  forgotPanel: {
    height: Height.height_84,
    zIndex: null,
  },
  forgotPanelContainer: {
    gap: Gap.gap_8,
    width: Width.width_335,
  },
  forgotPassword: {
    width: Width.width_338,
    fontSize: FontSize.fs_28,
    letterSpacing: LetterSpacing.ls__0_6,
    lineHeight: LineHeight.lh_34,
    fontWeight: "700",
    fontFamily: FontFamily.darkerGrotesqueBold,
    color: Color.colorDarkslategray100,
    textAlign: "left",
    height: Height.height_34,
  },
  ohSorryEnter: {
    height: 42,
    fontSize: FontSize.fs_15,
    letterSpacing: LetterSpacing.ls__0_3,
    lineHeight: LineHeight.lh_21,
    color: Color.colorSlategray,
    fontFamily: FontFamily.darkerGrotesqueRegular,
    textAlign: "left",
    width: Width.width_335,
  },
  emailPanel: {
    height: 463,
    paddingBottom: 377,
    zIndex: null,
    width: Width.width_355,
  },
  emailContainer: {
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
    paddingBottom: Padding.padding_8,
    zIndex: 2,
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.darkerGrotesqueRegular,
    width: Width.width_335,
  },
  passwordReset: {
    width: 273,
    paddingLeft: 62,
    height: Height.height_18,
    flexDirection: "row",
  },
  passwordHint: {
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
  bottomArea: {
    height: Height.height_107,
    width: Width.width_375,
    gap: Gap.gap_20,
  },
  loadingArea: {
    height: Height.height_53,
  },
  homeIndicator: {
    width: Width.width_375,
    height: Height.height_34,
    flexDirection: "row",
  },
});

export default ForgotPassword31;
