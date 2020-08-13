function compteur(id, maxid, speed)
{
    if (increase)
    {
        console.log("cleared");
        clearInterval(increase);
    }
    var compteur = parseInt(document.getElementById(id).innerHTML);
    if (maxid)
        var max = parseInt(document.getElementById(maxid).innerHTML);
    if (!max)
        max = -1;
    increase = setInterval(function() {
        compteur++;
        if (compteur <= max || max == -1)
        {
            document.getElementById(id).innerHTML = compteur;
        }
        if (compteur == max)
            clearInterval(increase);
    }, speed);
}