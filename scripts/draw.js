function drawer(ele1, ele2, color)
{
    var domcanvas = document.getElementById("canvas");
    var hftop = ele1.offsetTop;
    var hfheight = ele1.offsetHeight;
    var hfleft = ele1.offsetLeft;
    var hfwidth = ele1.offsetWidth;
    var kftop = ele2.offsetTop;
    var kfheight = ele2.offsetHeight;
    var kfleft = ele2.offsetLeft;
    var kfwidth = ele2.offsetWidth;
    var ctx = domcanvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(hfleft + (hfwidth / 2), hftop + (hfheight / 2));
    ctx.lineTo(kfleft + (kfwidth / 2), kftop + (kfheight / 2));
    ctx.stroke(); 
}

function draw()
{
    if (document.getElementById("canvas"))
        document.getElementById("canvas").remove();
    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    section.appendChild(canvas);

    drawer(generator.img, knight.img, "black");
    drawer(generator.img, quirell.img, "red");
    drawer(generator.img, mine.img, "grey");
    drawer(generator.img, forest.img, "green");
    drawer(generator.img, docks.img, "blue");
}

draw();