import express from "express";
import { createConversation, getConversations } from "../controllers/chat.controller.js";
const router = express.Router();

router.post("/create-conversation", createConversation);
router.get("/get-conversations", getConversations);
router.post("/save-message", saveMessage);
router.get("/get-message", getMessage);
router.put("/update-conversation", updateConversation);