import express from "express";
//import bodyParser from "body-parser"; //"Installed for tutorial purposes. Learned that it was depreciated"
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "20mb", extended: true }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://User_1:<NPw8K9QM4kcNPYuL>@cluster0.oecrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log("Connection is established and running on port:" + { PORT })
    )
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
