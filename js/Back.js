function changeColor(){
    var divcolor = document.getElementById("background-color-div");
    var Bred = document.getElementById("rangeInput").value;
    var Bgreen = document.getElementById("rangeInput2").value;
    var Bblue = document.getElementById("rangeInput3").value;
    var rgb = `rgb(${Bred},${Bgreen},${Bblue})`;
    divcolor.style.backgroundColor = rgb;
    divcolor.innerHTML = rgb;
    console.log(divcolor);
    document.getElementById("output").value = Bred;
    document.getElementById("output1").value = Bgreen;
    document.getElementById("output2").value = Bblue;
}
function changeColorinput(){
    var input = document.getElementById("color-back").value;
    var divcolor = document.getElementById("background-color-div");
    divcolor.style.backgroundColor = input;
    divcolor.innerHTML = input;
}
