function compteur(id, speed, variable)
{
    if (increase)
        clearInterval(increase);
    increase = setInterval(function() {
        stone++;
        document.getElementById(id).innerHTML = stone;
    }, speed);
}