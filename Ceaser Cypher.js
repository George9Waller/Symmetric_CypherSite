function copyText(id)
{
    let range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}

function cypher() {
    let input = document.getElementById("cesarTxt").value.toLowerCase();
    let shift = document.getElementById("cesarVal").value;
    let result = "";

    for (let i = 0; i < input.length; i++)
    {
        let ascii = input.charCodeAt(i);
        ascii = addAscii(ascii, parseInt(shift));
        result += String.fromCharCode(ascii)
    }

    document.getElementById("originalTxt").innerText = input;
    document.getElementById("newTxt").innerText = result;
    scrollToOriginal();

    makeGraphs();
}

function deCypher()
{
    let input = document.getElementById("cesarTxt").value.toLowerCase();
    let shift = document.getElementById("cesarVal").value;
    let result = "";

    for (let i = 0; i < input.length; i++)
    {
        let ascii = input.charCodeAt(i);
        ascii = subAscii(ascii, parseInt(shift));
        result += String.fromCharCode(ascii)
    }

    document.getElementById("originalTxt").innerText = input;
    document.getElementById("newTxt").innerText = result;
    scrollToOriginal();

    makeGraphs();
}

function addAscii(startingValue, shiftValue) {
    if (startingValue < 97 || startingValue > 122) {return startingValue;}
    let shifting = true;

    while (shifting)
    {
        if (shiftValue > 25) {shiftValue = shiftValue - 26;}
        else {shifting = false;}
    }

    let result = startingValue + shiftValue;
    if (result > 122) {result = result - 26;}
    //else if(result < 97) {result = 97 + (Math.floor(Math.random() * 26));}
    console.log(result);
    return result;
}

function subAscii(startingValue, shiftValue)
{
    let shifting = true;

    while (shifting)
    {
        if (shiftValue > 25) {shiftValue = shiftValue - 26;}
        else {shifting = false;}
    }

    let result = startingValue - shiftValue;
    if (result < 97) {result = result + 26;}
    //else if(result > 122) {result = 122 - (Math.floor(Math.random() * 26));}
    console.log(result);
    if (result < 97 || result > 122) {return startingValue;}
    return result;
}


function makeGraphs() {
    let originalTxt = document.getElementById("originalTxt").innerHTML;
    let newTxt = document.getElementById("newTxt").innerHTML;

    let dataoriginal = frequencyAnalysis(originalTxt);
    let datanew = frequencyAnalysis(newTxt);

    var ctx = document.getElementById('originalgraph').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                    't', 'u', 'v', 'w', 'x', 'y', 'z'],
            datasets: [{
                label: 'Original',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: dataoriginal
            },
                {
                    label: 'New',
                    backgroundColor: 'rgb(119, 221, 119)',
                    borderColor: 'rgb(119, 221, 119)',
                    data: datanew
                }]
        },

        // Configuration options go here
        options: {}
    });
}

function frequencyAnalysis(frequencyString) {
    let result = new Array(26);
    for (let k = 0; k < result.length; k++)
    {
        result[k] = 0;
        //console.log(result[k])
    }

    for (let i = 0; i < frequencyString.length; i++) {
        let value = frequencyString.charCodeAt(i) - 97;
        if (isNaN(result[value])) {result[value] = 0}
        result[value] += 1
    }
    return result;
}