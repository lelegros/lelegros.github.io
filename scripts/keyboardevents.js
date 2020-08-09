document.addEventListener('keydown', function(event) {
    if(event.keyCode == 27)
    {
        if (openedscroll && document.getElementById("footscroll").style.bottom == "0px")
            scrolldown();
    }
    if(event.keyCode == 84)
    {
        console.log(event);
    }
});