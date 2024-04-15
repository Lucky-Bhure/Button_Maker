let input1El = document.getElementById("input1");
let input2El = document.getElementById("input2");
let input3El = document.getElementById("input3");
let input4El = document.getElementById("input4");
let input5El = document.getElementById("input5");
let input6El = document.getElementById("input6");
let customEl = document.getElementById("custom");

function apply(){
    let backcolor = (input1El.value);
    let fontcolor = (input2El.value);
    let fontsize = (input3El.value);
    let fontweight = (input4El.value);
    let padding = (input5El.value);
    let bradius = (input6El.value);

    customEl.style.backgroundColor = backcolor;
    customEl.style.color = fontcolor;
    customEl.style.fontSize = fontsize;
    customEl.style.fontWeight = fontweight;
    customEl.style.padding =padding;
    customEl.style.borderRadius = bradius;
}