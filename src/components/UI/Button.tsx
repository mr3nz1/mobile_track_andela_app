import React from "react";
import {
  StyleProp,
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonType {
  title: string;
  style?: StyleProp<TextStyle>;
}

export const Button: React.FC<ButtonType> = ({ title, style }) => {
  return (
    <>
      <Pressable style={styles.button}>
        <Text style={[styles.buttonText, style]}>{title}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    backgroundColor: "#1E293B",
    color: "white",
    // paddingTop: 20,
    // paddingBottom: 20,
    // paddingLeft: 15,
    // paddingRight: 15,
    borderRadius: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    marginTop: "auto",
    // position: "absolute",
    // bottom: 0,
  },
});
