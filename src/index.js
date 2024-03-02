import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const express = require("express");
// const { Configuration, OpenAIApi } = require("openai");

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());

// app.post("/api/generate", async (req, res) => {
//   const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY, // Use environment variable for API key
//   });

//   const openai = new OpenAIApi(configuration);

//   try {
//     const response = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: req.body.messages, // Use the request body
//       max_tokens: 200,
//       n: 1,
//       stop: null,
//       temperature: 0,
//     });

//     res.status(200).json({ answer: response.data.choices[0].message.content });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
