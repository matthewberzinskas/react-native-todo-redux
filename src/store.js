import { configureStore } from "@reduxjs/toolkit";
//import todoSlice from "./features/todos/todosSlice";
import todoSlice from "./reducers/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});
