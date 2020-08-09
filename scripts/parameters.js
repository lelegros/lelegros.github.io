document.getElementById("paramicon").addEventListener("mouseup", function(event) {
    if (event.button == 0)
    {
        if (document.getElementById("parammenu").hidden == true)
            document.getElementById("parammenu").hidden = false;
        else
            document.getElementById("parammenu").hidden = true;
    }
});

document.getElementById("paramdark").addEventListener("mouseup", function(event) {
    if (event.button == 0)
    {
        if (document.getElementById("darkonoff").innerHTML == "OFF")
        {
            document.getElementById("darkonoff").innerHTML = "ON";
            document.getElementById("section").style.backgroundColor = "#323232";
        }
        else
        {
            document.getElementById("darkonoff").innerHTML = "OFF";
            document.getElementById("section").style.backgroundColor = "#eeeeee";
        }
    }
});