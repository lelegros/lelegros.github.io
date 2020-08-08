function draw(color) {
    if (document.getElementById("Canvas01"))
        document.getElementById("Canvas01").remove();
    var canvas = document.createElement("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.id = "Canvas01";
    canvas.setAttribute("class", "canvas");
    section.appendChild(canvas);
    var HornetToKnight = document.getElementById("Canvas01");
    var hftop = hornet.offsetTop;
    var hfheight = hornet.offsetHeight;
    var hfleft = hornet.offsetLeft;
    var hfwidth = hornet.offsetWidth;
    var kftop = knight.offsetTop;
    var kfheight = knight.offsetHeight;
    var kfleft = knight.offsetLeft;
    var kfwidth = knight.offsetWidth;
    var ctx = HornetToKnight.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#FF2E00";
    ctx.moveTo(hfleft + (hfwidth / 2), hftop + (hfheight / 2));
    ctx.lineTo(kfleft + (kfwidth / 2), kftop + (kfheight / 2));
    ctx.stroke(); 
}

draw();