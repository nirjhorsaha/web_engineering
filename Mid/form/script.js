//form validation
var sub = document.getElementById("sub");
sub.onclick = function validate() {
    var m = document.getElementById("fname");
    var n = document.getElementById("pass");
    var o = document.getElementById("em");

    if (n.value == "" || m.value == "") {
        alert("Field can't be empty");
    } else {
    }

    if ((n.value.length < 3) & (n.value > 8)) {
        alert("Password is not valid");
    }
    var str = m.value.slice(0, 1);
    if (str == "_" || str == "$") {
        alert("Username is not valid");
    }

    var mat = "@gmail";
    if (o.value.match(mat)) {
        return true;
    } else {
        alert("Email is not valid");
    }
};
