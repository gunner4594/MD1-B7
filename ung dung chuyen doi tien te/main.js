function doi() {
    let amountMoney = +document.getElementById('money').value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    let result = 0;
    if(select1 === 'VND' && select2 === 'USD'){
        result = amountMoney/23000;
    }
    document.getElementById('result').innerHTML = 'Kết quả: ' + result;
    if(select1 === 'USD' && select2 === 'VND') {
        result = amountMoney * 23000;
        document.getElementById('result').innerHTML = 'Kết quả: ' + result;
    }
}
