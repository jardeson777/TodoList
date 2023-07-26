import { FlatList, Image, Text, View } from "react-native";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Task from "../../components/Task";
import { storeTaskAdapter } from "../../store/adapter/storeTaskAdapter";
import Button from "../../components/Button";
import Plus from "../../assets/icon/plus.png";

const HomePage = () => {
  const { tasks, changeStatus } = storeTaskAdapter();

  return (
    <View className="bg-white h-full p-5">
      <Header />

      <Menu />

      <FlatList
        data={tasks}
        renderItem={({ item }) => {
          return (
            <Task.container>
              <Task.flag
                checked={item.status}
                onPress={() => changeStatus(item.id)}
              />
              <Task.title>{item.title}</Task.title>
            </Task.container>
          );
        }}
      />

      <Button
        variant="circle"
        color="primary"
        className="absolute bottom-8 right-5">
        <Image source={Plus} />
      </Button>
    </View>
  );
};

export default HomePage;
