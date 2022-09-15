export default function roundMinutes(timeString) {
  let t = timeString.split(":");
  let hour = 0;
  let min = 0;
  let sec = 0;
  if (t.length === 3 && parseInt(t[0]) !== 0) {
    hour = parseInt(t[0]);
    min = parseInt(t[1]);
    sec = parseInt(t[2]);
    if (sec >= 30) min++;
  } else if (t.length === 2) {
    min = parseInt(t[0]);
    sec = parseInt(t[1]);
    if (sec >= 30) min++;
  }
  let rounded = "";
  if (hour) {
    rounded += hour;
    rounded += "hr ";
  }
  rounded += min;
  rounded += "min";
  return rounded;
}
