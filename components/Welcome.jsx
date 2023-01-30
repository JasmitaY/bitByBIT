import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const Welcome = () => {
  const router = useRouter();
  const login = () => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      return signInWithPopup(auth, new GoogleAuthProvider())
        .then(() => {
          router.push("/dashboard");
        })
        .catch((error) => {
          router.push("/");
        });
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentState) => {
      if (currentState !== null) void router.push("/dashboard");
    });
  }, []);

  return (
    <div className="bg-black w-full">
      <div className="flex flex-col items-center pt-32">
        <div className="text-white text-5xl font-bold mb-5">Welcome!</div>
      </div>
      <div className="flex flex-col items-center pb-32">
        <button
          onClick={login}
          className="text-black text-2xl mb-4 rounded-full w-96 h-20 ring-4 ring-white font-bold bg-blue-300 "
        >
          Get Started
        </button>
        <button className="text-white text-2xl rounded-full w-96 h-20 ring-4 ring-white font-bold bg-black-500 ">
          I already have an account
        </button>
      </div>
    </div>
  );
};

export default Welcome;
