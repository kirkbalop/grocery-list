// DOM Selectors
const groceryAdd = document.querySelector('#add-input')
const addBtn = document.querySelector('.add-submit')
const groceryList = document.querySelector('#list')
const clearBtn = document.querySelector('.display-clear')

addBtn.addEventListener('click', addToList)

function addToList(event){
    event.preventDefault()
    let value = groceryAdd.value
    if(value === ''){
        alert('please include a valid entry')
    } else {
        let entry = document.createElement('li')
        entry.textContent = value
        groceryList.appendChild(entry)
    }
}