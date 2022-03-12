var a = document.getElementById("sub");
a.onclick = function () {
    var inp = Number(document.getElementById("num").value);
    var n1 = 0, n2 = 1, temp;
    var result = [0, 1];
    for (var i = 2; i <= inp; i++){
        result[i]= result[i-1]+ result[i-2]
    }
    document.getElementById("txt").value = result;
}