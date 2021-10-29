import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HostelItem from "./HostelItem";
import Container from "@mui/material/Container";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function GridItem({ classes }) {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={3}>
      <HostelItem className={classes.paper} />
    </Grid>
  );
}
export default function Hostels() {
  const classes = useStyles();
  return (
    <div>
      {/* <h3>Ex 4: Responsive Material UI Grid </h3> */}
      {/* // I am a container Grid with 1 (8px) spacing */}

      <h1 style={{ textAlign: "center" }}>Hostels</h1>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <GridItem classes={classes} />
          <GridItem classes={classes} />
          <GridItem classes={classes} />
          <GridItem classes={classes} />
        </Grid>
      </Container>
    </div>
  );
}
