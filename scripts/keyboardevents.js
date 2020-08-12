document.addEventListener('keydown', function(event) {
    if(event.keyCode == 27)
    {
        if (openedscroll && document.getElementById("footscroll").style.bottom == "0px")
            scrolldown();
        if (document.getElementById("parammenu").hidden == false)
            document.getElementById("parammenu").hidden = true;
    }
    if(event.keyCode == 77) //m
    {
        if (openedmenu == "mine")
            closemenu();
        else
            openmenu("mine");
    }
    if(event.keyCode == 80) //p
    {
        if (openedmenu == "port")
            closemenu();
        else
            openmenu("port");
    }
    if(event.keyCode == 70) //f
    {
        if (openedmenu == "foret")
            closemenu();
        else
            openmenu("foret");
    }
});