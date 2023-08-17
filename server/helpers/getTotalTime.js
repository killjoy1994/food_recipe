const moment = require("moment");

const toSeconds = (time) => {
  let { count, measure } = time;
  let duration;
  let result;
  if (measure === "mins") {
    duration = moment.duration(count * 60, "seconds");
    result = duration.asMinutes();
  } else {
    duration = moment.duration(count * 3600, "seconds");
    result = duration.asMinutes();
  }
  return result;
};

const getTotalTime = (prepTime, cookTime) => {
  const totalMinutes = toSeconds(prepTime) + toSeconds(cookTime);
  const hours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  return {hours: Number(hours), minutes: Number(remainingMinutes)}
};

module.exports = { toSeconds, getTotalTime };
