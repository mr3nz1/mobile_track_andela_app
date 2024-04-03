import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";

import { Header } from "../components/Home/Header";
import { StatusBar } from "expo-status-bar";
import { Menu } from "../components/Home/Menu";

interface HomeProps {}

export const Home: React.FC<HomeProps> = (props) => {
  return (
    <>
      <StatusBar style="auto" hidden={true} />
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      <View style={styles.container}>
        <Header />
        <Menu />
        {/* <Image
          style={styles.blob}
          source={require("../../assets/blob.png")}
        /> */}
      </View>
      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#1E293B" },
  // blob: {
  //   position: "absolute",
  //   bottom: 0
  // },
});
