const express = require("express");

const app = express();

const PORT = process.envPORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
