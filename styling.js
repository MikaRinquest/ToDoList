// Creating the Array
let objectives = JSON.parse(localStorage.getItem("tasks"))
  ? JSON.parse(localStorage.getItem("tasks"))
  : [
      {
        id: 1,
        item: "TV Stand",
        createdDate: new Date(),
        completed: false,
      },
    ];

// Looping the array
function showItems(objectives) {
  document.querySelector("#list").innerHTML = "";
  objectives.forEach((items) => {
    console.log(items);
    document.querySelector("#list").innerHTML += `
        <li class="list-item">
            <input type="checkbox">
                   <h3 id="content"> ${items.item}</h3>
              </input>
              <div class="hide">
                <button class="delete" onclick="deleteTask()"><i class="fa-solid fa-trash-can"></i></button>
                 <i class="fa-solid fa-pen" onclick="editBtn()"></i>
              </div>
                    </li>
        `;
  });
}

// Show array in HTML
showItems(objectives);

// Add to local storage function
function addToStorage(objectives) {
  localStorage.setItem("tasks", JSON.stringify(objectives));
}

// Add task
function addTask() {
  const id = objectives.length + 1;
  const item = document.querySelector("#task").value;
  const createDate = new Date();
  const completed = false;
  newObject = { id, item, createDate, completed };
  objectives.push(newObject);
  console.log(objectives);
  addToStorage(objectives);
  showItems(objectives);
  document.querySelector("#task").value = " ";
}

// Editing a task 
let edit = document.getElementById("content"); //Chooses what can be edited
function editBtn() {
edit.contentEditable = true; //states the the selected can be edited
edit.style.backgroundColor = "mediumorchid" // changes background to show it can be edited
}

// Warning, currently only affects the first item in a list

// Delete a task

function deleteTask() {
  const id = objectives.indexOf(name);
  const removeTask = objectives.splice(id,1);
  addToStorage(objectives);
  showItems(objectives);
}

// Sort
function sortAsc() {
  objectives.sort((a,b) => {
    if (a.item.toLowerCase() < b.item.toLowerCase()) {
      return -1;
    }
    if (a.item.toLowerCase() > b.item.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  showItems(objectives);
}

function sortDesc() {
  objectives.sort((a,b) => {
    if (b.item.toLowerCase() < a.item.toLowerCase()) {
      return -1;
    }
    if (b.item.toLowerCase() > a.item.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  showItems(objectives);
}


