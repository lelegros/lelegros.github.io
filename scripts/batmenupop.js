function openmenu(name)
{
    if (document.getElementById("footscroll").style.bottom == "-300px" || document.getElementById("footscroll").style.bottom == "0px")
    {
        if (document.getElementById("footscroll").style.bottom == "0px")
            scrolldown();
        document.getElementById("batmenupop").style.display = "flex";
        i = 1;
        while (i < 2)
        {
            document.getElementById("plus" + i).addEventListener("mouseup", function(event) {
                if (parseInt(document.getElementById("energie").innerHTML) - 10 >= 0)
                {
                    document.getElementById("batmenubutton" + event.srcElement.id[4] + "lvl").innerHTML = parseInt(document.getElementById("batmenubutton" + event.srcElement.id[4] + "lvl").innerHTML) + 1;
                    compteur("batmenubutton" + event.srcElement.id[4] + "qt", 1000 / parseInt(document.getElementById("batmenubutton" + event.srcElement.id[4] + "lvl").innerHTML), document.getElementById("batmenubutton" + event.srcElement.id[4] + "name").innerHTML);
                    energie -= 10;
                    document.getElementById("energie").innerHTML = energie;
                }
            })
            document.getElementById("minus" + i).addEventListener("mouseup", function(event) {
                if ( parseInt(document.getElementById("batmenubutton" + event.srcElement.id[5] + "lvl").innerHTML) > 0)
                {
                    document.getElementById("batmenubutton" + event.srcElement.id[5] + "lvl").innerHTML = parseInt(document.getElementById("batmenubutton" + event.srcElement.id[5] + "lvl").innerHTML) - 1;
                    energie += 10
                    document.getElementById("energie").innerHTML = energie;
                    if (document.getElementById("batmenubutton" + event.srcElement.id[5] + "lvl").innerHTML != "0")
                        compteur("batmenubutton" + event.srcElement.id[5] + "qt", 1000 / parseInt(document.getElementById("batmenubutton" + event.srcElement.id[5] + "lvl").innerHTML), document.getElementById("batmenubutton" + event.srcElement.id[5] + "name").innerHTML);
                    else
                        clearInterval(increase);
                }
            })
            i++;
        }
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