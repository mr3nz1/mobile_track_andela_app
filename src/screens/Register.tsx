import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Header } from "../components/Register/Header";
import { Form } from "../components/Register/Form";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = (props) => {
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
