import { ReactNode } from "react";
import { View } from "react-native";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <View className="h-14 bg-slate-100 items-center p-5 rounded-xl flex-row mb-2">
      {children}
    </View>
  );
};

export default Container;
