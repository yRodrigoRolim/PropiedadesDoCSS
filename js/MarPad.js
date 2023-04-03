function MarPad(){
var Mtop = document.getElementById("Margintop").value;
var Mleft = document.getElementById("Marginleft").value;
var Mbottom = document.getElementById("Marginbottom").value;
var Mright = document.getElementById("Marginright").value;

// Margin
var Ptop = document.getElementById("Paddingtop").value;
var Pleft = document.getElementById("Paddingleft").value;
var Pbottom = document.getElementById("Paddingbottom").value;
var Pright = document.getElementById("Paddingright").value;

// Padding
document.getElementById("output1").value = Mtop;
document.getElementById("output2").value = Mleft;
document.getElementById("output3").value = Mbottom;
document.getElementById("output4").value = Mright;
document.getElementById("output5").value = Ptop;
document.getElementById("output6").value = Pleft;
document.getElementById("output7").value = Pbottom;
document.getElementById("output8").value = Pright;
// Output
var div = document.getElementById("div-principal");

// Margin
div.style.marginTop = Mtop + "px";
div.style.marginLeft = Mleft + "px";
div.style.marginBottom = Mbottom + "px";
div.style.marginRight = Mright + "px";
// Padding
div.style.paddingTop = Ptop + "px";
div.style.paddingLeft = Pleft + "px";
div.style.paddingBottom = Pbottom + "px";
div.style.paddingRight = Pright + "px";

console.log(Mtop +","+ Mleft +","+ Mbottom +","+ Mright);
console.log(Ptop +","+ Pleft +","+ Pbottom +","+ Pright);
}