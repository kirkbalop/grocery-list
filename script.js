// DOM Selectors
const groceryAdd = document.querySelector("#add-input");
const addBtn = document.querySelector(".add-submit");
const groceryList = document.querySelector("#list");
const clearBtn = document.querySelector(".display-clear");
const category = document.querySelector("#grocery-category");
const catList = document.querySelector("#cat-list");
const listItems = list.childNodes;

// Event Listeners
addBtn.addEventListener("click", addToList);
clearBtn.addEventListener("click", clearList);

// Global Variables
const storage = window.localStorage;

// localStorage Arrays
let meats = [];
let produce = [];
let beverage = [];
let alcohol = [];

// Functions
function addToList(event) {
  event.preventDefault();
  let value = groceryAdd.value;
  let cat = category.value;
  let span = document.createElement("span");
  let innerSpan = document.createElement("i");
  span.innerHTML = innerSpan;
  innerSpan.classList.add("far", "fa-trash-alt");

  if (value === "" || cat === "") {
    alert("please include a valid entry");
  } else {
    let entry = document.createElement("li");
    entry.classList.add(cat);
    entry.innerHTML = span;
    entry.textContent = value;
    groceryList.appendChild(entry);
  }

  if (cat === "meat") {
    meats.push(value);
    storage.setItem("meats", JSON.stringify(meats));
  } else if (cat === "produce") {
    produce.push(value);
    storage.setItem("produce", JSON.stringify(produce));
  } else if (cat === "beverage") {
    beverage.push(value);
    storage.setItem("beverage", JSON.stringify(beverage));
  } else if (cat === "alcohol") {
    alcohol.push(value);
    storage.setItem("alcohol", JSON.stringify(alcohol));
  }
}

function clearList(event) {
  list.innerHTML = "";
  storage.clear();
}

// Restore from localStorage upon refresh
function pageLoad() {
  // Parse arrays from localStorage strings
  let meatRestore = JSON.parse(storage.getItem("meats"));
  let produceRestore = JSON.parse(storage.getItem("produce"));
  let beverageRestore = JSON.parse(storage.getItem("beverage"));
  let alcoholRestore = JSON.parse(storage.getItem("alcohol"));

  function restoreList() {
    // iterate over arrays to repopulate list
    meatRestore.forEach((meat) => {
      let entry = document.createElement("li");
      entry.textContent = meat;
      groceryList.appendChild(entry);
      entry.classList.add("meat");
    });

    produceRestore.forEach((veg) => {
      let entry = document.createElement("li");
      entry.textContent = veg;
      groceryList.appendChild(entry);
      entry.classList.add("produce");
    });

    beverageRestore.forEach((bev) => {
      let entry = document.createElement("li");
      entry.textContent = bev;
      groceryList.appendChild(entry);
      entry.classList.add("beverage");
    });

    alcoholRestore.forEach((alc) => {
      let entry = document.createElement("li");
      entry.textContent = alc;
      groceryList.appendChild(entry);
      entry.classList.add("alcohol");
    });
  }
  restoreList();
}
pageLoad();
