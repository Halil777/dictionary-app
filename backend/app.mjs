import express from "express";
import router from "./routes/router.mjs";

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const PORT = 7777;

app.listen(PORT, () => console.log("listening on port " + PORT));
