const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


app.get("/comics", (req, res) => {
  console.log("route /comics");
  res.status(200).json({ message: "route /comics" });
});

app.get("/comics/:characterId", (req, res) => {
  console.log("route /comics/:characterId");
  res.status(200).json({ message: "route  /comics/:characterId" });
});

app.get("/characters", (req, res) => {
  console.log("route /characters");
  res.status(200).json({ message: "route /characters" });
});

app.get("/character/:characterId", (req, res) => {
  console.log("route /character/:characterId");
  res.status(200).json({ message: "route /character/:characterId" });
});



app.all("*", (req, res) => {
  console.log("route not found");
  res.status(404).json({ message: "route not found !" });
});

app.listen(4000, () => {
  console.log("server has started 🤓");
});
