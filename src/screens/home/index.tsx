import { Text, View } from "react-native";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Task from "../../components/Task";
import { RootState } from "../../store/task.store";
import { useSelector } from "react-redux";

const HomePage = () => {
  const tasks = useSelector((state: RootState) => state.data.tasks);
  console.log(tasks);

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
