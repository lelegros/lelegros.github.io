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