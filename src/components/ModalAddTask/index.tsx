import {
  Modal,
  ModalProps,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Button from "../Button";
import { Controller, useForm } from "react-hook-form";
import { storeTaskAdapter } from "../../store/adapter/storeTaskAdapter";
import Back from "../../assets/icon/arrow-left.png";

type ModalAddTaskProps = ModalProps & {
  closeModal: () => void;
};

type InputProps = {
  title: string;
};

export const ModalAddTask = ({ closeModal, ...rest }: ModalAddTaskProps) => {
  const { create } = storeTaskAdapter();

  const {
    handleSubmit,
    formState: { isValid },
    control,
    reset,
  } = useForm<InputProps>();

  const onSubmit = (data: InputProps) => {
    create({
      status: false,
      title: data.title,
    });
    reset();
    closeModal();
  };

  return (
    <Modal animationType="slide" {...rest}>
      <View className="bg-white flex-1 p-8">
        <TouchableOpacity className="mb-5" onPress={closeModal}>
          <Image source={Back} />
        </TouchableOpacity>
        <Text className="text-xl text-gray-950 font-semibold">
          Adicionar tarefa
        </Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border-2 rounded-md mt-2 py-2 px-3"
              placeholder="Título"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="title"
        />

        <Button
          color="primary"
          className="mt-auto"
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}>
          <Text className="text-white">Adicionar</Text>
        </Button>
      </View>
    </Modal>
  );
};
