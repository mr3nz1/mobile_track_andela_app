import { StyleSheet, View } from "react-native";
import { Home } from "./src/screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Quiz } from "./src/screens/Quiz";
import { Register } from "./src/screens/Register";
import { Login } from "./src/screens/Login";
import { Report } from "./src/screens/Report";

export default function App() {
  return (
    <>
      {/* <SafeAreaProvider> */}
      {/* <Home /> */}
      {/* <Quiz /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Report />
      {/* </SafeAreaProvider> */}
    </>
  );
}

const styles = StyleSheet.create({});
