import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const getAllValidations = async () => {
  const collectionRef = collection(FirebaseDB, "validationRequests");
  const querySnapshot = await getDocs(collectionRef);

  const validations = [];
  querySnapshot.forEach((doc) => {
    validations.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return validations;
};
