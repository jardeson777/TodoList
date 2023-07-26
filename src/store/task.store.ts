import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

export const TaskStore = configureStore({
  reducer: {
    data: taskReducer,
  },
});

export type RootState = ReturnType<typeof TaskStore.getState>;
export type AppDispatch = typeof TaskStore.dispatch;
