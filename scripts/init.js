var hornet = document.getElementById("hornet");
var knight = document.getElementById("knight");
var quirell = document.getElementById("quirell");
var mine = document.getElementById("mine");
var port = document.getElementById("port");
var foret = document.getElementById("foret");
var section = document.getElementById("section");
var buildings = document.getElementsByClassName("building");
var hposx = hornet.offsetLeft;
var hposy = hornet.offsetTop;
var kposx = knight.offsetLeft;
var kposy = knight.offsetTop;
var qposx = quirell.offsetLeft;
var qposy = quirell.offsetTop;
var mposx = mine.offsetLeft;
var mposy = mine.offsetTop;
var pposx = port.offsetLeft;
var pposy = port.offsetTop;
var fposx = foret.offsetLeft;
var fposy = foret.offsetTop;
var i = 0;
var building = "";
var oldtop = "";
var oldbot = "";
var openedscroll = "";
var openedmenu = "";

document.getElementById("footscroll").style.bottom = -300 + "px";
hornet.lvl = 1;
knight.lvl = 1;
quirell.lvl = 1;

window.addEventListener('contextmenu', function (remove_right_click) { 
    remove_right_click.preventDefault(); 
}, false);

window.addEventListener("mousedown", function(event) {
    if (event.button == 2)
        document.body.style.cursor = "none";
})

hornet.style.position = "absolute";
hornet.style.left = hposx + "px";
hornet.style.top = hposy + "px";
knight.style.position = "absolute";
knight.style.left = kposx + "px";
knight.style.top = kposy + "px";
quirell.style.position = "absolute";
quirell.style.left = qposx + "px";
quirell.style.top = qposy + "px";
mine.style.position = "absolute";
mine.style.left = mposx + "px";
mine.style.top = mposy + "px";
foret.style.position = "absolute";
foret.style.left = fposx + "px";
foret.style.top = fposy + "px";
port.style.position = "absolute";
port.style.left = pposx + "px";
port.style.top = pposy + "px";
