import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Heading } from "../UI/Heading";

import { CustomText } from "../UI/CustomText";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Heading>Uraho, Murenzi</Heading>
        <View>
          <Text style={{ fontSize: 15, color: "white" }}>
            Itoze, uzatsinde ikizamini
          </Text>
          <Text style={{ fontSize: 15, color: "white" }}>cya provisoire</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 8,
  },
});
