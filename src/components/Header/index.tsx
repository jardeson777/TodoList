import { Image, Text, View } from "react-native";

const Header = () => {
  return (
    <View className="flex-row justify-between items-center">
      <View>
        <Text className="text-base font-semibold text-zinc-800">
          Tarefas para hoje
        </Text>
      </View>

      <View className="bg-indigo-500 w-12 h-12 rounded-full">
        <Image
          source={{ uri: "https://github.com/jardeson777.png" }}
          width={48}
          height={48}
        />
      </View>
    </View>
  );
};

export default Header;
