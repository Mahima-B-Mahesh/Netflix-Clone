import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBqUWcB9MeU0n9st72i1XaQHpZHaF4aKcQ",
  authDomain: "netfilx-clone-bf9f3.firebaseapp.com",
  projectId: "netfilx-clone-bf9f3",
  storageBucket: "netfilx-clone-bf9f3.firebasestorage.app",
  messagingSenderId: "691538650669",
  appId: "1:691538650669:web:aea04430c1e977e7af7aa4",
  measurementId: "G-3DRC6CCCMW"
};

const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {

    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
    });

  } catch (error) {
    console.error("Error signing up:", error);
    toast.error("Error signing up: " + error.code.split("/")[1].split("-").join(" "));
}
};

const login = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error logging in:", error);
        toast.error("Error logging in: " + error.code.split("/")[1].split("-").join(" "));
    }
}

const logout = () => {
    signOut(auth);
    toast.success("Logged out successfully");
}

export { auth, db, signUp, login, logout };