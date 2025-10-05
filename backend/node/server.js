const express = require("express");
const app = express();
app.get("/", (_, res) => res.send("KudiTrace Node.js API running"));
app.listen(3000, () => console.log("Server started on port 3000"));
// 2025-10-05 20:10:15 UTC — Logging enhancements
