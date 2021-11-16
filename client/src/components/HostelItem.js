import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function HostelItem(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.data.hostelName}
        </Typography>
        <Typography variant="h5" component="div">
          {props.data.hostelName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.data.hostelCity}
        </Typography>
        <Typography variant="body2">{props.data.hostelAddress}</Typography>
        <Typography variant="body2">
          No. of Rooms : {props.data.hostelNoOfRooms}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
      </CardActions>
    </Card>
  );
}
