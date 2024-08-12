import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const firestoreConfig = {
  apiKey: "AIzaSyBpavxqb9BhQErBKSBkY1mLPEVef1zPW-E",
  authDomain: "mi-ganado-online-database.firebaseapp.com",
  projectId: "mi-ganado-online-database",
  storageBucket: "mi-ganado-online-database.appspot.com",
  messagingSenderId: "282006720218",
  appId: "1:282006720218:web:7872bb5ac0e21363c01fe3",
};

const app = initializeApp(firestoreConfig);
export const db = getFirestore(app);
const storage = getStorage(app);

/**
 * Upload a file to firebase storage
 * @param {file} file the file to upload / funcion para subir archivo 
 * @returns {Promise<string>}url of the uploated file / url del archivo subido
 */
export async function uploadFile(file) {
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
    
}

// Función para guardar los datos del animal en Firestore
export const saveAnimalData = async (animalData) => {
  try {
    const animalsCollection = collection(db, "animals");
    await addDoc(animalsCollection, animalData);
  } catch (error) {
    console.error("Error adding document: ", error);
    throw new Error("Failed to save animal data");
  }
};

