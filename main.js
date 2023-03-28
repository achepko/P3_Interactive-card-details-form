const form = document.querySelector(".formBlock");
let nameInput = document.querySelector("#name");
let numInput = document.querySelector("#number");
let monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");
let cvcInput = document.querySelector("#cvc");

const cardname = document.querySelector(".card-name");
const cardnum = document.querySelector(".card-num");
let carddate = document.querySelector(".card-date");
let cardmonth = document.querySelector('.card-month');
let cardyear = document.querySelector('.card-year');
const cardcvc = document.querySelector(".card-cvc");

const thanksDiv = document.querySelector(".thanks")
const nameDiv = document.querySelector(".name-div")
const numDiv = document.querySelector(".num-div")
const dateDive = document.querySelector(".date-div")
const cvcDiv = document.querySelector(".cvc-div")

let errorSpan = document.createElement("span")
errorSpan.classList.add("error");
// errorSpan.classList.remove("grid");

const confirmBtn = document.querySelector(".confirm");
const contBtn = document.querySelector("#cont");

nameInput.addEventListener("keyup", (e) => {
    nameDiv.appendChild(errorSpan);
    let regex = /^[a-zA-Z]+(([`',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    if (nameInput.value.length === 0) {
        cardname.innerHTML = 'Jane Appleseed';
        nameDiv.removeChild(errorSpan)
        nameInput.style.border = '1px solid #eee'
    } else {
        if (regex.test(e.target.value)) {
            cardname.textContent = nameInput.value;
            nameDiv.removeChild(errorSpan)
            nameInput.style.border = '1px solid #eee'
        } else {
            errorSpan.innerText = "Incorrect name"
            nameInput.style.border = '1px solid red'
        }
    }
})

numInput.addEventListener("keyup", (e) => {
    validater(numInput);
    function validater(input) {
        input.value = input.value.replace(/\D/g, '');
    }
    let regex = /^[0-9]+$/g
    let split4 = /.{1,4}/g
    let val = numInput.value.split(" ").join('')
    numDiv.appendChild(errorSpan);
    if (numInput.value.length === 0) {
        cardnum.innerHTML = '0000 0000 0000 0000';
        numDiv.removeChild(errorSpan);
        numInput.style.border = '1px solid #eee';
    } else {
        numInput.value = val.match(split4).join(" ")
        if (regex.test(val) && val.length === 16) {
            cardnum.textContent = val.match(split4).join(" ");
            numDiv.removeChild(errorSpan);
            numInput.style.border = '1px solid #eee'
        } else {
            errorSpan.innerText = "Incorrect Card Number"
            numInput.style.border = '1px solid red';
        }
    }
})
monthInput.addEventListener('keyup', (e) => {
    validater(monthInput);
    function validater(input) {
        input.value = input.value.replace(/\D/g, '');
    }
    dateDive.appendChild(errorSpan);
    if (monthInput.value.length === 0) {
        cardmonth.innerHTML = '00';
        dateDive.removeChild(errorSpan);
        monthInput.style.border = '1px solid #eee';
    } else {
        if (parseInt(e.target.value) && parseInt(e.target.value) >= 1 && parseInt(e.target.value) <= 12 && e.target.value.match(/(\d)/g).length === e.target.value.length) {
            e.target.value.length < 2 && parseInt(e.target.value) < 10 ? cardmonth.textContent = `0${e.target.value}` : cardmonth.textContent = e.target.value
            dateDive.removeChild(errorSpan);
            numInput.style.border = '1px solid #eee'
        } else {
            errorSpan.innerText = "Incorrect Month";
            monthInput.style.border = '1px solid red'
        }
    }
})
yearInput.addEventListener('keyup', (e) => {
    validater(yearInput);

    function validater(input) {
        input.value = input.value.replace(/\D/g, '');
    }

    dateDive.appendChild(errorSpan);
    let currentYear = new Date().getFullYear() - 2000;
    if (parseInt(e.target.value) && parseInt(e.target.value) >= currentYear && e.target.value.match(/(\d)/g).length === e.target.value.length) {
        e.target.value.length < 2 && parseInt(e.target.value) < 10 ? cardyear.innerText = `0${e.target.value}` : cardyear.innerText = e.target.value
        dateDive.removeChild(errorSpan);
    } else {
        errorSpan.innerText = "InCorrect Year Or Expired Year";
    }
})
cvcInput.addEventListener('keyup', (e) => {
    validater(cvcInput);

    function validater(input) {
        input.value = input.value.replace(/\D/g, '');
    }

    cvcDiv.appendChild(errorSpan);
    if (parseInt(e.target.value) && e.target.value.match(/(\d)/g).length === e.target.value.length) {
        e.target.value.length < 2 && parseInt(e.target.value) < 10 ? cardcvc.innerText = `0${e.target.value}` : cardcvc.innerText = e.target.value
        cvcDiv.removeChild(errorSpan);
    } else {
        errorSpan.innerText = "InCorrect CVC";
    }
})
confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (nameInput.value !== '' && numInput.value !== '' && monthInput.value !== '' && yearInput.value !== '' && cvcInput.value !== '') {
        thanksDiv.classList.remove('none');
        form.classList.add('none');
    } else {
        if (nameInput.value === '') {
            nameDiv.appendChild(errorSpan);
            errorSpan.innerText = "Can't be blank"
            nameInput.focus();
        }
        if (numInput.value === '') {
            numDiv.appendChild(errorSpan);
            errorSpan.innerText = "Can't be blank"
            numInput.focus();
        }
        if (monthInput.value === '') {
            dateDive.appendChild(errorSpan);
            errorSpan.innerHTML = `<div>Can't be blank</div>`;
            monthInput.focus();
        }
        if (yearInput.value === '') {
            dateDive.appendChild(errorSpan);
            errorSpan.innerHTML = `<div>Can't be blank</div>`;
            yearInput.focus();
        }
        if (cvcInput.value === '') {
            cvcDiv.appendChild(errorSpan);
            errorSpan.innerText = "Can't be blank";
            cvcInput.focus();
        }
    }
})

contBtn.addEventListener('click', (e) => {
    form.reset();
    cardname.innerText = "Jane Appleseed"
    cardnum.innerText = "0000 0000 0000 0000"
    carddate.innerHTML = "<span>00</span>/<span>00</span>"
    cardcvc.innerText = "000"
    form.classList.remove("none")
    thanksDiv.classList.add("none")
})