import { ReactNode } from "react";
import { Text, View } from "react-native";

type TitleProps = {
  children: ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return (
    <View className="ml-3">
      <Text>{children}</Text>
    </View>
  );
};

export default Title;
