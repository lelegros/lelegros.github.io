window.addEventListener("mouseup", function(event) {
    document.body.style.cursor = "default";
    document.removeEventListener("mousemove", move);
    if (document.getElementById("popup")) 
        deletepopup();
    if (building != "")
    {
        if (building.style.top == oldtop && building.style.left == oldleft)
        {
            if (building.id == "mine" || building.id == "port" || building.id == "foret")
            {
                if (openedmenu == building.id)
                    closemenu();
                else
                    openmenu(building.id);
            }
            else if (document.getElementById("footscroll").style.bottom == "-300px")
                scrollup(building);
            else if (document.getElementById("footscroll").style.bottom == "0px")
            {
                if (openedscroll != building.id)
                    scrollup(building);
                else
                    scrolldown();
            }
        }
        else if (building.offsetTop < document.getElementById("header").offsetHeight || building.offsetTop > window.innerHeight - building.offsetHeight 
            || building.offsetLeft < 0 || building.offsetLeft > window.innerWidth - building.offsetWidth)
        {
            building.style.top = oldtop;
            building.style.left = oldleft;
            draw();
        }
        building = "";
    }
    else if (building == "" && openedscroll) //&& event.pageY < 638)
    {
        if (!event.srcElement.classList.contains("closefoot"))
            scrolldown();
    }
    else if (building == "" && openedmenu)
        if (!event.srcElement.classList.contains("closemenu"))
            closemenu();
});

i = 0;

while (i < buildings.length)
{
    buildings[i].addEventListener("mousedown", function(event) {
        event.preventDefault();
        var buttonPressed = event.button;
        if (buttonPressed == 0)
        {
            building = document.getElementById(event.srcElement.id);
            oldtop = building.style.top;
            oldleft = building.style.left;
            document.addEventListener("mousemove", move);
        }
    });
    i++;
}

document.getElementById("upgradebutton").addEventListener("mouseup", function(event) {
    if (openedscroll == "generateur")
    {
        upgradegenerator();
        
    }
});

i = 1;
while (i < 2)
{
    document.getElementById("plus" + i).addEventListener("mouseup", function(event) {
        if (parseInt(document.getElementById("energie").innerHTML) - 10 >= 0)
        {
            document.getElementById("batmenubutton" + event.srcElement.id[4] + "lvl").innerHTML = parseInt(document.getElementById("batmenubutton" + event.srcElement.id[4] + "lvl").innerHTML) + 1;
            compteur("batmenubutton" + event.srcElement.id[4] + "qt", 1000 / parseInt(document.getElementById("batmenubutton" + event.srcElement.id[4] + "lvl").innerHTML), document.getElementById("batmenubutton" + event.srcElement.id[4] + "name").innerHTML);
            mine_cost += 10;
            cost();
        }
    })
    document.getElementById("minus" + i).addEventListener("mouseup", function(event) {
        if ( parseInt(document.getElementById("batmenubutton" + event.srcElement.id[5] + "lvl").innerHTML) > 0)
        {
            document.getElementById("batmenubutton" + event.srcElement.id[5] + "lvl").innerHTML = parseInt(document.getElementById("batmenubutton" + event.srcElement.id[5] + "lvl").innerHTML) - 1;
            mine_cost -= 10;
            cost();
            if (document.getElementById("batmenubutton" + event.srcElement.id[5] + "lvl").innerHTML != "0")
                compteur("batmenubutton" + event.srcElement.id[5] + "qt", 1000 / parseInt(document.getElementById("batmenubutton" + event.srcElement.id[5] + "lvl").innerHTML), document.getElementById("batmenubutton" + event.srcElement.id[5] + "name").innerHTML);
            else
                clearInterval(increase);
        }
    })
    i++;
}