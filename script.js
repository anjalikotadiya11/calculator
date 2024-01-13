var result = document.getElementById("result");

function display(number) {
    
    if (number === '.' && result.value.includes('.')) {
        return; 
    }
    result.value += number;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

function clearResult() {
    result.value = "";
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}
var result = document.getElementById("result");




