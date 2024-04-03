import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Quiz/Header";
import { Question } from "../components/Quiz/Question";

interface QuizType {}
export const Quiz: React.FC<QuizType> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Question />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F5F9",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    gap: 8,
  },
});
