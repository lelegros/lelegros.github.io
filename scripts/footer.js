function scrollup(sbatiemnt) {
    if (openedmenu)
        closemenu();
    openedscroll = sbatiemnt.id;
    document.getElementById("fbuildingname").innerHTML = sbatiemnt.name + " lvl " + sbatiemnt.lvl;
    if (document.getElementById("footscroll").style.bottom == "-300px")
    {
        if (sbatiemnt.id == "generateur")
            opengenerator();
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
