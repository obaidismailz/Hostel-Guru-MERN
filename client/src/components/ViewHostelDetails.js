import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import HostelImagesSlider from "./HostelImagesSlider";
import HostelRating from "./HostelRating";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewHostelDetails({ toggle, settoggle, hostelData }) {
  const handleClose = () => {
    settoggle(!toggle);
  };

  const {
    hostelName,
    hostelAddress,
    hostelCity,
    hostelPhone,
    hostelNoOfRooms,
  } = hostelData;

  return (
    <div>
      <Dialog
        fullScreen
        open={toggle}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "fixed" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Hostel Details
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Reserve Your Seat
            </Button>
          </Toolbar>
        </AppBar>
        <Container sx={{ margin: "3rem" }}>
          <HostelImagesSlider />
          <h1 style={{ textAlign: "center" }}>Hostel Details</h1>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            <strong> Hostel Name :</strong>
            <br />
            {hostelName}
          </Typography>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            <strong>Hostel Address :</strong>
            <br />
            Random Hostel
          </Typography>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            <strong>Hostel City : </strong>
            <br />

            {hostelCity}
          </Typography>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            <strong> Hostel Phone :</strong>
            <br />
            {hostelPhone}
          </Typography>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            <strong> Hostel No. of Rooms :</strong>
            <br />
            {hostelNoOfRooms}
          </Typography>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {<HostelRating />}
          </Typography>
        </Container>
      </Dialog>
    </div>
  );
}
