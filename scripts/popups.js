i = 0;

while (i < buildings.length)
{
    buildings[i].addEventListener("mousedown", function(event) {
        var x = event.clientX;
        var y = event.clientY;
        var buttonPressed = event.button;
        var building_id = event.srcElement.id;
        if (buttonPressed == 2)
            createpopup(x, y, building_id);
    });
    i++;
};

function createpopup(x, y, building_id) {
    var popup = document.createElement("div");
    popup.id = "popup";
    section.appendChild(popup);
    popup.style.top = y + "px";
    popup.style.left = x + "px";
    popup.style.zIndex = 2;
    popuptext(building_id, popup);
}

function popuptext(building_id, popup) {
    if (building_id == "hornet")
        popup.innerHTML = "C'est Hornet";
    if (building_id == "knight")
        popup.innerHTML = "C'est le Knight";
    if (building_id == "quirell")
        popup.innerHTML = "C'est Quirell";
    if (building_id == "mine")
        popup.innerHTML = "C'est la mine";
    if (building_id == "foret")
        popup.innerHTML = "C'est la foret";
    if (building_id == "port")
        popup.innerHTML = "C'est le port";
}

function deletepopup() {
    document.getElementById("popup").remove();
}