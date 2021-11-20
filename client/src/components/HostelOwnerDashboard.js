import React from "react";
import Container from "@mui/material/Container";
import { useContext, useState } from "react";
import { useEffect } from "react";
import DashboardNavIcons from "./DashboardNavIcons";
import Box from "@mui/material/Box";
import Profile from "./Profile";
import AuthContext from "../context/AuthContext";
import AddHostelIcon from "./AddHostelIcon";
const HostelOwnerDashboard = () => {
  const context = useContext(AuthContext);

  const { loggedinuser, hostelownerlogindetails } = context;

  const [navChangerNum, setnavChangerNum] = useState(0);
  const { name, email } = loggedinuser;
  useEffect(() => {
    hostelownerlogindetails();
    // eslint-disable-next-line
  }, []);

  const stateChange = (val) => {
    setnavChangerNum(val);
  };

  return (
    <div>
      <Box
        sx={{
          width: 700,
          margin: "auto",
          maxWidth: "100%",
          marginTop: "-3rem",
          marginRight: "8rem",
        }}
      >
        <DashboardNavIcons stateChange={stateChange} />
      </Box>
      <Container style={{ height: "80vh" }}>
        <h1>{name}'s Dashboard</h1>

        {navChangerNum === 1 ? (
          <Profile name={name} email={email} />
        ) : (
          <AddHostelIcon />
        )}
      </Container>
    </div>
  );
};

export default HostelOwnerDashboard;
