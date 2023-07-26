import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { tv, VariantProps } from "tailwind-variants";

const ButtonStyle = tv({
  variants: {
    variant: {
      circle:
        "bg-violet-800 w-16 h-16 rounded-full justify-center items-center",
    },
    color: {
      primary: "",
    },
  },
});

type ButtonType = TouchableOpacityProps & VariantProps<typeof ButtonStyle>;

const Button = ({
  children,
  variant,
  color,
  className,
  ...rest
}: ButtonType) => {
  return (
    <TouchableOpacity
      className={ButtonStyle({ variant, color, className })}
      {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
