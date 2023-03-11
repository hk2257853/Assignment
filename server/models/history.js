import mongoose from "mongoose";

const historySchema = mongoose.Schema({
  title: String,
  videoLink: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var HistoryMessage = mongoose.model("History", historySchema);

export default HistoryMessage;
