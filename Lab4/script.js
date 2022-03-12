// document.write("<br>");
// document.write("This is our Javascript class");
// /*alert("welcome");  */
// document.getElementById("hl").innerHTML = "This is lab 3";
// document.write("<br>");
// document.write("JavaScript<br>");
// document.write("ERA ");
// document.write("<br>");
// var name = "Abida";
// var name1 = "Anjum";
// document.write(name);
// document.write("<br>");
// document.write("Length: " + name.length);
// document.write("<br>");
// document.write("concat: " + name.concat(name1));
// document.write("<br>");
// document.write("char at index 3: " + name.charAt(3));
// document.write("<br>");
// document.write("Uppercase: " + name.toUpperCase());
// document.write("<br>");

// var x = 10;
// var y = 20;
// document.write(x + y);
// var n=prompt("enter a number:");

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1, 4);
// document.write(citrus);
// document.write("<br>");

// items = new Array(10);

// items = [89, 08, 50, 101, 78, 704, 8, 3, 56, 90];

// for (i = 0; i < items.length; i++) {
//   document.write(items[i] + "<br>"); //displays elements
// }

// today = new Date();
// document.write(today);
// document.write("<br>");
// newYear = new Date(2002, 1, 2);
// document.write(newYear);

//addition
var pls = document.getElementById("a");
pls.onclick = function () {
  var n1 = Number(document.getElementById("fn").value);
  var n2 = Number(document.getElementById("ln").value);
  var result = n1 + n2;

  document.getElementById("re").value = result;
};
//subtraction
var pls = document.getElementById("s");
pls.onclick = function () {
  var n1 = Number(document.getElementById("fn").value);
  var n2 = Number(document.getElementById("ln").value);
  var result = n1 - n2;

  document.getElementById("re").value = result;
};


//form validation
var sub = document.getElementById("sd");
sub.onclick = function validate() {
  var n = document.getElementById("un");
  var m = document.getElementById("ps");
  if (n.value == "" || m.value == "") {
    alert("Fields can't be empty");
  } else {
  }

  if (m.value.length < 3 || m.value.length > 9) {
    alert("password is not valid");
  }

  var str = n.value.slice(0, 1);
  if (str == "_" || str == "$") {
    alert("username is not valid");
  }
};
