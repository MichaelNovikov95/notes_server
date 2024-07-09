import { Schema, model } from "mongoose";

const noteModel = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Note = model("Note", noteModel);

export default Note;
