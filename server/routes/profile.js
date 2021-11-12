import express from "express";
import { getProfiles } from "../controllers/profile.js";
import student from "../models/profile.js";

const router = express.Router();

router.get("/", getProfiles);

export default router;
