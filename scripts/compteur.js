function compteur(id, speed, variable)
{
    if (increase)
        clearInterval(increase);
    increase = setInterval(function() {
        if (variable == "Stone")
        {
            stone++;
            document.getElementById(id).innerHTML = stone;
        }
    }, speed);
}