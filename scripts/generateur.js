var max_energie = 100;
var cost = 0;
var energie = max_energie - cost;

function opengenerator()
{
    document.getElementById("upgradebutton").addEventListener("mouseup", function(event) {
        generateur.lvl++;
        max_energie += 100;
        energie = max_energie - cost;
        console.log(max_energie);
        document.getElementById("fbuildingname").innerHTML = document.getElementById("generateur").name + " lvl " + generateur.lvl;
        document.getElementById("max_energie").innerHTML = max_energie;
        document.getElementById("energie").innerHTML = energie;
    });
}
