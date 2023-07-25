import { Text, TouchableOpacity, View } from "react-native";

const Menu = () => {
  return (
    <View className="flex-row gap-5 my-0">
      <TouchableOpacity>
        <Text className="text-xs">Todos</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text className="text-xs">Concluídos</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text className="text-xs">Incompletos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
