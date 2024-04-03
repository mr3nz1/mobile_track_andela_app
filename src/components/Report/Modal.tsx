import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../UI/Button";

interface ModalType {}

export const Modal: React.FC<ModalType> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Amanota</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../../assets/trophy-winner-prize.png")}
          />
        </View>

        <View style={styles.marksContainer}>
          <Text style={styles.marks}>19/20</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Komeza"
            style={{ backgroundColor: "white", color: "#1E293B", padding: 15 }}
          />
          <Button
            title="Komeza"
            style={{ backgroundColor: "#334155", color: "white", padding: 15 }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E293B",
    borderRadius: 15,
    gap: 20
  },
  header: {},
  headerText: {
    textAlign: "center",
    padding: 20,
    backgroundColor: "white",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    fontWeight: "bold",
    color: "#1E293B",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    gap: 15,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {},
  marksContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  marks: {
    padding: 10,
    backgroundColor: "#334155",
    color: "white",
    borderRadius: 100,
    fontWeight: "bold",
  },
});
