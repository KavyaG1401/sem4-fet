function whileLoop() {

    let i = 1;
    let result = "";

    while (i <= 5) {
        result += i + " ";
        i++;
    }

    document.getElementById("whileOutput").innerHTML =
        "While Loop Output: " + result;
}

function doWhileLoop() {

    let j = 1;
    let result = "";

    do {
        result += j + " ";
        j++;
    }
    while (j <= 5);

    document.getElementById("doOutput").innerHTML =
        "Do While Loop Output: " + result;
}
