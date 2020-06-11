function cypherPoly()
{
    let input = document.getElementById("polyTxt").value.toLowerCase();
    let shift = document.getElementById("polyVal").value;
    let result = "";
    let index = 0;

    for (let i = 0; i < input.length; i++)
    {
        let ascii = input.charCodeAt(i);
        //console.log(`input value ${ascii}, shiftcode ${shift.charCodeAt(index)}`);
        ascii = addAscii(ascii, shift.charCodeAt(index), false);
        result += String.fromCharCode(ascii);
        if(index += 1 > shift.length) {index = 0;}
        else{index += 1;}
    }

    document.getElementById("originalTxt").innerText = input;
    document.getElementById("newTxt").innerText = result;
    scrollToOriginal();

    makeGraphs();
}

function deCypherPoly()
{
    let input = document.getElementById("polyTxt").value.toLowerCase();
    let shift = document.getElementById("polyVal").value;
    let result = "";
    let index = 0;

    for (let i = 0; i < input.length; i++)
    {
        let ascii = input.charCodeAt(i);
        //console.log(`input value ${ascii}, shiftcode ${shift.charCodeAt(index)}`);
        ascii = subAscii(ascii, shift.charCodeAt(index), false);
        result += String.fromCharCode(ascii);
        if(index += 1 > shift.length) {index = 0;}
        else{index += 1;}
    }

    document.getElementById("originalTxt").innerText = input;
    document.getElementById("newTxt").innerText = result;
    scrollToOriginal();

    makeGraphs();
}