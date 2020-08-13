function opengenerator()
{
    
}

document.getElementById("upgradebutton").addEventListener("mouseup", function(event) {
    document.getElementById("generateur").lvl++;
    document.getElementById("generateur").innerHTML = document.getElementById("generateur").name + " lvl " + document.getElementById("generateur").lvl;
});