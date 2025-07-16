import express from "express";
import {
  test,
  deleteUser,
  updateUser,
  getUserListings,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();
router.get("/test", test);
router.delete("/delete/:id", verifyToken, deleteUser);
router.post("/update/:id", verifyToken, updateUser);
router.get("/listings/:id", verifyToken, getUserListings);
router.get("/:id", verifyToken, getUser);

export default router;
