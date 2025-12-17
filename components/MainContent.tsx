import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import HomeIndicator from "./HomeIndicator";
import {
  Gap,
  Width,
  Height,
  FontFamily,
  LineHeight,
  LetterSpacing,
  FontSize,
  Padding,
  Border,
  Color,
} from "../GlobalStyles";

const MainContent = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.mainContent}>
      <View style={[styles.mainContentInner, styles.mainContentInnerLayout]}>
        <View
          style={[
            styles.mobileBankingTheWorldLovesParent,
            styles.buttonAreaLayout1,
          ]}
        >
          <Text style={styles.mobileBankingThe}>
            Mobile banking the world loves.
          </Text>
          <Text style={styles.getSendingSpending}>
            Get sending, spending and saving with your contactless card.
          </Text>
        </View>
      </View>
      <View style={styles.actions}>
        <View style={[styles.actionButtons, styles.buttonAreaLayout]}>
          <View style={[styles.buttonArea, styles.buttonAreaLayout]}>
            <Pressable
              style={styles.loginButton}
              onPress={() => navigation.navigate("InputField")}
            >
              <Text style={[styles.login, styles.loginTypo]}>Login</Text>
            </Pressable>
            <LinearGradient
              style={[styles.wrapper, styles.wrapperLayout]}
              locations={[0, 1]}
              colors={[Color.colorDarkslateblue, "#114280"]}
            >
              <Pressable
                style={styles.wrapperLayout}
                onPress={() => navigation.navigate("FrameComponent6")}
              >
                <Text style={[styles.getStarted, styles.loginTypo]}>
                  Get Started
                </Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.homeIndicator}>
          <HomeIndicator mode="Light" homeIndicatorBackgroundColor="#000" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContentInnerLayout: {
    height: 126,
    zIndex: null,
  },
  buttonAreaLayout1: {
    gap: Gap.gap_12,
    width: Width.width_335,
  },
  buttonAreaLayout: {
    height: Height.height_53,
    flexDirection: "row",
  },
  loginTypo: {
    fontFamily: FontFamily.darkerGrotesqueMedium,
    fontWeight: "500",
    lineHeight: LineHeight.lh_21,
    height: Height.height_21,
    letterSpacing: LetterSpacing.ls__0_3,
    fontSize: FontSize.fs_15,
    textAlign: "center",
  },
  wrapperLayout: {
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
    paddingVertical: Padding.padding_16,
    paddingHorizontal: Padding.padding_0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_8,
    flexDirection: "row",
    overflow: "hidden",
  },
  mainContent: {
    height: 331,
    borderTopLeftRadius: Border.br_16,
    borderTopRightRadius: Border.br_16,
    paddingTop: Padding.padding_32,
    gap: 66,
    overflow: "hidden",
    backgroundColor: Color.labelColorDarkPrimary,
    width: Width.width_375,
  },
  mainContentInner: {
    paddingLeft: Padding.padding_20,
    flexDirection: "row",
    width: Width.width_355,
  },
  mobileBankingTheWorldLovesParent: {
    height: 126,
    zIndex: null,
  },
  mobileBankingThe: {
    width: Width.width_338,
    height: Height.height_68,
    fontSize: FontSize.fs_28,
    letterSpacing: LetterSpacing.ls__0_6,
    lineHeight: LineHeight.lh_34,
    fontWeight: "700",
    fontFamily: FontFamily.darkerGrotesqueBold,
    color: Color.colorDarkslategray100,
    textAlign: "center",
  },
  getSendingSpending: {
    height: 46,
    lineHeight: 23,
    fontFamily: FontFamily.darkerGrotesqueRegular,
    color: Color.colorSlategray,
    letterSpacing: LetterSpacing.ls__0_3,
    fontSize: FontSize.fs_15,
    textAlign: "center",
    width: Width.width_335,
  },
  actions: {
    height: Height.height_107,
    alignItems: "flex-end",
    gap: Gap.gap_20,
    width: Width.width_375,
  },
  actionButtons: {
    justifyContent: "flex-end",
    paddingRight: Padding.padding_20,
    width: Width.width_355,
    zIndex: null,
    height: Height.height_53,
  },
  buttonArea: {
    zIndex: 1,
    gap: Gap.gap_12,
    width: Width.width_335,
  },
  loginButton: {
    width: 119,
    zIndex: 2,
    paddingVertical: Padding.padding_16,
    paddingHorizontal: Padding.padding_0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_8,
    height: Height.height_53,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  login: {
    width: 41,
  },
  wrapper: {
    zIndex: 1,
  },
  getStarted: {
    width: Width.width_82,
    color: Color.labelColorDarkPrimary,
  },
  homeIndicator: {
    height: Height.height_34,
    flexDirection: "row",
    backgroundColor: Color.labelColorDarkPrimary,
    width: Width.width_375,
  },
});

export default MainContent;
