import { createSlice } from "@reduxjs/toolkit";

export const validationSlice = createSlice({
  name: "validation",
  initialState: {
    dni: "",
    email: "",
    dniFront: "",
    dniBack: "",
    facePhoto: "",
  },
  reducers: {
    setDni: (state, action) => {
      state.dni = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setDniFront: (state, action) => {
      state.dniFront = action.payload;
    },
    setDniBack: (state, action) => {
      state.dniBack = action.payload;
    },
    setFacePhoto: (state, action) => {
      state.facePhoto += action.payload;
    },
  },
});

export const { setDni, setEmail, setDniFront, setDniBack, setFacePhoto } =
  validationSlice.actions;
