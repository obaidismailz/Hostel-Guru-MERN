import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import AddHostelForm from "./AddHostelForm";
import { useState } from "react";

export default function AddHostelIcon() {
  const [toggle, settoggle] = useState(false);

  return (
    <>
      <AddHostelForm toggle={toggle} settoggle={settoggle} />
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "fixed", bottom: "-2rem", right: "-3rem" }}
          icon={<SpeedDialIcon />}
          onClick={() => settoggle(!toggle)}
        ></SpeedDial>
      </Box>
    </>
  );
}
