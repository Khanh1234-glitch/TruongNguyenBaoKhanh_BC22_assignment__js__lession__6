// lession 1
function smallest() {
    var s = 0;
    for (var i = 0; i < 10000 / 2; i++) {
        s += i;
        if (s > 10000) {
            return i;
        }
    }

}
var result = "smallest positive interger is: " + smallest();
document.getElementById("footer__Smallest").innerHTML = result;
//lession 2
function total(x, n) {
    var T = 1;
    var S = 0;
    for (var i = 1; i <= n; i++) {
        T = T * x;
        S = S + T;
    }
    return S;
}
document.getElementById("btn__total").onclick = function() {
        var x = document.getElementById("txtNumber__x").value * 1;
        var n = document.getElementById("txtNumber__n").value * 1;
        var result = total(x, n);
        document.getElementById("footer__total").innerHTML = result;
    }
    //lession 3
function factorial(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
document.getElementById("btn__factorial").onclick = function() {
        var n = document.getElementById("txtNumber__factorial").value * 1;
        var result = factorial(n);
        document.getElementById("footer__factorial").innerHTML = result;
    }
    //lession 4
function createDiv() {
    var tagP = "";
    for (var i = 1; i <= 10; i++) {
        if (i % 2) {
            tagP += "<div style='color:white; background-color:red'> div: " + i + "<div>";
        } else {
            tagP += "<div style='color:white; background-color:blue'> div: " + i + "<div>";
        }
    }
    return tagP;
}
document.getElementById("btn__creatdiv").onclick = function() {
    var result = createDiv();
    document.getElementById("footer__creatdiv").innerHTML = result;
}