import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../modules/Task";

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [{ id: "1", status: true, title: "Fazer App para praticar redux" }],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    changeStatusTask: (state, { payload: id }: PayloadAction<string>) => {
      state.tasks = state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            status: !task.status,
          };
        }
        return task;
      });
    },

    createTask: (state, { payload: task }: PayloadAction<Task>) => {
      state.tasks = [...state.tasks, task];
    },
  },
});

export const { changeStatusTask, createTask } = taskSlice.actions;

export default taskSlice.reducer;
