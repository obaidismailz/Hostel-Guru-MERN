import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function StudentAssignHostelCard({
  getAssignHostel,
  getAssignHostell,
}) {
  useEffect(() => {
    getAssignHostel();
    // eslint-disable-next-line
  }, []);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {getAssignHostell.hostelName}
        </Typography>
        <Typography variant="h5" component="div">
          {getAssignHostell.hostelName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {getAssignHostell.hostelAddress}
        </Typography>
        <Typography variant="body2">
          {getAssignHostell.hostelPhone}
          <br />
          {getAssignHostell.hostelCity}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
