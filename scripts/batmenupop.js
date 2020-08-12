var stone = 0; //1
var quartz = 0;
var agrile = 0;
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
        if (name == "mine")
            openmine();
        openedmenu = 1;
    }
}

function openmine()
{
    document.getElementById("batmenuname").innerHTML = "Mine lvl " + hornet.lvl;
}

function closemenu()
{
    document.getElementById("batmenupop").style.display = "none";
    document.getElementById("batmenuname").innerHTML = "";
    openedmenu = 0;
}

document.getElementById("footscroll").style.bottom == "-300px"