const express = require("express");

const app = express();

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n * 1000));

app.get("/message", async (req, res) => {
  const { m, s } = req.query;
  await sleep(s);
  if (m) {
    return res.send({ message: m });
  }
  res.send({ error: "endpoint: /message?m=[your_message]&s=[wait_time]" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
