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

/* 
4.2.6 Capture Form field Values 
1. Target the HTML elements with the pertinent data.
2. Read and store the content that those elements hold.
3. Use that content to create a new task.
*/

  

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

  var createTaskHandler = function(event) {
    event.preventDefault()
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput)
    
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div")
    // give it a class name
    taskInfoEl.className="task-info";
    // add html to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput +  "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
  }

  //creating a click event listener to the createTaskHandler function
  formEl.addEventListener("submit", createTaskHandler);


  /* 
  Additional notes

  use console.dir to see the form's elements in the console
  */