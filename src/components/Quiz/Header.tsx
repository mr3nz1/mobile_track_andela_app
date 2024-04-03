import React from "react";
import { View, StyleSheet } from "react-native";
import { Heading } from "../UI/Heading";

interface HeaaderType {}

export const Header: React.FC<HeaaderType> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerCard}>
          <Heading>Ikizamini cya tariki 19/03/2024</Heading>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    // paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerCard: {
    backgroundColor: "#1E293B",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
  },
});
