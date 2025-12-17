import * as React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Eye from "../assets/Eye.svg";
import { Width, Height, Color, Padding } from "../GlobalStyles";

export type PasswordType = {
  /** Variant props */
  state?: string;
};

const Password = ({ state = "Default" }: PasswordType) => {
  return (
    <View style={styles.password}>
      <TextInput
        style={styles.passwordChild}
        placeholder="Password"
        multiline={false}
        placeholderTextColor="#7d7c93"
      />
      <Eye
        style={styles.eyeIcon}
        width={Width.width_20}
        height={Height.height_20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  password: {
    width: Width.width_335,
    height: Height.height_48,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro100,
    borderBottomWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.padding_0,
    paddingVertical: Padding.padding_14,
    gap: 256,
  },
  passwordChild: {
    width: 59,
    height: 19,
    paddingTop: Padding.padding_1_5,
  },
  eyeIcon: {
    height: Height.height_20,
    width: Width.width_20,
  },
});

export default Password;
