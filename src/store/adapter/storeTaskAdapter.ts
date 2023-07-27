import { useDispatch, useSelector } from "react-redux";
import { Task } from "../../modules/Task";
import { RootState } from "../task.store";
import { changeStatusTask, createTask } from "../taskSlice";
import uuid from "react-native-uuid";

type StoreTaskAdapterType = {
  tasks: Task[];
  changeStatus: (id: string) => void;
  create: (task: Omit<Task, "id">) => void;
};

export const storeTaskAdapter = (): StoreTaskAdapterType => {
  const tasks = useSelector((state: RootState) => state.data.tasks);
  const dispatch = useDispatch();

  const changeStatus = (id: string) => {
    dispatch(changeStatusTask(id));
  };

  const create = (task: Omit<Task, "id">) => {
    const id = uuid.v4() as string;

    dispatch(createTask({ ...task, id }));
  };

  return { tasks, changeStatus, create };
};
