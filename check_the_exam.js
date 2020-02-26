/*
The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

If the score < 0, return 0.

For example:

*/

function checkExam(array1, array2) {
  let score = 0;

  for (var i = 0; i < array1.length; i++) {
    array1[i] === array2[i] && array1[i] != ""
      ? (score += 4)
      : array1[i] !== array2[i] && array2[i] !== ""
      ? score--
      : (score += 0);
  }
  return score < 0 ? 0 : score;
}
console.log(checkExam([1, 2, 4, 4], [1, 3, 4, 7]));
