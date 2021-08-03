// DOM Selectors
const groceryAdd = document.querySelector('#add-input')
const addBtn = document.querySelector('.add-submit')
const groceryList = document.querySelector('#list')
const clearBtn = document.querySelector('.display-clear')
const category = document.querySelector('#grocery-category')
const catList = document.querySelector('#cat-list')

// Event Listeners
addBtn.addEventListener('click', addToList)
clearBtn.addEventListener('click', clearList)

// Global Variables
const storage = window.localStorage

// localStorage Arrays
let meats = []
let produce = []
let beverage = []
let alcohol = []

// functions
function addToList(event){
    event.preventDefault()
    let value = groceryAdd.value
    let cat = category.value
    if(value === ''){
        alert('please include a valid entry')
    } else {
        let entry = document.createElement('li')
        entry.textContent = value
        groceryList.appendChild(entry)
    }
    if(cat === ''){
        alert('Please choose a category from the dropdown')
    }else if(cat === 'meat'){
        meats.push(value)
        storage.setItem('meats', meats)
    } else if(cat === 'produce'){
        produce.push(value)
        storage.setItem('produce', produce)
    } else if(cat === 'beverage'){
        beverage.push(value)
        storage.setItem('beverage', beverage)
    } else if (cat === 'alcohol'){
        alcohol.push(value)
        storage.setItem('alcohol', alcohol)
    }
}

function clearList(event){
    list.innerHTML = ''
    storage.clear()
}

// function pageLoad(){
//     let meats = JSON.parse(meats)
// }