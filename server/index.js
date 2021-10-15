const express = require("express");

const PORT = 3001 || process.env.PORT;

const app = express();

app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
