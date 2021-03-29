

var btnlogin  = document.getElementById("login"),
    btnsign   = document.getElementById("sign"),
    btncolor = document.getElementById("btn-color"),
    login     = document.getElementById("loginform"),
    sign      = document.getElementById("signform");


function btnsignn(argument) {
sign.style.left = "0";	
login.style.left = "-400px";
btncolor.style.left = "100px";
}


function btnloginn(argument) {
login.style.left = "0";	
sign.style.left = "400px";	
btncolor.style.left = "0";


}