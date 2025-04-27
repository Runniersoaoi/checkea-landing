import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDni, setEmail } from "../store/validation/validationSlice";

const formData = {
  email: "",
  dni: "",
};

const formValidations = {
  email: [
    (value) => {
      return value.includes("@");
    },
    "El correo debe tener una @",
  ],
  dni: [
    (value) => {
      return /^\d{8}$/.test(value);
    },
    "El dni tiene que ser un número de 8 digitos",
  ],
};

export const ValidationPage = () => {
  const dispatch = useDispatch();
  const { email, dni, onInputChange, dniValid, emailValid } = useForm(
    formData,
    formValidations
  );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    dispatch(setDni(dni));
    dispatch(setEmail(email));
    navigate("/validation-front-dni");
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-white w-full p-20 md:p-0 font-montserrat">
      <div>
        <div className="flex items-center justify-center py-4">
          <img src="../logo-checkea.png" alt="" className="h-14" />
        </div>
        <h4 className="text-center font-semibold text-3xl pb-1">
          Bienvenido a checkea
        </h4>
        <p className="text-center text-sm pt-2 pb-6">
          Vamos a iniciar con tu proceso de validación, para empezar completa el
          siguiente formulario
        </p>
        <form onSubmit={onSubmit} className="flex flex-col gap-3 pb-6">
          <label htmlFor="dni" className="text-sm text-gray-700">
            Ingrese su número de dni:
          </label>
          <input
            id="dni"
            value={dni}
            onChange={onInputChange}
            name="dni"
            type="text"
            placeholder="88888888"
            className="bg-gray-100  w-full rounded-md p-2 placeholder:text-sm"
            required
          />
          {!!dniValid && formSubmitted && (
            <p className="text-sm text-red-500 mt-1">{dniValid}</p>
          )}
          <label htmlFor="email" className="text-sm text-gray-700">
            Ingrese su correo electrónico:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={onInputChange}
            name="email"
            required
            placeholder="checkea@gmail.com"
            className="bg-gray-100  w-full rounded-md p-2 placeholder:text-sm"
          />
          {!!emailValid && formSubmitted && (
            <p className="text-sm text-red-500 mt-1">{emailValid}</p>
          )}
          <div className="flex justify-between p-2">
            <label htmlFor="terms" className="text-sm text-gray-700">
              Acepte nuestros términos y condiciones
            </label>
            <input
              type="checkbox"
              id="terms"
              required
              className="bg-gray-100 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-[#004851] hover:cursor-pointer text-white font-bold py-1 px-3 rounded-full mt-2"
          >
            Siguiente
          </button>
        </form>
      </div>
    </div>
  );
};
