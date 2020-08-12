document.addEventListener('keydown', function(event) {
    if(event.keyCode == 27)
    {
        if (openedscroll && document.getElementById("footscroll").style.bottom == "0px")
            scrolldown();
        if (document.getElementById("parammenu").hidden == false)
            document.getElementById("parammenu").hidden = true;
    }
    if(event.keyCode == 77)
    {
        if (openedmenu)
            closemenu();
        else
            openmenu("mine");
    }
});