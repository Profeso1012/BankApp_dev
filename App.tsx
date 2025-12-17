const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ForgotPassword21 from "./screens/ForgotPassword21";
import SplashScreen1 from "./screens/SplashScreen1";
import GetStarted11 from "./screens/GetStarted11";
import OnboardingScreen from "./screens/OnboardingScreen";
import GetStarted21 from "./screens/GetStarted21";
import GetStarted31 from "./screens/GetStarted31";
import GetStarted41 from "./screens/GetStarted41";
import GetStarted51 from "./screens/GetStarted51";
import LoginToYourAccount11 from "./screens/LoginToYourAccount11";
import LoginToYourAccount21 from "./screens/LoginToYourAccount21";
import LoginToYourAccount31 from "./screens/LoginToYourAccount31";
import ForgotPassword11 from "./screens/ForgotPassword11";
import ForgotPassword31 from "./screens/ForgotPassword31";
import MainContent from "./components/MainContent";
import FrameComponent9 from "./components/FrameComponent9";
import InputArea from "./components/InputArea";
import PhoneNumber from "./components/PhoneNumber";
import FrameComponent4 from "./components/FrameComponent4";
import PhoneNumber1 from "./components/PhoneNumber1";
import InputField from "./components/InputField";
import FrameComponent11 from "./components/FrameComponent11";
import FrameComponent12 from "./components/FrameComponent12";
import SpinnerRound1 from "./components/SpinnerRound1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "": require("./assets/fonts/.otf"),
    "PlusJakartaSans-SemiBold": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "DarkerGrotesque-Regular": require("./assets/fonts/DarkerGrotesque-Regular.ttf"),
    "DarkerGrotesque-Medium": require("./assets/fonts/DarkerGrotesque-Medium.ttf"),
    "DarkerGrotesque-SemiBold": require("./assets/fonts/DarkerGrotesque-SemiBold.ttf"),
    "DarkerGrotesque-Bold": require("./assets/fonts/DarkerGrotesque-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="HomeIndicator"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="ForgotPassword21"
              component={ForgotPassword21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeIndicator"
              component={SplashScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent6"
              component={GetStarted11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainContent"
              component={OnboardingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent9"
              component={GetStarted21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted31"
              component={GetStarted31}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent4"
              component={GetStarted41}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted51"
              component={GetStarted51}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InputField"
              component={LoginToYourAccount11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent11"
              component={LoginToYourAccount21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginToYourAccount31"
              component={LoginToYourAccount31}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword11"
              component={ForgotPassword11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword31"
              component={ForgotPassword31}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainContent"
              component={MainContent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent9"
              component={FrameComponent9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted31"
              component={InputArea}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted31"
              component={PhoneNumber}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent4"
              component={FrameComponent4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent4"
              component={PhoneNumber1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InputField"
              component={InputField}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent11"
              component={FrameComponent11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword31"
              component={FrameComponent12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword31"
              component={SpinnerRound1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
