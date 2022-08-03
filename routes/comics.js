
const express = require("express");
const router = express.Router();

router.get("/comics", async (req, res) => {
//test
  try {
  const response = await axios.get(
    "https://lereacteur-marvel-api.herokuapp.com/comics"
  );
console.log(response);

} catch (error) {
  res.status(400).json({ error: error.message });
  }
});