import * as React from "react";
import { StyleSheet, View } from "react-native";
import Notch from "../assets/Notch.svg";
import StatusBarTime from "./StatusBarTime";
import MobileSignal from "../assets/Mobile-Signal.svg";
import Wifi from "../assets/Wifi.svg";
import Battery from "../assets/Battery.svg";
import { Width, Height, Padding, Gap, Color } from "../GlobalStyles";

const IPhoneXOrNewer = () => {
  return (
    <View style={styles.root}>
      <Notch
        style={styles.notchIcon}
        width={Width.width_219}
        height={Height.height_30}
      />
      <View style={styles.leftSide}>
        <StatusBarTime />
      </View>
      <View style={styles.rightSideWrapper}>
        <View style={styles.rightSide}>
          <MobileSignal
            style={styles.mobileSignalIcon}
            width={Width.width_17}
            height={Height.height_10_67}
          />
          <Wifi
            style={styles.wifiIcon}
            width={Width.width_15_27}
            height={Height.height_10_97}
          />
          <Battery
            style={styles.batteryIcon}
            width={Width.width_24_33}
            height={Height.height_11_33}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: Width.width_375,
    height: Height.height_44,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    overflow: "hidden",
    alignItems: "flex-end",
    paddingLeft: 21,
    paddingTop: Padding.padding_12,
    paddingRight: Padding.padding_14_6,
    paddingBottom: Padding.padding_11,
    gap: 218,
    zIndex: 1,
    flexDirection: "row",
  },
  notchIcon: {
    height: Height.height_30,
    width: Width.width_219,
    display: "none",
  },
  leftSide: {
    height: Height.height_21,
    width: Width.width_54,
    zIndex: 3,
    flexDirection: "row",
  },
  rightSideWrapper: {
    width: Width.width_66_7,
    height: Height.height_15_7,
    justifyContent: "flex-end",
    paddingBottom: Padding.padding_4_4,
    zIndex: 2,
  },
  rightSide: {
    width: Width.width_66_66,
    height: Height.height_11_34,
    gap: Gap.gap_5,
    flexDirection: "row",
  },
  mobileSignalIcon: {
    height: Height.height_10_67,
    width: Width.width_17,
    color: Color.labelColorDarkPrimary,
    zIndex: 3,
  },
  wifiIcon: {
    height: Height.height_10_97,
    width: Width.width_15_27,
    color: Color.labelColorDarkPrimary,
  },
  batteryIcon: {
    height: Height.height_11_33,
    width: Width.width_24_33,
    zIndex: 1,
  },
});

export default IPhoneXOrNewer;
