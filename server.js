const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/check-code", async (req, res) => {
  const { code } = req.body;

  try {
    // Replace with actual AI model API call
    const aiResponse = await axios.post(
      "https://api.example.com/code-suggestions",
      { code }
    );

    res.json({
      suggestions: aiResponse.data.suggestions,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to get suggestions" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
