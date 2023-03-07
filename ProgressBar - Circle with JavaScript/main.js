let bar1Value = 0;
let bar2Value = 0;
let bar3Value = 0;

setInterval(function() {
  if (bar1Value <= 100) {
    document.getElementById("bar1").style.strokeDashoffset = 377 - (377 * bar1Value) / 100;
    document.getElementById("percentage1").innerHTML = bar1Value + "%";
    bar1Value++;
  }
}, 20);

setInterval(function() {
  if (bar2Value <= 75) {
    document.getElementById("bar2").style.strokeDashoffset = 377 - (377 * bar2Value) / 100;
    document.getElementById("percentage2").innerHTML = bar2Value + "%";
    bar2Value++;
  }
}, 30);

setInterval(function() {
  if (bar3Value <= 50) {
    document.getElementById("bar3").style.strokeDashoffset = 377 - (377 * bar3Value) / 100;
    document.getElementById("percentage3").innerHTML = bar3Value + "%";
    bar3Value++;
  }
}, 40);
