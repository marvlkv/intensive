console.log("Скрипт запущен")
alert("Точно")
const habit = {
    name: '',
    description: '',
    frequency: 0,
    count: 0,
    sum: 0
}
const nameMeta = {
    selector: document.querySelector('#habit-name'),
    handler:(ev) => {
        habit.name = ev.target.value;
        console.log(habit.name);
    }
}
const descriptionMeta = {
    selector: document.querySelector('#description'),
    handler:(ev) => {
        habit.description = ev.target.value;
        console.log(habit.description);
    }
}
const frequencyMeta = {
    selector: document.querySelector('#frequency'),
    handler:(ev) => {
        habit.frequency = ev.target.value;
        console.log(habit.frequency);
    }
}
const countMeta = {
    selector: document.querySelector('#count'),
    handler:(ev) => {
        habit.count = ev.target.value;
        console.log(habit.count);
    }
}
const sumMeta = {
    selector:document.querySelector('#sum'),
    handler:(ev) => {
        habit.sum = ev.target.value;
        console.log(habit.sum);
    }
}

const metaData = [nameMeta, descriptionMeta,frequencyMeta,countMeta];
for(const {selector, handler} of metaData){
    if(selector.tagName.toLowerCase()=='select'){
        selector.addEventListener('cange',handler)
    }
    else{
        selector.addEventListener('input',handler)
    }
}

// let name = '';
// let description = '';
// let frequency = 0;
// let count = 0;
// let sum = 0;

// const nameInput = document.querySelector('#habit-name');
// const descriptionInput =  document.querySelector('#description');
// const frequencySelect = document.querySelector('#frequency');
// const countInput = document.querySelector('#count');
// const sumElement = document.querySelector('#sum');

// console.log(nameInput,descriptionInput,frequencySelect,countInput,sumElement);

function nameInputHandler(ev){
    name= ev.target.value;
    console.log(name);
}
// nameInput.addEventListener('input','nameInputHandler');

function descriptionInputHandler(ev){
    description = ev.target.value;
    console.log(description);
}
// descriptionInput.addEventListener('input', descriptionInputHandler);

const sumElement = document.querySelector('#sum');
function setSum(ev){
    habit.sum = habit.frequency * habit.count;
    sumElement.textContent = habit.sum.toString();
}
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
// frequencySelect.addEventListener('change',frequencyChange)

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

// countInput.addEventListener('input',countInputHandler)

const formElem = document.querySelector('form');
formElem.addEventListener('submit',(ev) => {
    ev.preventDefault();
    for(const key in habit){
        console.log(habit.key,habit[key]);
    }
    console.log(JSON.stringify(habit));
});