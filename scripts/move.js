function movet(event) {
    if (building != "")
    {
        building.style.top = event.clientY - (building.clientHeight / 2) + "px";
        building.style.left = event.clientX - (building.clientWidth / 2) + "px";
        draw();
    }
}