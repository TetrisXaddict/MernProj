import express from "express";
import {
  getProfiles,
  getProfile,
  createProfile,
} from "../controllers/profile.js";
import student from "../models/profile.js";

const router = express.Router();

router.get("/", getProfiles); //get all profiles
router.get("/", getProfile); // get singular profile
router.post("/", createProfile); //create a profile

export default router;
