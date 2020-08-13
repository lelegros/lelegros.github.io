function compteur(id, speed, variable)
{
    if (variable == "Stone")
    {
        if (increases[0])
            clearInterval(increases[0]);
        increases[0] = setInterval(function() {
            stone++;
            if (document.getElementById("batmenuname").innerHTML == "Mine") 
                document.getElementById(id).innerHTML = stone;
            document.getElementById("stone").innerHTML = stone;
        }, speed);
    }
    if (variable == "Frene")
    {
        if (increases[1])
            clearInterval(increases[1]);
        increases[1] = setInterval(function() {
            frene++;
            if (document.getElementById("batmenuname").innerHTML == "Foret") 
                document.getElementById(id).innerHTML = frene;
            document.getElementById("frene").innerHTML = frene;
        }, speed);
    }
    if (variable == "Radeau")
    {
        console.log("ezaihopryhzarjmoùza");
        if (increases[2])
            clearInterval(increases[2]);
        increases[2] = setInterval(function() {
            radeau++;
            if (document.getElementById("batmenuname").innerHTML == "Port") 
                document.getElementById(id).innerHTML = radeau;
            document.getElementById("radeau").innerHTML = radeau;
        }, speed);
    }
}