import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { tv, VariantProps } from "tailwind-variants";

const ButtonStyle = tv({
  variants: {
    variant: {
      circle: "w-16 h-16 rounded-full justify-center items-center",
      default: "w-full h-12 justify-center items-center rounded-full",
    },
    color: {
      primary: "bg-violet-800",
    },
    disabled: {
      true: "bg-gray-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type ButtonType = TouchableOpacityProps & VariantProps<typeof ButtonStyle>;

const Button = ({
  children,
  variant,
  color,
  disabled,
  className,
  ...rest
}: ButtonType) => {
  return (
    <TouchableOpacity
      className={ButtonStyle({ variant, color, className, disabled })}
      {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
