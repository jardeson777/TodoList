import { View } from "react-native";
import { tv, VariantProps } from "tailwind-variants";

const FlagStyle = tv({
  base: "h-5 ml-3 rounded-full",

  variants: {
    checked: {
      true: "bg-lime-400",
      false: "bg-red-400",
    },
  },
});

const BorderStyle = tv({
  base: "h-3 w-3 border-2 rounded-sm",

  variants: {
    checked: {
      true: "border-lime-400",
      false: "border-red-400",
    },
  },
});

type StyleProps = VariantProps<typeof FlagStyle>;

const Flag = ({ checked = false }: StyleProps) => {
  return (
    <View className="h-7 w-8 justify-center flex-row-reverse items-center">
      <View className={FlagStyle({ checked })} style={{ width: 2 }} />
      <View className={BorderStyle({ checked })}></View>
    </View>
  );
};

export default Flag;
