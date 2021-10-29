const express = require("express");
const cors = require("cors");
const PORT = 3001 || process.env.PORT;

const app = express();

require("./dbcon");
app.use(express.json());
app.use(cors());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/hostel", require("./routes/hostels"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
