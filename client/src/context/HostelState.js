import HostelContext from "./HostelContext";

import React from "react";

import { useState } from "react";
const HostelState = (props) => {
  const host = "http://localhost:3001";

  const hostelInitialState = [];
  const [hostels, sethostels] = useState(hostelInitialState);
  const [singleHostelOwnerhostels, setsingleHostelOwnerhostels] = useState([]);
  const getHostels = async () => {
    const response = await fetch(`${host}/api/hostel/fetchhostels`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects

    sethostels(json);
  };
  const getHostelsForSingleHostelOwner = async () => {
    const response = await fetch(`${host}/api/hostel/fetchhostel`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects

    setsingleHostelOwnerhostels(json);
  };

  return (
    <HostelContext.Provider
      value={{
        hostels,
        getHostels,
        getHostelsForSingleHostelOwner,
        singleHostelOwnerhostels,
      }}
    >
      {props.children}
    </HostelContext.Provider>
  );
};

export default HostelState;
