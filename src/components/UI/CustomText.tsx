import React from "react";

import { Text, StyleSheet } from "react-native";

interface CustomTextType {
  children: string;
}

export const CustomText: React.FC<CustomTextType> = ({ children }) => {
  const styles = StyleSheet.create({});
  return (
    <>
      <Text style={{ color: "white" }}>{children}</Text>
    </>
  );
};
