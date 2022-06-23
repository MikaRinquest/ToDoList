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
                <label>
                    ${items.item}
                </
                label>
            </input>
            <i class="fa-solid fa-trash-can" onclick="delete()"></i>
            
        </li>
        `;
  });
}

// Show array in HTML
showItems(objectives);

// Add task
function addTask() {
  let id = objectives.length + 1;
  let item = document.querySelector("#task").value;
  newObject = { id, item };
  objectives.push(newObject);
  console.log(objectives);
  localStorage.setItem("tasks", JSON.stringify(objectives));
  showItems(objectives);
}

// // Load Data
// function loadData() {
//   console.log(objectives);
// }
// // loadData();
