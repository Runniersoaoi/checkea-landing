import { doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadValidation = async (validation) => {
  if (!validation.dni) throw new Error("El dni es necesario");

  const docRef = doc(FirebaseDB, `validationRequests`, validation.dni);
  const currentDate = new Date();
  await setDoc(docRef, {
    ...validation,
    status: "pending",
    date: currentDate.toISOString(),
  });

  return { ok: true };
};
