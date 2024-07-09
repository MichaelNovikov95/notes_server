import Note from "@/schema/Note.mjs";

export const getAllNotes = async (req, res) => {
  const notes = await Note.find({});
  return res.json(notes);
};

export const addNote = async (req, res) => {
  const { title, content } = req.body;
  const parsedTitle = title.trim();
  const parsedContent = content.trim();

  if (!parsedTitle || !parsedContent)
    return res.status(400).send("title and content fileds required");

  try {
    const existedNote = await Note.findOne({ title });
    if (existedNote) {
      return res
        .status(400)
        .send(`You already have a note with title ${title}`);
    }
    const note = new Note({
      title,
      content,
    });
    await note.save();
    return res.status(201).send(note);
  } catch (error) {
    return res.status(500).send("Something went wrong. Try again later");
  }
};

export const editNote = async (req, res) => {
  const { title, content } = req.body;
  const parsedTitle = title.trim();
  const parsedContent = content.trim();
  const id = req.params.id;

  if (!parsedTitle || !parsedContent)
    return res.status(400).send("title and content fileds required");

  if (!id) return res.status(400).send("Id must be valid");

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      { _id: id },
      {
        title: parsedTitle,
        content: parsedContent,
      },
      { new: true }
    );
    await updatedNote.save();
    return res.status(201).json({ updatedNote });
  } catch (error) {
    return res.status(500).send("Something went wrong. Try again later");
  }
};

export const deleteNote = async (req, res) => {
  const id = req.params.id;

  if (!id) return res.status(400).send("Id must be a valid number");

  try {
    await Note.deleteOne({ _id: id });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).send("Something went wrong. Try again later");
  }
};
