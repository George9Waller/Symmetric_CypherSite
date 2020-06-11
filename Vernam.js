function cypherVernam()
{
    let s = document.getElementById("vernamTxt").value;
    let key = generateKey(s);
    let result = "";

    for (let i = 0; i < s.length; i++)
    {

        console.log(s.charCodeAt(i) ^ key.charCodeAt(i));
        result += String.fromCharCode(s.charCodeAt(i) ^ key.charCodeAt(i))
    }
    document.getElementById("vernamVal").innerText = key;
    document.getElementById("originalTxt").innerText = s;
    document.getElementById("newTxt").innerText = result;

    makeGraphs();
}

function deCypherVernam()
{
    let s = document.getElementById("vernamTxt").value;
    let key = document.getElementById("vernamVal").value;
    let result = "";

    for (let i = 0; i < s.length; i++)
    {
        console.log(String.fromCharCode(s.charCodeAt(i) ^ key.charCodeAt(i)));
        result += String.fromCharCode(s.charCodeAt(i) ^ key.charCodeAt(i))
    }
    document.getElementById("originalTxt").innerText = s;
    document.getElementById("newTxt").innerText = result;

    makeGraphs();
}

function generateKey(string)
{
    let output = "";
    for (let i = 0; i < string.length; i++)
    {
        output += String.fromCharCode(33 + Math.floor(Math.random() * 94))
    }
    return output;
}