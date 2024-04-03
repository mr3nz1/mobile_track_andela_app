import React from "react";
import { Text, StyleSheet } from "react-native";

interface HeadingProps {
  children: string;
  isDark?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({ children, isDark }) => {
  const styles = StyleSheet.create({
    text: {
      color: isDark ? "#0f172a" : "white",
      fontSize: 30,
      fontWeight: "bold",
    },
  });

  return (
    <>
      <Text style={styles.text}>{children}</Text>
    </>
  );
};
