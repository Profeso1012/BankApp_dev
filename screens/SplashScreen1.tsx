import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import A86295f41b41e39a667ec7cd8c03c7 from "../assets/31a86295-f41b-41e3-9a66-7ec7cd8c03c7.svg";
import F83ba6f8060e4b84a2272d32d6af17ad from "../assets/f83ba6f8-060e-4b84-a227-2d32d6af17ad.svg";
import IPhoneXOrNewer from "../components/IPhoneXOrNewer";
import Notch from "../assets/Notch.svg";
import HomeIndicator from "../components/HomeIndicator";
import { Width, Height, Padding, Color } from "../GlobalStyles";

const SplashScreen1 = () => {
  return (
    <LinearGradient
      style={styles.scrollviewLayout}
      locations={[0, 1]}
      colors={[Color.colorDarkslateblue, "#114280"]}
    >
      <ScrollView
        style={styles.scrollviewLayout}
        contentContainerStyle={styles.splashScreen1Content}
      >
        <View style={styles.defaultMonochrome2Wrapper}>
          <View style={styles.defaultMonochrome2}>
            <A86295f41b41e39a667ec7cd8c03c7
              style={styles.a86295F41b41e39a667ec7cd8cIcon}
              width={38}
              height={38}
            />
            <View style={styles.f83ba6f8060e4b84A2272d32d6Wrapper}>
              <F83ba6f8060e4b84a2272d32d6af17ad
                style={styles.f83ba6f8060e4b84A2272d32d6Icon}
                width={184}
                height={25}
              />
            </View>
          </View>
        </View>
        <IPhoneXOrNewer
          notch={<Notch width={Width.width_219} height={Height.height_30} />}
        />
        <View style={styles.homeIndicator}>
          <HomeIndicator mode="Light" />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  splashScreen1Content: {
    flexDirection: "column",
    paddingTop: 387,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 353,
    height: 812,
    flex: 1,
  },
  scrollviewLayout: {
    backgroundColor: "transparent",
    maxWidth: "100%",
    flex: 1,
    width: "100%",
  },
  defaultMonochrome2Wrapper: {
    width: 303,
    paddingLeft: 72,
    flexDirection: "row",
    height: 38,
    zIndex: null,
  },
  defaultMonochrome2: {
    width: 230,
    overflow: "hidden",
    paddingTop: 0,
    paddingBottom: Padding.padding_0,
    gap: 8,
    flexDirection: "row",
    height: 38,
  },
  a86295F41b41e39a667ec7cd8cIcon: {
    width: 38,
    height: 38,
  },
  f83ba6f8060e4b84A2272d32d6Wrapper: {
    height: 31,
    paddingTop: 5,
    width: 184,
    zIndex: null,
  },
  f83ba6f8060e4b84A2272d32d6Icon: {
    height: 25,
    width: 184,
  },
  homeIndicator: {
    width: Width.width_375,
    height: Height.height_34,
    zIndex: 2,
    flexDirection: "row",
  },
});

export default SplashScreen1;
