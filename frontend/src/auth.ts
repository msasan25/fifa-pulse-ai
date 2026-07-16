import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase";




const provider = new GoogleAuthProvider();

export async function login() {
    const result = await signInWithPopup(auth, provider);

    return result.user;
}

export const logout = () => signOut(auth);