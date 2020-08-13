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
    document.getElementById("batmenubutton1qt").innerHTML = stone;
    document.getElementById("batmenubutton1lvl").innerHTML = batmenuboxlvl[0];
}

function openforet()
{
    document.getElementById("batmenuname").innerHTML = "Foret";
    document.getElementById("batmenubutton11").hidden = true;
    document.getElementById("batmenubutton1name").innerHTML = "Frene"
    document.getElementById("batmenubutton1qt").innerHTML = frene;
    document.getElementById("batmenubutton1lvl").innerHTML = batmenuboxlvl[6];
}

function openport()
{
    document.getElementById("batmenuname").innerHTML = "Port";
    document.getElementById("batmenubutton11").hidden = false;
    document.getElementById("batmenubutton1name").innerHTML = "Radeau"
    document.getElementById("batmenubutton1qt").innerHTML = radeau;
    document.getElementById("batmenubutton1lvl").innerHTML = batmenuboxlvl[12];
}

function closemenu()
{
    document.getElementById("batmenupop").style.display = "none";
    document.getElementById("batmenuname").innerHTML = "";
    openedmenu = "";
}

document.getElementById("footscroll").style.bottom == "-300px";