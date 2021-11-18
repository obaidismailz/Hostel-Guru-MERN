import AuthContext from "./AuthContext";

import React from "react";

import { useState } from "react";
const AuthState = (props) => {
  const host = "http://localhost:3001";

  const AuthInitialState = [];
  const [students, setStudents] = useState(AuthInitialState);

  const fetchStudents = async () => {
    const response = await fetch(`${host}/api/auth/fetchhostels`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects

    setStudents(json);
  };

  const SendStudentsToDb = async (name, email, password) => {
    console.log(name, email, password);
    try {
      const response = await fetch(`${host}/api/auth/createstudent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          name: name,
          email: email,
          password: password,
        },
      });
      const json = await response.json(); // parses JSON response into native JavaScript objects

      console.log(json);
      setStudents(json);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ students, fetchStudents, SendStudentsToDb }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
