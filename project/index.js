const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const responses = require("./data/responses");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Endpoint to handle user queries
app.post("/api/query", (req, res) => {
  const { question } = req.body;

  // Basic keyword matching for static responses
  const lowerQuestion = question.toLowerCase();
  const matchedResponse = Object.keys(responses).find((key) =>
    lowerQuestion.includes(key)
  );

  if (matchedResponse) {
    res.json({ answer: responses[matchedResponse] });
  } else {
    res.json({ answer: "Sorry, I couldn’t understand your question. Please try rephrasing!" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
