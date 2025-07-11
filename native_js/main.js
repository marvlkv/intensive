console.log("Скрипт запущен")
alert("Точно")

let name = '';
let description = '';
let frequency = 0;
let count = 0;
let sum = 0;

const nameInput = document.querySelector('#habit-name');
const descriptionInput =  document.querySelector('#description');
const frequencySelect = document.querySelector('frequency#');
const countInput = document.querySelector('#count');
const sumElement = document.querySelector('#sum');

console.log(nameInput,descriptionInput,frequencySelect,countInput,sumElement);

function nameInputHandler(ev){
    name= ev.target.value;
    console.log(name);
}
nameInput.addEventListener('input','nameInputHandler');

setSum();

function frequencyChange(ev){
    if(ev.target.value==undefined){
        frequency= 0;
    }
    else{
        frequency = parseInt(ev.target.value)
    }
    setSum();
    console.log(frequency);
}
frequencySelect.addEventListener('change',frequencyChange)


function countInputHandler(ev){
    if(ev.target.value==undefined){
        count= 0;
    }
    else{
        count = parseInt(ev.target.value)
    }
    setSum();
    console.log(count);
}

function setSum(){
    sum = frequency * count;
    sumElement.textContent = sum.toString();
}
countInput.addEventListener('input',countInputHandler)

const formElem = document.querySelector('form');
formElem.addEventListener('submit',(ev) => {
    ev.preventDefault();
    console.log(name,description,frequency,count,sum);
});