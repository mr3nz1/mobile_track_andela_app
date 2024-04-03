import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Heading } from "../UI/Heading";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";

interface FormType {}

export const Form: React.FC<FormType> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Heading isDark={true}>Fungura konti</Heading>
          <Text style={styles.text}>
            Nurangiza kwinjira uraba ushobora gutangira kwitegura
          </Text>
        </View>

        <View style={styles.form}>
          <Input title="Telephone" />
          <Input title="Ijambo banga" />
        </View>

        <View style={styles.buttonAndTextContainer}>
          <Button
            title="Komeza"
            style={{ backgroundColor: "#1E293B", color: "white", padding: 15 }}
          />
          <Text style={styles.forgotPassword}>
            <Text style={styles.underline}>Wibagiwe ijambo banga?</Text> cyangwa{" "}
            <Text style={styles.underline}>nta konti?</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 30,
    width: "100%",
  },
  text: {
    color: "#64748B",
    width: 300,
  },
  form: {
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 18,
  },
  buttonAndTextContainer: {
    gap: 20,
  },
  underline: {
    textDecorationLine: "underline",
  },
  forgotPassword: {
    textAlign: "center",
  },
});
