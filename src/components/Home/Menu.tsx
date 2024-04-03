import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Heading } from "../UI/Heading";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Heading isDark={true}>Hitamo</Heading>

        <View style={styles.menuContainer}>
          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={require("../../../assets/calendar.png")}
            />
            <Text>Ibizamini biheruka</Text>
          </View>

          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={require("../../../assets/random.png")}
            />
            <Text>Ibyo dutegura</Text>
          </View>

          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={require("../../../assets/signs.png")}
            />
            <Text>Ibyapa</Text>
          </View>

          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={require("../../../assets/vocabularies.png")}
            />
            <Text>Amagambo yingenzi</Text>
          </View>

          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={require("../../../assets/settings.png")}
            />
            <Text>Hindura</Text>
          </View>

          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={require("../../../assets/logout.png")}
            />
            <Text>Sohoka muri konti</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F5F9",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    height: "100%",
    position: "relative",
  },
  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 20,
  },
  cardContainer: {
    backgroundColor: "white",
    width: "48%",
    padding: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
    borderRadius: 25,
  },
  image: {
    width: 60,
    height: 60,
  },
  blob: {
    // position: "absolute",
    // bottom: 0,
  },
});
