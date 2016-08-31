// Clock question. Write a function that takes an input of Hour & Minute. Output the angle and degrees of the hands of the clock.
// I am assuming that the input will be HH:MM ie(4:30 or 12:22)
// I will also be assuming that the angle in question is from hour hand to the minute hand

function clockHandAngle(time) {
  // I wonder if I can do | let hour, minute = time.split(":") | like I can in ruby
  let [hour, minute] = time.split(":")

  // Need to find angle of each hand. So each hour is 360/12 and each minute is 360/60
  let hands = {
    "hour": (360/12 * parseInt(hour)) % 360,
    "minute": (360/60 * parseInt(minute)) % 360
  } 

  return (hands["minute"] - hands["hour"])
}

console.log(clockHandAngle("12:32"))
console.log(clockHandAngle("1:12"))
console.log(clockHandAngle("9:01"))
