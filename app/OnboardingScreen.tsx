import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Color, Padding, Width } from '../GlobalStyles';
import MainContent from '../components/MainContent';

export default function OnboardingScreen() {
  return (
    <LinearGradient style={[styles.onboardingScreen, styles.scrollviewLayout]} locations={[0,1]} colors={[Color.colorDarkslateblue, '#114280']}>
      <ScrollView style={[styles.scrollview, styles.scrollviewLayout]} contentContainerStyle={styles.onboardingScreenScrollViewContent}>
        <View style={[styles.content, styles.contentSpaceBlock]} />
        <MainContent />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  onboardingScreenScrollViewContent: {
    flexDirection: 'column',
    paddingTop: 59,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 812,
    flex: 1,
  },
  scrollviewLayout: {
    maxWidth: '100%',
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  contentSpaceBlock: {
    paddingBottom: Padding.padding_0,
    overflow: 'hidden',
  },
  onboardingScreen: { backgroundColor: 'transparent' },
  scrollview: { backgroundColor: 'transparent' },
  content: { width: Width.width_375, height: 422, paddingHorizontal: 38, paddingTop: 17, backgroundColor: 'transparent' },
});
