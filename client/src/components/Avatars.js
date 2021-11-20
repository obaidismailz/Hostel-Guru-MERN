import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

export default function Avatars() {
  return (
    <Avatar
      src="/broken-image.jpg"
      sx={{ margin: "auto", height: "8rem", width: "8rem" }}
    />
  );
}
