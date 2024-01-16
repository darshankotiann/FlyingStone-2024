import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
	apiKey: "AIzaSyAXoOBGMJ9nVpeRyvvQTljd_Eciuz6U4SA",
	authDomain: "flyingstone-88485.firebaseapp.com",
	projectId: "flyingstone-88485",
	storageBucket: "flyingstone-88485.appspot.com",
	messagingSenderId: "1007571288698",
	appId: "1:1007571288698:web:03a3d59580a44ac3ec71c3",
	measurementId: "G-CE5B3LPC5T"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);