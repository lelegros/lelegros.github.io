i = 0;

while (i < batiments.length)
{
    batiments[i].addEventListener("mousedown", function(event) {
        var x = event.clientX;
        var y = event.clientY;
        var buttonPressed = event.button;
        var batiment_id = event.srcElement.id;

        if (buttonPressed == 2)
            createpopup(x, y, batiment_id);
    });
    i++;
};

function createpopup(x, y, batiment_id) {
    var popup = document.createElement("div");

    popup.id = "popup";
    section.appendChild(popup);
    popup.style.top = y + "px";
    popup.style.left = x + "px";
    popup.style.zIndex = 2;
    popuptext(batiment_id, popup);
}

function popuptext(batiment_id, popup) {
    if (batiment_id == "hornet")
        popup.innerHTML = "C'est Hornet";
    if (batiment_id == "knight")
        popup.innerHTML = "C'est le knight";
    if (batiment_id == "quirell")
        popup.innerHTML = "C'est quirell";
}

function deletepopup() {
    document.getElementById("popup").remove();
}