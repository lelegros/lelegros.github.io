window.addEventListener("mouseup", function(event) {
    document.body.style.cursor = "default";
    document.removeEventListener("mousemove", movet);
    if (document.getElementById("popup")) 
        deletepopup();
    if (building != "")
    {
        if (building.style.top == oldtop && building.style.left == oldleft)
        {
            if (document.getElementById("footscroll").style.bottom == "-300px")
                scrollup(building);
            else if (document.getElementById("footscroll").style.bottom == "0px")
            {
                if (openedscroll != building.id)
                    scrollup(building);
                else
                    scrolldown();
            }
        }
        else if (building.offsetTop < 80 || building.offsetTop > window.innerHeight - building.offsetHeight 
            || building.offsetLeft < 0 || building.offsetLeft > window.innerWidth - building.offsetWidth)
        {
            building.style.top = oldtop;
            building.style.left = oldleft;
            draw();
        }
        building = "";
    }
    else if (building == "" && openedscroll)
    {
        if (event.srcElement.id != "footscroll" && event.srcElement.id != "fcontent" && event.srcElement.id != "upgradebutton" && event.srcElement.id != "upgradetext")
            scrolldown();
    }
    //if (building == "" && openedmenu)
     //   closemenu();
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
            document.addEventListener("mousemove", movet);
        }
    });
    i++;
}