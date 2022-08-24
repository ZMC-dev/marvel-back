const express = require("express");
const cors = require("cors");

const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config();


//route comics
app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?title=${req.query.title}&apiKey=${process.env.API_KEY}`
    );
    console.log("/comics" + req.query.title);
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
    console.log("characterID ==> "+ req.params);
    res.status(200).json(response.data);
  
  } catch (error) {
    res.status(400).json({ error: error.message });
    }
});

//route personnages
app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?name=${req.query.name}&skip=${req.query.skip}&limit=${req.query.limit}&apiKey=${process.env.API_KEY}`
    );
    console.log("/characters" + req.query.name);

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
