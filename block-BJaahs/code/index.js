// If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

// ### For single question we need the following data and methods:

// <!-- Yet to do -->

// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)
function createQuiz(title, option, correctAnswerIndex) {
  let finalObj = {};
  finalObj.title = title;
  finalObj.option = option.map((item) => {
    return item;
  });
  finalObj.correctAnswerIndex = correctAnswerIndex;
  finalObj.isAnswerCorrect = (index) => {
    if (index === correctAnswerIndex) {
      return true;
    }
  };
  finalObj.getCorrectAnswer = () => {
    return correctAnswerIndex;
  };
  return finalObj;
}
const testData = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,
};
createQuiz(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
