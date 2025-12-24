import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import SwiftLogo from '../assets/swift-logo.svg';
import SwiftPayBank from '../assets/Swift-pay-bank.svg';
import { Color, Height, Width } from '../GlobalStyles';
import HomeIndicator from '../components/HomeIndicator';

export default function SplashScreen1() {
  return (
    <LinearGradient style={styles.container} locations={[0,1]} colors={[Color.colorDarkslateblue, '#114280']}>
      <View style={styles.content}>
        <View style={styles.logoRow}>
          <SwiftLogo width={38} height={38} />
          <View style={styles.brandWrapper}>
            <SwiftPayBank width={184} height={25} />
          </View>
        </View>
      </View>
      <View style={styles.homeIndicator}><HomeIndicator mode="Light" /></View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logoRow: { width: 303, paddingLeft: 72, flexDirection: 'row', height: 38 },
  brandWrapper: { height: 31, paddingTop: 5, width: 184 },
  homeIndicator: { width: Width.width_375, height: Height.height_34, flexDirection: 'row' },
});
