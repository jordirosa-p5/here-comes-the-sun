function desplega() {
    let panell1 = document.getElementById("color1");
    let panell2 = document.getElementById("color2");
    let panell3 = document.getElementById("color3");
    let panell4 = document.getElementById("color4");
    let panell5 = document.getElementById("color5");

    let espai = 100;
    panell1.style.bottom = espai * 5 - 250 + "px";
    panell2.style.bottom = espai * 4 - 250 + "px";
    panell3.style.bottom = espai * 3 - 250 + "px";
    panell4.style.bottom = espai * 2 - 250 + "px";
    panell5.style.bottom = espai - 250 + "px";
     
    document.getElementById("titol").style.opacity = 1;
    document.getElementById("titol").style.bottom = "275px";
}

function plega() {
    let panell1 = document.getElementById("color1");
    let panell2 = document.getElementById("color2");
    let panell3 = document.getElementById("color3");
    let panell4 = document.getElementById("color4");
    let panell5 = document.getElementById("color5");

    panell1.style.bottom = "-250px";
    panell2.style.bottom = "-250px";
    panell3.style.bottom = "-250px";
    panell4.style.bottom = "-250px";
    panell5.style.bottom = "-250px";
    
    document.getElementById("titol").style.opacity = 0;
    document.getElementById("titol").style.bottom = "-250px";
}
