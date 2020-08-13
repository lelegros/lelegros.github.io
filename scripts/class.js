class Building
{
    constructor(name, lvl)
    {
        this.name = name;
        this.lvl = lvl;
        this.img = document.getElementById(name.toLowerCase());
        this.id = this.img;
        this.posx = this.img.offsetLeft;
        this.posy = this.img.offsetTop;
    }
}