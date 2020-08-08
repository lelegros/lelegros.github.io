function movet(event) {
    if (batiment != "")
    {
        batiment.style.top = event.clientY - (batiment.clientHeight / 2) + "px";
        batiment.style.left = event.clientX - (batiment.clientWidth / 2) + "px";
        draw();
    }
}