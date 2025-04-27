import { configureStore } from "@reduxjs/toolkit";
import { validationSlice } from "./validation/validationSlice";

export const store = configureStore({
  reducer: { validation: validationSlice.reducer },
});
