// Creating the Array
const objectives = [
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
        <li class="list-item">${items.item}</li>
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
  showItems(objectives);
  console.log(objectives);
}
