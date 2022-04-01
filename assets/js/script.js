// // getting button id and creating a variable for it
// var buttonEl = document.querySelector("#save-task");
// var tasksToDoEl = document.querySelector("#tasks-to-do");

// //creating a click event listener to the button variable to create an alert
// buttonEl.addEventListener("click", function() {
//   //create a list item element
//   var listItemEl = document.createElement("li");
//   //give this list item the class for styling
//   listItemEl.className = "task-item";
//   //give this list item a text content
//   listItemEl.textContent = "This is a new task.";
//   //append this list item to the parent refferenced by the variable "taskToDoEl" in this case, the Ul.
//   tasksToDoEl.appendChild(listItemEl);
//   });


  

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

  var createTaskHandler = function(event) {

    event.preventDefault()

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }

  //creating a click event listener to the createTaskHandler function
  formEl.addEventListener("submit", createTaskHandler);
