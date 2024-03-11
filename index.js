// import {add} from './function.js';
// console.log(add(1,1));
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://playground-e13f9-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
console.log(db);
const reference = ref(db, "shoppingList/");
// set(PushElement, 'Movie1');

const btn = document.getElementById("add-button");
const element = document.getElementById("input-field");

btn.addEventListener("click", function () {
  // the database connection part
  let inputValue = element.value;
  if (inputValue === "") {
    alert("Please enter a value");
    return;
  }
  push(reference, inputValue);
  alert("Item added to list");
  //************************************************//

  //The list append part
//   append(inputValue);

  //clear the input field after adding the item
  clearInput();

});
onValue(reference, function (snapshot) {
    if(snapshot.exists()){
        clearList();
        let shoppingListArray = Object.entries(snapshot.val());
        console.log(snapshot.val());
        shoppingListArray.forEach(function (item) {
            let currentValue = item;
            append(currentValue);
        });
    }else{
        element.innerText = "No data available"; 
    }
});

//The list append part
let append = function (inputValue) {
    let id = inputValue[0];
    let value = inputValue[1];
    const ul = document.getElementById("shopping-list");
    let item = document.createElement("li");
    item.innerText = value;
    ul.appendChild(item);
    item.addEventListener('click',function(){
        let ExactLocationInDb = ref(db, `shoppingList/${id}`);
        let parent = item.parentNode;
        let child = item;
        parent.removeChild(child);
        remove(ExactLocationInDb);
    })
};

//clear the input field after adding the item
let clearInput = function () {
  element.value = "";
};

let clearList = function () {
  const ul = document.getElementById("shopping-list");
  ul.innerHTML = "";
};
