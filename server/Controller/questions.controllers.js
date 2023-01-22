const questionModel = require("../Database/questions");

const postQuestion = async (body) => {
  const foundQuestion = await questionModel.findOne({ name: body.name });
  if (foundQuestion) {
    throw new Error("Question already added");
  }
  const newQuestion = await questionModel.create(body);
  return newQuestion;
};

const getQuestions = async () => {
  const questions = await questionModel.find({});
  return questions;
};

const updateQuestion = async (id, body) => {
  const foundQuestion = await questionModel.findOne({ _id: id });
  if (!foundQuestion) {
    throw new Error("invalid id qouestion dose not exist");
  }
  const updatedQuestion = await questionModel.updateOne(
    { _id: id },
    { ...body }
  );
  return updatedQuestion;
};

const deleteQuestion = async (id) => {
  const foundQuestion = await questionModel.findOne({ _id: id });
  if (!foundQuestion) {
    throw new Error ("invalid id qouestion dose not exist") 
  }
  const deletedQuestion = await questionModel.deleteOne({"_id":id})
  return deletedQuestion
};

module.exports = { postQuestion, getQuestions, updateQuestion, deleteQuestion};
