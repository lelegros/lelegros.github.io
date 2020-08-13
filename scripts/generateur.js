var max_energie = 100;
var energie = 100;
var generateur_stone_requirement = 10;

function opengenerator()
{
        document.getElementById("upgradetext").innerHTML = "Upgrade : " + generateur_stone_requirement + " Stone ";
}

function upgradegenerator()
{       
        if (stone >= generateur_stone_requirement)
        {
        stone -= generateur_stone_requirement;
        generateur_stone_requirement = Math.round(Math.exp(generateur.lvl)+10);
        document.getElementById("upgradetext").innerHTML = "Upgrade : " + generateur_stone_requirement + " Stone ";
        generateur.lvl++;
        max_energie += 100;
        energie += 100;
        document.getElementById("fbuildingname").innerHTML = document.getElementById("generateur").name + " lvl " + generateur.lvl;
        document.getElementById("max_energie").innerHTML = max_energie;
        document.getElementById("energie").innerHTML = energie;
        
        }
}