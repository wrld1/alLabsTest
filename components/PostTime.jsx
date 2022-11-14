export const PostTime = ({ job }) => {
  const { createdAt, updatedAt } = job;
  const postDate = Date.parse(createdAt);
  const updateDate = Date.parse(updatedAt);
  const diffDate = updateDate - postDate;

  const padZeroTwo = (n) => ("" + n).padStart(2, "0");
  const msToDaysHoursMinutes = (ms) => {
    const days = Math.floor(ms / (24 * 60 * 60 * 1000));
    const daysMs = ms % (24 * 60 * 60 * 1000);
    const hours = Math.floor(daysMs / (60 * 60 * 1000));
    const hoursMs = ms % (60 * 60 * 1000);
    const minutes = Math.round(hoursMs / (60 * 1000)); // Rounds up to minutes

    let output = "";

    if (days > 0) {
      output += days;
    }

    // output += (days > 0 ? padZeroTwo(hours) : hours) + ":";
    // output += padZeroTwo(minutes);

    return output;
  };

  const resDate = msToDaysHoursMinutes(diffDate);
  return `Posted ${resDate} day ago`;
};
