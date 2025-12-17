import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import A86295f41b41e39a667ec7cd8c03c71 from "../assets/31a86295-f41b-41e3-9a66-7ec7cd8c03c71.svg";
import F83ba6f8060e4b84a2272d32d6af17ad1 from "../assets/f83ba6f8-060e-4b84-a227-2d32d6af17ad1.svg";
import MainContent from "../components/MainContent";
import { Padding, Width, Color } from "../GlobalStyles";

const OnboardingScreen = () => {
  return (
    <LinearGradient
      style={[styles.onboardingScreen, styles.scrollviewLayout]}
      locations={[0, 1]}
      colors={[Color.colorDarkslateblue, "#114280"]}
    >
      <ScrollView
        style={[styles.scrollview, styles.scrollviewLayout]}
        contentContainerStyle={styles.onboardingScreenScrollViewContent}
      >
        <LinearGradient
          style={[styles.content, styles.contentSpaceBlock]}
          locations={[0, 1]}
          colors={[Color.colorDarkslateblue, "#114280"]}
        >
          <View style={[styles.header, styles.headerFlexBox]}>
            <View style={[styles.defaultMonochrome2, styles.headerFlexBox]}>
              <A86295f41b41e39a667ec7cd8c03c71
                style={styles.a86295F41b41e39a667ec7cd8cIcon}
                width={28}
                height={28}
              />
              <View style={styles.f83ba6f8060e4b84A2272d32d6Wrapper}>
                <F83ba6f8060e4b84a2272d32d6af17ad1
                  style={styles.f83ba6f8060e4b84A2272d32d6Icon}
                  width={136}
                  height={19}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.devicesAppleIphone11Pr}
            contentFit="cover"
            source={require("../assets/Devices-Apple-iPhone-11-Pro.png")}
          />
        </LinearGradient>
        <MainContent />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  onboardingScreenScrollViewContent: {
    flexDirection: "column",
    paddingTop: 59,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 812,
    flex: 1,
  },
  scrollviewLayout: {
    maxWidth: "100%",
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
  },
  contentSpaceBlock: {
    paddingBottom: Padding.padding_0,
    overflow: "hidden",
  },
  headerFlexBox: {
    flexDirection: "row",
    height: 28,
  },
  onboardingScreen: {
    backgroundColor: "transparent",
  },
  scrollview: {
    backgroundColor: "transparent",
  },
  content: {
    width: Width.width_375,
    height: 422,
    paddingHorizontal: 38,
    paddingTop: 17,
    gap: 32,
    backgroundColor: "transparent",
  },
  header: {
    zIndex: 1,
    width: 235,
    paddingLeft: 65,
  },
  defaultMonochrome2: {
    width: 170,
    paddingTop: 0,
    gap: 6,
    zIndex: 1,
    paddingBottom: Padding.padding_0,
    overflow: "hidden",
  },
  a86295F41b41e39a667ec7cd8cIcon: {
    width: 28,
    height: 28,
  },
  f83ba6f8060e4b84A2272d32d6Wrapper: {
    zIndex: null,
    height: 23,
    paddingTop: 4,
    width: 136,
  },
  f83ba6f8060e4b84A2272d32d6Icon: {
    height: 19,
    width: 136,
  },
  devicesAppleIphone11Pr: {
    width: 300,
    height: 603,
  },
});

export default OnboardingScreen;
