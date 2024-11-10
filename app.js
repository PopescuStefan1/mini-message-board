import express from "express";
import indexRouter from "./routes/indexRoute.js";
const app = express();

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
