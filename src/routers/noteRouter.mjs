import Router from "express";
import {
  getAllNotes,
  addNote,
  editNote,
  deleteNote,
} from "../controllers/noteController.mjs";

const router = Router();

router.get("", getAllNotes);
router.post("", addNote);
router.put("/:id", editNote);
router.delete("/:id", deleteNote);

export default router;
