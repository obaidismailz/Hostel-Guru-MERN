import HostelContext from "./HostelContext";

import React from "react";

import { useState } from "react";
const HostelState = (props) => {
  const host = "http://localhost:3001";

  const hostelInitialState = [];
  const [hostels, sethostels] = useState(hostelInitialState);
  const [singleHostelOwnerhostels, setsingleHostelOwnerhostels] = useState([]);
  const [getAssignHostell, setgetAssignHostell] = useState({});
  const [hostelIsAlreadyAssigned, sethostelIsAlreadyAssigned] = useState(false);
  const addHostel = async (
    hostelName,
    hostelAddress,
    hostelCity,
    hostelPhone,
    hostelNoOfRooms
  ) => {
    const obj = {
      hostelName,
      hostelAddress,
      hostelCity,
      hostelPhone,
      hostelNoOfRooms,
    };

    const response = await fetch(`${host}/api/hostel/addHostel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify(obj),
    });
    const resp = await response.json(); // parses JSON response into native JavaScript objects

    console.log(resp);
  };

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

  const assignhostel = async (hostelId) => {
    const response = await fetch(
      `${host}/api/hostel/assignhostel/${hostelId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
    console.log(json.success, "hostel state");

    if (!json.success) {
      sethostelIsAlreadyAssigned(true);
    }
  };

  const getAssignHostel = async () => {
    const response = await fetch(`${host}/api/hostel/getassignhostel`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects

    setgetAssignHostell(json);
    console.log(json);
  };

  return (
    <HostelContext.Provider
      value={{
        hostels,
        getHostels,
        getHostelsForSingleHostelOwner,
        singleHostelOwnerhostels,
        hostelIsAlreadyAssigned,
        addHostel,
        assignhostel,
        getAssignHostel,
        getAssignHostell, // get the return data(assign hostel store the data)
      }}
    >
      {props.children}
    </HostelContext.Provider>
  );
};

export default HostelState;
