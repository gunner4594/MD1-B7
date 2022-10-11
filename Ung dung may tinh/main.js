
// function add () {
//     let number1 = +document.getElementById('number1').value;
//     let number2 = +document.getElementById('number2').value;
//     let cong = number1 + number2;
//     document.getElementById('result').innerHTML = 'Result: ' + cong;
// }
// function subtraction () {
//     let number1 = +document.getElementById('number1').value;
//     let number2 = +document.getElementById('number2').value;
//     let tru = number1 - number2;
//     document.getElementById('result').innerHTML = 'Result: ' + tru;
// }
// function multiplication () {
//     let number1 = +document.getElementById('number1').value;
//     let number2 = +document.getElementById('number2').value;
//     let nhan = number1*number2;
//     document.getElementById('result').innerHTML = 'Result: ' + nhan;
// }
// function division () {
//     let number1 = +document.getElementById('number1').value;
//     let number2 = +document.getElementById('number2').value;
//     let chia = number1/number2;
//     document.getElementById('result').innerHTML = 'Result: ' + chia;
// }
//

let result = ''

function xuLyDulieu(input) {
    let a = document.getElementById(input).value;
    result += a;
    document.getElementById('result').innerHTML = result;
}

function xuLyketQua () {
    let ketQua = eval(result);
    document.getElementById('result').innerHTML = ketQua;
    result = ketQua;
}

function xoa () {
    document.getElementById('result').innerHTML = '0';
    result = '';

}