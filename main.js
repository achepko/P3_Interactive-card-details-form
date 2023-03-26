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
    // errorSpan.classList.remove("grid");
    let regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
    nameDiv.appendChild(errorSpan);
    if (regex.test(e.target.value)) {
        cardname.textContent = e.target.value;
        nameDiv.removeChild(errorSpan)
    } else {
        errorSpan.innerText = "InCorrect name"
    }
})
numInput.addEventListener("keyup", (e) => {
    let regex = /^[0-9]+$/g
    let split4 = /.{1,4}/g
    let val = e.target.value.split(" ").join('')
    e.target.value = val.match(split4).join(" ")
    numDiv.appendChild(errorSpan);
    if (regex.test(val) && val.length <= 16) {
        cardnum.textContent = val.match(split4).join(" ");
        numDiv.removeChild(errorSpan);
    } else {
        errorSpan.innerText = "Incorrect Card Number"
    }
})
monthInput.addEventListener('keyup', (e) => {
    dateDive.appendChild(errorSpan);
    if (parseInt(e.target.value) && parseInt(e.target.value) >= 1 && parseInt(e.target.value) <= 12 && e.target.value.match(/(\d)/g).length === e.target.value.length) {
        e.target.value.length < 2 && parseInt(e.target.value) < 10 ? cardmonth.textContent = `0${e.target.value}` : cardmonth.textContent = e.target.value
        dateDive.removeChild(errorSpan);
    } else {
        errorSpan.innerText = "InCorrect Month";
    }
})
yearInput.addEventListener('keyup',(e)=>{
    dateDive.appendChild(errorSpan);
    let currentYear = new Date().getFullYear()-2000;
    if (parseInt(e.target.value) && parseInt(e.target.value) >= currentYear && e.target.value.match(/(\d)/g).length === e.target.value.length){
        e.target.value.length < 2 && parseInt(e.target.value) < 10 ? cardyear.innerText = `0${e.target.value}` : cardyear.innerText = e.target.value
        dateDive.removeChild(errorSpan);
    } else {
        errorSpan.innerText = "InCorrect Year Or Expired Year";
    }
})
cvcInput.addEventListener('keyup',(e)=>{
    cvcDiv.appendChild(errorSpan);
    if (parseInt(e.target.value) && e.target.value.match(/(\d)/g).length === e.target.value.length){
        e.target.value.length < 2 && parseInt(e.target.value) < 10 ? cardcvc.innerText = `0${e.target.value}` : cardcvc.innerText = e.target.value
        cvcDiv.removeChild(errorSpan);
    }else {
        errorSpan.innerText = "InCorrect CVC";
    }
})
confirmBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if (nameInput.value !== '' && numInput.value !== '' && monthInput.value !== '' && yearInput.value !== '' && cvcInput.value !== ''){
        thanksDiv.classList.remove('none');
        form.classList.add('none');
    }else{
        if (nameInput.value === ''){
            nameDiv.appendChild(errorSpan);
            errorSpan.innerText = "Can't be blank"
            nameInput.focus();
        }
        if (numInput.value === ''){
            numDiv.appendChild(errorSpan);
            errorSpan.innerText = "Can't be blank"
            numInput.focus();
        }
        if (monthInput.value === ''){
            dateDive.appendChild(errorSpan);
            errorSpan.innerHTML = `<div>Can't be blank</div>`;
            monthInput.focus();
        }
        if (yearInput.value ===''){
            dateDive.appendChild(errorSpan);
            errorSpan.innerHTML = `<div>Can't be blank</div>`;
            yearInput.focus();
        }
        if (cvcInput.value ===''){
            cvcDiv.appendChild(errorSpan);
            errorSpan.innerText = "Can't be blank";
            cvcInput.focus();
        }
    }
})

contBtn.addEventListener('click',(e)=>{
    form.reset();
    cardname.innerText = "Jane Appleseed"
    cardnum.innerText = "0000 0000 0000 0000"
    carddate.innerHTML = "<span>00</span>/<span>00</span>"
    cardcvc.innerText = "000"
    form.classList.remove("none")
    thanksDiv.classList.add("none")
})