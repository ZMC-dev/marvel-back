const express = require("express");
const cors = require("cors");

const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config();

//apikey = "0tIXVnEh3FhxCmBv"


//route comics
app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`
    );
    console.log("route /comics");
    res.status(200).json(response.data);
  
  } catch (error) {
    res.status(400).json({ error: error.message });
    }
  });


app.get("/comics/:characterId", (req, res) => {
  console.log("route /comics/:characterId");
  res.status(200).json({ message: "la route  /comics/:characterId marche ;)" });
});

//route personnages
app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
    );
    console.log("route /characters");
    res.status(200).json(response.data);
  
  } catch (error) {
    res.status(400).json({ error: error.message });
    }
  });


app.get("/character/:characterId", (req, res) => {
  console.log("route /character/:characterId");
  res.status(200).json({ message: "la route /character/:characterId marche ;)" });
});

app.all("*", (req, res) => {
  console.log("route not found");
  res.status(404).json({ message: "route not found !" });
});

app.listen(4000, () => {
  console.log("server has started 🤓");
});
