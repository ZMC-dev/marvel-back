const express = require("express");
const cors = require("cors");

const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config();

//const home = require('../marvel-front/src/pages/Home');

//apikey = "0tIXVnEh3FhxCmBv"

/*app.get("/", (req, res) => {
  res.send(home)
  console.log("/ route found");
});*/

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



app.get("/comics/:characterId",  async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.API_KEY}`
    );
    console.log(" ====> route /comics/:characterId");
    console.log(response.data)
    console.log("characterID ==> "+req.params);
    res.status(200).json(response.data);
  
  } catch (error) {
    res.status(400).json({ error: error.message });
    }
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


app.get("/character/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.API_KEY}`
    );
    console.log(" ====> route /characters/:characterId");
    console.log(response.data)
    //console.log(req.params)
    
    res.status(200).json(response.data);
  
  } catch (error) {
    res.status(400).json({ error: error.message });
    }
});

app.all("*", (req, res) => {
  console.log("route not found");
  res.status(404).json({ message: "route not found !" });
});

app.listen(process.env.PORT, () => {
  console.log("server has started 🤓");
});
