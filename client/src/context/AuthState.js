import AuthContext from "./AuthContext";

import React from "react";

import { useState } from "react";
const AuthState = (props) => {
  const host = "http://localhost:3001";

  const AuthInitialState = [];
  const [students, setStudents] = useState(AuthInitialState);
  const [hostelOwners, setHostelOwners] = useState(AuthInitialState);

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

    const obj = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await fetch(`${host}/api/auth/createstudent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const json = await response.json(); // parses JSON response into native JavaScript objects

      console.log(json);
      setStudents(json);
    } catch (err) {
      console.log(err);
    }
  };

  const SendHostelOwnersToDb = async (name, email, password) => {
    console.log(name, email, password);

    const obj = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await fetch(`${host}/api/auth/createhostelowner`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const json = await response.json(); // parses JSON response into native JavaScript objects

      console.log(json);
      setHostelOwners(json);
    } catch (err) {
      console.log(err);
    }
  };

  const studentLogin = async (email, password) => {
    const response = await fetch(`${host}/api/auth/studentlogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const res = await response.json();
    console.log(res);
    localStorage.setItem("auth-token", res.authToken);
  };

  return (
    <AuthContext.Provider
      value={{
        students,
        fetchStudents,
        SendStudentsToDb,
        SendHostelOwnersToDb,
        studentLogin,
        hostelOwners,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
