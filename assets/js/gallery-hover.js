document.getElementById('disenoGraficoGaleria1').onmouseover = function()        
{        
    document.getElementById('descripcionBg1').style.animation = "descripcion__hover 0.5s ease forwards";
    document.getElementById('descripcionTexto1').style.animation = "descripcion__hoverTexto 0.5s ease forwards";
};

document.getElementById('disenoGraficoGaleria1').onmouseout = function()        
{        
    document.getElementById('descripcionBg1').style.animation = "descripcion__hover 0.5s ease reverse forwards";
    document.getElementById('descripcionBg1').style.width = "0%";
    document.getElementById('descripcionTexto1').style.animation = "descripcion__hoverTexto 0.5s ease reverse forwards";

};
