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
  objectives.forEach((objective) => {
    console.log(objective);
    document.querySelector("#list").innerHTML += `
        <li class="list-item">
            <input type="checkbox">
                   <h3 id="content"> ${objective.item}</h3>
              </input>
              <div class="hide">
                <button class="delete" onclick="deleteTask(${objective.id})"><i class="fa-solid fa-trash-can"></i></button>
                 <i class="fa-solid fa-pen" onclick="editBtn(${objective.id})"></i>
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
function editBtn(id) {
  let objective = objectives.find((objective) => objective.id === id); //Finds the id of button that was clicked
  let input = prompt("Input Changes"); //Allows the user to input their own changes
  objective.item = input; //Changes the content to what the user's input
  addToStorage(objectives); //Adds to local storage
  showItems(objectives); //Displays array
}

// Jason delete
function deleteTask(id) {
  objectives = objectives.filter((item) => {
    //Goes through the array and filters out every id that is equal to the selected one
    return item.id !== id; //Returns all objects in the array that is not the same id as the selected one
  });
  addToStorage(objectives); // Adds to local storage
  showItems(objectives); //Displays the array
}

// Sort
function sortAsc() {
  objectives.sort((a, b) => {
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
  objectives.sort((a, b) => {
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
