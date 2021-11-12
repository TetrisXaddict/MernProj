import express from "express";
//import bodyParser from "body-parser"; //"Installed for tutorial purposes. Learned that it was depreciated"
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "20mb", extended: true }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());
