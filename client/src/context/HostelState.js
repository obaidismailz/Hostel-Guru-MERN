import HostelContext from "./HostelContext";

import React from "react";

import { useState } from "react";
const HostelState = (props) => {
  const host = "http://localhost:3001";

  const hostelInitialState = [];
  const [hostels, sethostels] = useState(hostelInitialState);

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

  return (
    <HostelContext.Provider value={{ hostels, getHostels }}>
      {props.children}
    </HostelContext.Provider>
  );
};

export default HostelState;
