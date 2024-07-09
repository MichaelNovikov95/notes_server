import express from "express";
import cors from "cors";

import connect from "./src/config/db.mjs";
import noteRouter from "./src/routers/noteRouter.mjs";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(express.static(`${process.env.CLIENT_URL}`));

app.use("/api/notes", noteRouter);

const main = async () => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`${PORT}`);
    });
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};
main();
