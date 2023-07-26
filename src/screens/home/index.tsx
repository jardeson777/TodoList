import { Text, View } from "react-native";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Task from "../../components/Task";

const HomePage = () => {
  const tasks = [
    { status: true, id: 1, title: "Testando 123" },
    { status: true, id: 2, title: "Testando 321" },
  ];

  return (
    <View className="bg-white h-full p-5">
      <Header />

      <Menu />

      <Task.container>
        <Task.flag />
        <Task.title>Title</Task.title>
      </Task.container>

      <Task.container>
        <Task.flag checked />
        <Task.title>Title</Task.title>
      </Task.container>
    </View>
  );
};

export default HomePage;
