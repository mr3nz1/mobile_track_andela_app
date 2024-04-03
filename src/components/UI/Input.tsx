import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputType {
  title: string;
}

export const Input: React.FC<InputType> = ({ title }) => {
  return (
    <>
      <View style={styles.container}>
        <TextInput style={styles.input} cursorColor="#94A3B8" />
        <Text style={styles.text}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    borderStyle: "solid",
    borderColor: "#64748b",
    borderWidth: 0.6,
    borderRadius: 15,
  },
  input: {
    width: "100%",
    padding: 15,
  },
  text: {
    color: "#1E293B",
    position: "absolute",
    top: -12,
    left: 20,
    backgroundColor: "#F1F5F9",
  },
});
