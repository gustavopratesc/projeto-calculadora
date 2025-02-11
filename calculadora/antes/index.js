
function outcome() {

    let num1 = Number(document.querySelector('#num-one').value)
    let num2 = Number(document.querySelector('#num-two').value)
    let total = 0

    if (document.querySelector("#box1").checked) {
        total = num1 + num2
    } else if (document.querySelector("#box2").checked) {
        total = num1 - num2
    } else if (document.querySelector("#box3").checked) {
        total = num1 * num2
    } else {
        total = num1 / num2
    }
    document.querySelector("#resultArea").innerHTML = 'Result: ' + String(total)
}