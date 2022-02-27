var a = document.getElementById("sub");
a.onclick = function () {
    var ly = Number(document.getElementById("num").value);
    if ((0 == ly % 4 && 0 != ly % 100) || 0 == ly % 400) {
      var x= "It is a leap Year";
    } else {
      var x= "It is a not a leap Year";
  }
  document.getElementById("txt").value = x;
}
