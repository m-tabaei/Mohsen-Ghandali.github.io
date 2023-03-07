let bar1Value = 0;
let bar2Value = 0;
let bar3Value = 0;

setInterval(function() {
  if (bar1Value < 100) {
    bar1Value++;
    document.getElementById("bar1").style.width = bar1Value + "%";
  }
}, 50);

setInterval(function() {
  if (bar2Value < 75) {
    bar2Value++;
    document.getElementById("bar2").style.width = bar2Value + "%";
  }
}, 75);

setInterval(function() {
  if (bar3Value < 50) {
    bar3Value++;
    document.getElementById("bar3").style.width = bar3Value + "%";
  }
}, 100);
