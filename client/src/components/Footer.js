import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";

export default function Footer() {
  return (
    <AppBar position="relative" color="primary">
      <Container
        style={{
          textAlign: "center",
        }}
      >
        <Toolbar>
          <Typography variant="body1" color="inherit">
            <h4>© 2021-22 | Hostel Guru | All Rights Reserved</h4>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
