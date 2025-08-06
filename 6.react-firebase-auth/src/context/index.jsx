import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  const navigate = useNavigate();

  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function registerWithFirebase() {
    setLoading(true);
    const { email, password } = registerFormData;
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function loginWithFireBase() {
    setLoading(true);
    const { email, password } = loginFormData;
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  function handleLogOut() {
    return signOut(auth);
  }

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        registerFormData,
        setRegisterFormData,
        registerWithFirebase,
        user,
        setUser,
        loading,
        setLoading,
        loginFormData,
        setLoginFormData,
        loginWithFireBase,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
