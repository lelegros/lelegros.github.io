function openmenu(name)
{
    if (document.getElementById("footscroll").style.bottom == "-300px" || document.getElementById("footscroll").style.bottom == "0px")
    {
        if (document.getElementById("footscroll").style.bottom == "0px")
            scrolldown();
        document.getElementById("batmenupop").style.display = "flex";
        if (name == "mine")
        {
            openmine();
            openedmenu = "mine";
        }
        if (name == "foret")
        {
            openforet();
            openedmenu = "foret";
        }
        if (name == "port")
        {
            openport();
            openedmenu = "port";
        }
    }
}

function openmine()
{
    document.getElementById("batmenuname").innerHTML = "Mine";
    document.getElementById("batmenubutton11").hidden = true;
    document.getElementById("batmenubutton1name").innerHTML = "Stone"
}

function openforet()
{
    document.getElementById("batmenuname").innerHTML = "Foret";
    document.getElementById("batmenubutton11").hidden = true;
}

function openport()
{
    document.getElementById("batmenuname").innerHTML = "Port";
    document.getElementById("batmenubutton11").hidden = false;
}

function closemenu()
{
    document.getElementById("batmenupop").style.display = "none";
    document.getElementById("batmenuname").innerHTML = "";
    openedmenu = "";
}

document.getElementById("footscroll").style.bottom == "-300px"