import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyDE0hj5Oq8rcy7sHPqvLsQZg8fq5XRl64M",
  authDomain: "mi-ganado-online-fotos.firebaseapp.com",
  projectId: "mi-ganado-online-fotos",
  storageBucket: "mi-ganado-online-fotos.appspot.com",
  messagingSenderId: "920229999296",
  appId: "1:920229999296:web:3b95e7cc8749f2cc83b325"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

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