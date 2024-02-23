alert("Welcome to the Mobile Phone Recommendar!");
alert(
  "please answer the following questions help us suggest the perfect mobile  for"
);

var budget = prompt("choose a budget", "high");
var phone = prompt("android/iOS ","iOS");
var camera = prompt("choose a camera quality","high" );
var battery = prompt("choose a battery life", "long" ) ;
var screen = prompt("choose a screen size" , "medium" );
if (budget === "high") {
  console.log(budget);
  phone === "iOS";
  console.log(phone);
  camera === "high";
  console.log(camera);
  battery === "long";
  console.log(battery);
  screen === "medium";
  console.log(screen);
}

// not
else if (budget === "medium") {
  phone === "android";
  camera === "basic";
  battery === "average";
  screen === "small";
}
// not
else {
  alert("not available");
}
// var budget = prompt("choose a budget");
// var phone = prompt("android/iOS ");

// if (budget === "high") {
//     if (phone === "iOS") {
//  var camera = prompt("choose your camera quality")       
//     }
// }
// else {
//     alert("not avilibale")
// }