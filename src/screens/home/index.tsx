import { Text, View } from "react-native";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

const HomePage = () => {
  const tasks = [
    { status: true, id: 1, title: "Testando 123" },
    { status: true, id: 2, title: "Testando 321" },
  ];

  return (
    <View className="bg-white h-full p-5">
      <Header />

      <Menu />

      <View className="h-14 bg-slate-100 items-center p-5 rounded-xl flex-row mb-2">
        <View className="h-7 w-8 justify-center flex-row-reverse items-center">
          <View
            className="h-5 bg-red-400 ml-3 rounded-full"
            style={{ width: 2 }}
          />
          <View className="h-3 w-3 border-2 border-red-400 rounded-sm"></View>
        </View>

        <View className="ml-3">
          <Text>Titi</Text>
        </View>
      </View>

      <View className="bg-slate-100 items-center p-5 rounded-xl flex-row mb-2">
        <View className="h-7 w-8 justify-center flex-row-reverse items-center">
          <View
            className="h-5 bg-lime-400 ml-3 rounded-full"
            style={{ width: 2 }}
          />
          <View className="h-3 w-3 border-2 border-lime-400 rounded-sm justify-center items-center">
            <View className="h-3 w-3 bg-lime-400" />
          </View>
        </View>

        <View className="ml-3">
          <Text className="text-sm mb-1">Titi</Text>
          <Text className="text-xs">Alta</Text>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
