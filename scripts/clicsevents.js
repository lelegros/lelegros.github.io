window.addEventListener("mouseup", function(event) {
    document.body.style.cursor = "default";
    document.removeEventListener("mousemove", move);
    if (document.getElementById("popup")) 
        deletepopup();
    if (active_building != "")
    {
        if (active_building.style.top == initial_top && active_building.style.left == initial_left)
        {
            if (active_building.id == "mine" || active_building.id == "port" || active_building.id == "foret")
            {
                if (openedmenu == active_building.id)
                    closemenu();
                else
                    openmenu(active_building.id);
            }
            else if (document.getElementById("footscroll").style.bottom == "-300px")
                scrollup(active_building);
            else if (document.getElementById("footscroll").style.bottom == "0px")
            {
                if (openedscroll != active_building.id)
                    scrollup(active_building);
                else
                    scrolldown();
            }
        }
        else if (active_building.offsetTop < document.getElementById("header").offsetHeight || active_building.offsetTop > window.innerHeight - active_building.offsetHeight 
            || active_building.offsetLeft < 0 || active_building.offsetLeft > window.innerWidth - active_building.offsetWidth)
        {
            active_building.style.top = initial_top;
            active_building.style.left = initial_left;
            draw();
        }
        active_building = "";
    }
    else if (active_building == "" && openedscroll)
    {
        if (!event.srcElement.classList.contains("closefoot"))
            scrolldown();
    }
    else if (active_building == "" && openedmenu)
        if (!event.srcElement.classList.contains("closemenu"))
            closemenu();
});

i = 0;

while (i < buildings.length)
{
    buildings[i].img.addEventListener("mousedown", function(event)
    {
        event.preventDefault();
        if (event.button == 0)
        {
            active_building = document.getElementById(event.srcElement.id);
            initial_top = active_building.style.top;
            initial_left = active_building.style.left;
            document.addEventListener("mousemove", move);
        }
    });
    i++;
}

document.getElementById("upgradebutton").addEventListener("mouseup", function(event)
{
    if (openedscroll == "generateur")
        upgradegenerator();
});

i = 1;
while (i < 2)
{
    document.getElementById("plus" + i).addEventListener("mouseup", function(event) {
        if (document.getElementById("batmenuname").innerHTML == "Mine")
            boxid = parseInt(event.srcElement.id[4]) - 1;
        else if (document.getElementById("batmenuname").innerHTML == "Foret")
            boxid = parseInt(event.srcElement.id[4]) + 5;
        else
            boxid = parseInt(event.srcElement.id[4]) + 11;
        if (parseInt(document.getElementById("energie").innerHTML) - 10 >= 0)
        {
            console.log(boxid);
            batmenuboxlvl[boxid]++;
            document.getElementById("batmenubutton" + ((boxid % 6) + 1) + "lvl").innerHTML = batmenuboxlvl[boxid];
            compteur("batmenubutton" + ((boxid % 6) + 1) + "qt", 1000 / batmenuboxlvl[boxid], document.getElementById("batmenubutton" + ((boxid % 6) + 1) + "name").innerHTML);
            mine_cost += 10;
            cost();
        }
    })
    document.getElementById("minus" + i).addEventListener("mouseup", function(event) {
        if (document.getElementById("batmenuname").innerHTML == "Mine")
            boxid = parseInt(event.srcElement.id[5]) - 1;
        else if (document.getElementById("batmenuname").innerHTML == "Foret")
            boxid = parseInt(event.srcElement.id[5]) + 5;
        else
            boxid = parseInt(event.srcElement.id[5]) + 11;
        if (batmenuboxlvl[boxid] > 0)
        {
            batmenuboxlvl[boxid]--;
            document.getElementById("batmenubutton" + ((boxid % 6) + 1) + "lvl").innerHTML = batmenuboxlvl[boxid];
            mine_cost -= 10;
            cost();
            if (batmenuboxlvl[boxid] > "0")
                compteur("batmenubutton" + ((boxid % 6) + 1) + "qt", 1000 / batmenuboxlvl[boxid], document.getElementById("batmenubutton" + ((boxid % 6) + 1) + "name").innerHTML);
            else
                clearInterval(increases[boxid / 6]);
        }
    })
    i++;
}

document.getElementById("reset_mine_energie").addEventListener("mouseup", function(event) {       //ENFAIT TOUT A REFAIRE
        var lenght = batmenuboxlvl.length;
        while (lenght > 0)
        {
            batmenuboxlvl[lenght - 1] = 0;
            document.getElementById("batmenubutton1lvl").innerHTML = 0; //"batmenubutton" + lenght + "lvl"
            lenght--;
        }
        mine_cost = 0;
        cost();
        clearInterval(increases[0]);
});