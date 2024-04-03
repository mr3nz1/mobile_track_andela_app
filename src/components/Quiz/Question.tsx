import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

interface QuestionType {}

export const Question: React.FC<QuestionType> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.questionsInfo}>
          <Text>
            Ikibazo cya <Text style={{ fontWeight: "bold" }}>1</Text> muri
            <Text style={{ fontWeight: "bold" }}> 20</Text>
          </Text>

          <View>
            <Text style={styles.countDownText}>48</Text>
          </View>
        </View>

        <View style={styles.answersContainer}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Inzira nyabagendwa yagutse ariko itanyurwamo n'ibiziga bibiri.
            </Text>
          </View>

          <View style={styles.answers}>
            <View style={styles.answer}>
              <Text>Igisubizo cya mbere</Text>
            </View>
            <View style={styles.answer}>
              <Text>Igisubizo cya kabiri</Text>
            </View>
            <View style={styles.answer}>
              <Text>Igisubizo cya gatatu</Text>
            </View>
            <View style={styles.answer}>
              <Text>Igisubizo cya kane</Text>
            </View>
          </View>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Komeza</Text>
        </Pressable>
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
    gap: 15,
    flex: 1,
    flexDirection: "column",
    // alignSelf: "stretch",
    flexGrow: 1,
  },
  questionsInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  //   countDown: {},
  countDownText: {
    backgroundColor: "#1E293B",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 150,
    color: "white",
    fontSize: 12,
    fontWeight: "bold"
  },
  answersContainer: {
    // flexGrow: 1,
    flexDirection: "column",
    gap: 40,
    justifyContent: "flex-start",
    position: "relative",
  },
  answers: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 15,
    alignSelf: "stretch",
  },
  answer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 15,
  },
  buttonText: {
    backgroundColor: "#1E293B",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  button: {
    marginTop: "auto",
    // position: "absolute",
    // bottom: 0,
  },
});
