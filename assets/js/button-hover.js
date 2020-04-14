
function changeFirst(isHover) {
    if (isHover) {
        document.getElementById('trabajos').style.backgroundImage = "url('/assets/img/ilustracion1.png')";
        document.getElementById('trabajos').style.backgroundRepeat = "no-repeat";
        document.getElementById('trabajos').style.backgroundPosition = "center";
        document.getElementById('trabajos').style.backgroundSize = "cover";
    } else {
        document.getElementById('trabajos').style.backgroundImage = "none";
    }
}