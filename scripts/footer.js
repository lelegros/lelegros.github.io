function scrollup(sbatiemnt) {
    openedscroll = sbatiemnt.id;
    document.getElementById("batimentname").innerHTML = sbatiemnt.name + " lvl " + sbatiemnt.lvl;
    if (document.getElementById("footscroll").style.bottom == "-300px")
    {
        var scrollfooterup = setInterval(function() {
            document.getElementById("footscroll").style.bottom = parseInt(document.getElementById("footscroll").style.bottom) + 10 + "px";
            if (document.getElementById("footscroll").style.bottom == "0px")
                clearInterval(scrollfooterup);
        }, 1);
    }
};

function scrolldown()
{
    openedscroll = "";
    if (document.getElementById("footscroll").style.bottom == "0px")
    {
        var scrollfooterdown = setInterval(function() {
            document.getElementById("footscroll").style.bottom = parseInt(document.getElementById("footscroll").style.bottom) - 10 + "px";
            if (document.getElementById("footscroll").style.bottom == "-300px")
                clearInterval(scrollfooterdown);
        }, 1);
    }
}

document.getElementById("upgradebutton").addEventListener("mouseup", function(event) {
    document.getElementById(openedscroll).lvl++;
    document.getElementById("batimentname").innerHTML = document.getElementById(openedscroll).name + " lvl " + document.getElementById(openedscroll).lvl;
});