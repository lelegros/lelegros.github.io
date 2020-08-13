var stone = 0; //1
var quartz = 0;
var agrile = 0; //2
var amethyst = 0;
var coal = 0; //3
var rubis = 0;
var iron = 0; //4
var saphire = 0;
var copper = 0; //5
var emerald = 0;
var gold = 0; //6
var diamond = 0;

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
                document.getElementById("batmenubutton" + event.srcElement.id[4] + "lvl").innerHTML = parseInt(document.getElementById("batmenubutton" + event.srcElement.id[4] + "lvl").innerHTML) + 1;
                console.log("batmenubutton" + event.srcElement.id[4] + "qt");
                console.log(document.getElementById("batmenubutton1qt"));
                compteur("batmenubutton" + event.srcElement.id[4] + "qt", 0, 1000 / parseInt(document.getElementById("batmenubutton" + event.srcElement.id[4] + "lvl").innerHTML));
            })
            document.getElementById("minus" + i).addEventListener("mouseup", function(event) {
                document.getElementById("batmenubutton" + event.srcElement.id[5] + "lvl").innerHTML = parseInt(document.getElementById("batmenubutton" + event.srcElement.id[5] + "lvl").innerHTML) - 1;
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