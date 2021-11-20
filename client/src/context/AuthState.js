import AuthContext from "./AuthContext";

import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
const AuthState = (props) => {
  const host = "http://localhost:3001";
  const history = useHistory();

  const AuthInitialState = [];
  const [students, setStudents] = useState(AuthInitialState);
  const [hostelOwners, setHostelOwners] = useState(AuthInitialState);

  const [loggedinuser, setloggedinuser] = useState({});
  let user = {};

  const fetchStudents = async () => {
    const response = await fetch(`${host}/api/auth/fetchallstudents`, {
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
    // console.log("res");
    console.log(res.error);
    if (res.success) {
      localStorage.setItem("auth-token", res.authToken);
      localStorage.setItem("category", "Student");

      history.push("/studentDashboard");
    }
    if (res.error) {
      console.log("iscredentials correct");

      history.push("/login");
    }
  };
  const hostelOwnerLogin = async (email, password) => {
    const response = await fetch(`${host}/api/auth/hostelownerlogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const res = await response.json();
    console.log(res);

    if (res.success) {
      localStorage.setItem("auth-token", res.authToken);
      localStorage.setItem("category", "Hostel Owner");

      history.push("/HostelOwnerDashboard");
    }
  };

  const hostelownerlogindetails = async () => {
    const resp = await fetch(`${host}/api/auth/gethostelowner`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });

    const result = await resp.json();

    user = result;

    setloggedinuser(user);
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
        hostelOwnerLogin,
        hostelownerlogindetails,
        loggedinuser,

        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
