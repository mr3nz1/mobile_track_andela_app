import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

interface HeaderType {}

export const Header: React.FC<HeaderType> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../../assets/logo-no-background 1.png")}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    // paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {},
});
