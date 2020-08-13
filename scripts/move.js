function move(event) {
    if (active_building != "")
    {
        active_building.style.top = event.clientY - (active_building.clientHeight / 2) + "px";
        active_building.style.left = event.clientX - (active_building.clientWidth / 2) + "px";
        draw();
    }
}