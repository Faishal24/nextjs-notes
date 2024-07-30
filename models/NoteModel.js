import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  archive: {
    type: Boolean,
    default: false,
  },
});

const NoteModel = mongoose.models.Note || mongoose.model("Note", NoteSchema);

export default NoteModel;
