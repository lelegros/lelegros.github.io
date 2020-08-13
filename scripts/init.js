var generator = new Building("Generator", 1);
var knight = new Building("Knight", 1);
var quirell = new Building("Quirell", 1);
var mine = new Building("Mine", 0);
var docks = new Building("Docks", 0);
var forest = new Building("Forest", 0);
var buildings = [generator, knight, quirell, mine, docks, forest];
var i = 0;
var active_building = "";
var initial_top = "";
var oldbot = "";
var openedscroll = "";
var openedmenu = "";
var increasestone = "";
var increasefrene = "";
var increaseradeau = "";
var stone = 0; //1
var quartz = 0;
var agrile = 0; //2
var amethyst = 0;
var coal = 0; //3
var rubis = 0;
var iron = 0; //4
var saphire = 0;
var copper = 0; //5
var emerald = 0;
var gold = 0; //6
var diamond = 0;
var batmenuboxlvl = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var increases = [increasestone, increasefrene, increaseradeau];
var frene = 0;
var radeau = 0;
var max_energie = 100;
var energie = 100;
var mine_cost = 0;
var forest_cost = 0;
var generateur_stone_requirement = 10;
var boxid = 0;

document.getElementById("footscroll").style.bottom = -300 + "px";

window.addEventListener('contextmenu', function (remove_right_click) { 
    remove_right_click.preventDefault(); 
}, false);

window.addEventListener("mousedown", function(event) {
    if (event.button == 2)
        document.body.style.cursor = "none";
})

generator.img.style.position = "absolute";                   //Gros paté à changer
generator.img.style.left = generator.posx + "px";
generator.img.style.top = generator.posy + "px";
knight.img.style.position = "absolute";
knight.img.style.left = knight.posx + "px";
knight.img.style.top = knight.posy + "px";
quirell.img.style.position = "absolute";
quirell.img.style.left = quirell.posx + "px";
quirell.img.style.top = quirell.posy + "px";
mine.img.style.position = "absolute";
mine.img.style.left = mine.posx + "px";
mine.img.style.top = mine.posy + "px";
docks.img.style.position = "absolute";
docks.img.style.left = docks.posx + "px";
docks.img.style.top = docks.posy + "px";
forest.img.style.position = "absolute";
forest.img.style.left = forest.posx + "px";
forest.img.style.top = forest.posy + "px";
