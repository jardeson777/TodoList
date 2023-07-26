import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import HomePage from "./src/screens/home";

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <HomePage />
    </SafeAreaView>
  );
}

export default App;
