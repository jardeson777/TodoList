import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import HomePage from "./src/screens/home";
import { Provider } from "react-redux";
import { TaskStore } from "./src/store/task.store";

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Provider store={TaskStore}>
        <HomePage />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
