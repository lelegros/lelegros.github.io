var hornet = document.getElementById("hornet");
var knight = document.getElementById("knight");
var quirell = document.getElementById("quirell");
var section = document.getElementById("section");
var batiments = document.getElementsByClassName("batiment");
var i = 0;
var batiment = "";
var oldtop = "";
var oldbot = "";
var openedscroll = "";

document.getElementById("footscroll").style.bottom = -300 + "px";
hornet.lvl = 1;
knight.lvl = 2;
quirell.lvl = 235;

window.addEventListener('contextmenu', function (remove_right_click) { 
    remove_right_click.preventDefault(); 
}, false);
