import React from "react";
import { Modal } from "../components/Report/Modal";
import { StyleSheet, View } from "react-native";

interface ReportType {}

export const Report: React.FC<ReportType> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Modal />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    gap: 8,
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#F1F5F9",
  },
});
