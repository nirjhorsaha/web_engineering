// var a = document.getElementById("op");
// a.onclick = function (){

function factorialnum() {
    var num = prompt("Enter a number:");
    var fact = num;
    for ( var i = 1; i < num; i++) {
        fact = fact * i;
    }
    // document.getElementById("answer").value = fact;
    document.getElementById("check").innerHTML = "The factorial of " + num + " is " + fact;
}

//     if (num < 0)
//         return -1;
//     else if (num == 0)
//         return 1;
//     else {
//         return num * factorialize(num - 1);
//   }
    // document.getElementById("check").innerHTML = "The factorial is " + num ;

