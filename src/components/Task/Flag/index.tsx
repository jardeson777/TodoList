import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
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
  base: "h-5 w-5 border-2 rounded-sm justify-center items-center",

  variants: {
    checked: {
      true: "border-lime-400 bg-lime-400",
      false: "border-red-400",
    },
  },
});

type StyleProps = VariantProps<typeof FlagStyle> & TouchableOpacityProps;

const Flag = ({ checked = false, ...rest }: StyleProps) => {
  return (
    <TouchableOpacity
      className="h-7 w-8 justify-center flex-row-reverse items-center"
      {...rest}>
      <View className={FlagStyle({ checked })} style={{ width: 2 }} />
      <View className={BorderStyle({ checked })}>
        <Text style={{ transform: [{ translateY: -2.5 }] }}>v</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Flag;
