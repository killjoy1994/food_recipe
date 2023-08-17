export const getLevel = (totalTime) => {
  let result;
  if (totalTime.hours) {
    result = "Hard";
  } else if (totalTime.minutes > 20) {
    result = "Medium"
  } else {
    result = "Easy"
  }
  return result
};
