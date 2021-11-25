import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteDialog from "./DeleteDialog";
import { useState } from "react";

export default function HostelOwnerHostelsCards({ item, deleteHostel }) {
  const [openDialog, setopenDialog] = useState(false);
  const [dialogRes, setdialogRes] = useState(false);

  const removeHostel = () => {
    setopenDialog(true);

    console.log(dialogRes);

    if (dialogRes) {
      deleteHostel(item._id);
    }
  };

  return (
    <>
      <DeleteDialog
        setdialogRes={setdialogRes}
        openDialog={openDialog}
        setopenDialog={setopenDialog}
        item={item}
        deleteHostel={deleteHostel}
      />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
          <Typography variant="h5" component="div">
            {item.hostelName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Hostel Address : {item.hostelAddress}
          </Typography>
          <Typography variant="body2">
            Hostel City : {item.hostelCity}
            <br />
            Hostel Phone : {item.hostelPhone}
            <br />
            Hostel No. of Rooms : {item.hostelNoOfRooms}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View Details</Button>
          <Button onClick={removeHostel} size="small" variant="outlined">
            Remove
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
