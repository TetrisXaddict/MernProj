import express from "express";
import {
  getAllProfiles,
  getProfile,
  createProfile,
  updateProfile,
} from "../controllers/profile.js";
import student from "../models/profile.js";

const router = express.Router();

router.get("/", getAllProfiles); //get all profiles
router.get("/", getProfile); // get singular profile
router.post("/", createProfile); //create a profile
router.put("/", updateProfile); //update existing profile

export default router;
