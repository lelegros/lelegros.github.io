function compteur(id, speed, variable)
{
    if (increase)
        clearInterval(increase);
    increase = setInterval(function() {
        if (variable == "Stone")
        {
            stone++;
            if (document.getElementById("batmenuname").innerHTML == "Mine")
            {
                document.getElementById(id).innerHTML = stone;
                document.getElementById("stone").innerHTML = stone;
            }
        }
    }, speed);
}