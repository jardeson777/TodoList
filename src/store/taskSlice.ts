import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../modules/Task";

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    changeStatus: (state, { payload: id }: PayloadAction<number>) => {
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
  },
});

export const { changeStatus } = taskSlice.actions;

export default taskSlice.reducer;
