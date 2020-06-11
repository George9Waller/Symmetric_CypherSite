function cypherVernam()
{
    let s = document.getElementById("vernamTxt").value;
    let key = generateKey(s);
    let result = "";

    for (let i = 0; i < s.length; i++)
    {
        let newC = String.fromCharCode(s.charCodeAt(i) ^ key.charCodeAt(i));
        if (newC.charCodeAt(0) < 33) {newC = String.fromCharCode(176 + newC.charCodeAt(0));}
        result += newC;
    }
    document.getElementById("vernamVal").innerText = key;
    document.getElementById("originalTxt").innerText = s;
    document.getElementById("newTxt").innerText = result;
    let element = document.getElementById("originalTxt");
    element.scrollIntoView();

    makeGraphs();
}

function deCypherVernam()
{
    let s = document.getElementById("vernamTxt").value;
    let key = document.getElementById("vernamVal").value;
    let result = "";

    for (let i = 0; i < s.length; i++)
    {
        let inputCode = s.charCodeAt(i);
        if (s.charCodeAt(i) > 127) {inputCode = s.charCodeAt(i) - 176;}
        let newC = String.fromCharCode(inputCode ^ key.charCodeAt(i));
        //console.log(`${inputCode} XOR ${key.charCodeAt(i)} = ${newC.charCodeAt(0)} (${newC})`);
        result += newC;
        //console.log(newC.charCodeAt(0));
    }
    document.getElementById("originalTxt").innerText = s;
    document.getElementById("newTxt").innerText = result;
    scrollToOriginal();

    makeGraphs();
}

function generateKey(string)
{
    let output = "";
    for (let i = 0; i < string.length; i++)
    {
        output += String.fromCharCode(33 + Math.floor(Math.random() * 93))
    }
    return output;
}

function scrollToOriginal()
{
    let element = document.getElementById("originalTxt");
    element.scrollIntoView();
}