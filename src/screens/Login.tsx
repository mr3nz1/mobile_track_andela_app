import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Header } from "../components/Login/Header";
import { Form } from "../components/Login/Form";

interface LoginProps {}

export const Login: React.FC<LoginProps> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Form />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 30,
    backgroundColor: "#F1F5F9",
    height: "100%",
  },
});
