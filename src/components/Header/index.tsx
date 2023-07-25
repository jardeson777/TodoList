import { Text, View } from "react-native";

const Header = () => {
  return (
    <View className="flex-row justify-between">
      <View>
        <Text className="text-xs">25.07.2023</Text>
        <Text className="text-base font-semibold text-zinc-800">
          Tarefas para hoje
        </Text>
      </View>

      <View className="bg-purple-600 w-8 h-8 rounded-full"></View>
    </View>
  );
};

export default Header;
