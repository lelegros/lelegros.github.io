window.addEventListener("mouseup", function(event) {
    document.body.style.cursor = "default";
    document.removeEventListener("mousemove", movet);
    if (document.getElementById("popup")) 
        deletepopup();
    if (batiment != "")
    {
        if (batiment.style.top == oldtop && batiment.style.left == oldleft)
        {
            if (document.getElementById("footscroll").style.bottom == "-300px")
                scrollup(batiment);
            else if (document.getElementById("footscroll").style.bottom == "0px")
            {
                if (openedscroll != batiment.id)
                    scrollup(batiment);
                else
                    scrolldown();
            }
        }
        else if (batiment.offsetTop < 0 || batiment.offsetTop > window.innerHeight - batiment.offsetHeight 
            || batiment.offsetLeft < 0 || batiment.offsetLeft > window.innerWidth - batiment.offsetWidth)
        {
            batiment.style.top = oldtop;
            batiment.style.left = oldleft;
            draw();
        }
        batiment = "";
    }
    else if (batiment == "" && openedscroll)
    {
        if (!event.path.includes(document.getElementById("footscroll")))
            scrolldown();
    }
});

i = 0;

while (i < batiments.length)
{
    batiments[i].addEventListener("mousedown", function(event) {
        event.preventDefault();
        var buttonPressed = event.button;
        if (buttonPressed == 0)
        {
            batiment = document.getElementById(event.srcElement.id);
            oldtop = batiment.style.top;
            oldleft = batiment.style.left;
            document.addEventListener("mousemove", movet);
        }
    });
    i++;
}