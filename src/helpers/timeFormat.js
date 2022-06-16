function getDigitalTime(date) {
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hour = padZeroes(hour);
  min = padZeroes(min);
  sec = padZeroes(sec);

  return hour + " : " + min + " : " + sec;
}

function padZeroes(i) {
  return i < 10 ? "0" + i : i;
}

export default getDigitalTime;
