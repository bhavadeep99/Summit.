import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    tagLine: String,
    courseImageURL: String,
    instructorImageURL: String,
    instructorName: String,
    numberOfLessons: String,
    videoURL: String,
    category: String,
    courseID: String
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Course", courseSchema);
