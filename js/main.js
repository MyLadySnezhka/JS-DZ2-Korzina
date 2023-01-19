const nameCart = document.querySelector('h1');
const selectCurrency = document.querySelector('.currency_select');

// const btnInc = document.querySelectorAll('.butinc');
// const btnDec = document.querySelectorAll('.butdec');
// const itemNum = document.querySelectorAll('.item_num');
// const itemPrice = document.querySelectorAll('.item_pr');
// const itemSum = document.querySelectorAll('.item_sum');

const btnInc = document.querySelector('.butinc');
const btnDec = document.querySelector('.butdec');
const itemNum = document.querySelector('.item_num');
const itemPrice = document.querySelector('.item_pr');
const itemSum = document.querySelector('.item_sum');

let num = 1;

let itemPr = 0;

nameCart.addEventListener('mouseenter', () => {
    nameCart.innerHTML = 'Замовляйте!';
})

selectCurrency.addEventListener('change', (ev) => {
    let curr = ev.target.value;
    if (curr === 'usd') {itemSum.innerHTML = itemPr*itemNum.value*20};
    if (curr === 'eur') {itemSum.innerHTML = itemPr*itemNum.value*10};
    if (curr === 'grn') {itemSum.innerHTML = itemPr*itemNum.value};
})

btnDec.addEventListener('click', (ev) => {
    num = num - 1;
    if (num > 0) {
    itemNum.value = num;
    itemSum.innerHTML = num*itemPr;
    }
    else {
        itemNum.value = 0;
        itemSum.innerHTML = 'Недостатня кількість товарів!';
        num = 0;
        return;
        };
})

btnInc.addEventListener('click', () => {
    num = num + 1;
    itemNum.value = num;
    itemSum.innerHTML = num*itemPr;
})

itemPrice.addEventListener('change', (ev) => {
    itemPr = ev.target.value;
    itemSum.innerHTML = itemPr*itemNum.value;
})