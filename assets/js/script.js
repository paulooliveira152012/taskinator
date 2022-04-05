var taskIdCounter = 0;
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var pageContentEl = document.querySelector("#page-content");


var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name'").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if inputs are empty (validate)
  if (taskNameInput === "" || taskTypeInput === "") {
    alert("You need to fill out the task form!");
    return false;
  }
  
  formEl.reset();

  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;

  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // add task id as a custom attribute
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  var taskActionsEl = createTaskActions(taskIdCounter);
  listItemEl.appendChild(taskActionsEl);
  
  tasksToDoEl.appendChild(listItemEl);

  // increase task counter for next unique id
  taskIdCounter++;
};

//task Id id is how we will pass different ids into the function each time 
var createTaskActions = function(taskId) {
// create new divs 
var actionContainerEl = document.createElement("div");
actionContainerEl.className = "task-actions";

// create edit button
var editButtonEl = document.createElement("button");
editButtonEl.textContent = "Edit";
editButtonEl.className = "btn edit-btn";
editButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(editButtonEl);

// create delete button
var deleteButtonEl = document.createElement("button");
deleteButtonEl.textContent = "Delete";
deleteButtonEl.className = "btn delete-btn";
deleteButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(deleteButtonEl);

var statusSelectEl = document.createElement("select");
statusSelectEl.className = "select-status";
statusSelectEl.setAttribute("name", "status-change");
statusSelectEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(statusSelectEl);

var statusChoices = ["To Do", "In Progress", "Completed"];

for (var i = 0; i < statusChoices.length; i++) {
  // create option element
  var statusOptionEl = document.createElement("option");
  statusOptionEl.textContent = statusChoices[i];
  statusOptionEl.setAttribute("value", statusChoices[i]);

  // append to select
  statusSelectEl.appendChild(statusOptionEl);
}

return actionContainerEl;
};


formEl.addEventListener("submit", taskFormHandler);

//function a --> targeting the element which has been triggered by an event
var taskButtonHandler = function(event) { //the event object listens to the event itself(click) in the nested elements
  // get target element from event
  var targetEl = event.target;

  // edit button was clicked
  if (targetEl.matches(".edit-btn")) {
    var taskId = targetEl.getAttribute("data-task-id");
    editTask(taskId);
  } 
  // delete button was clicked
  else if (targetEl.matches(".delete-btn")) {
    var taskId = targetEl.getAttribute("data-task-id");
    deleteTask(taskId);
  }
};



//reference to function a
pageContentEl.addEventListener("click", taskButtonHandler);


//function b --> deletion of task (called in the taskButtonHandler function)
var deleteTask = function(taskId) {
  //selects the id of the element
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
  //delets the element
  taskSelected.remove();
};

//function c --> edeting a task
var editTask = function(taskId) {
  // get task list item element
var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
// get content from task name and type
var taskName = taskSelected.querySelector("h3.task-name").textContent;
document.querySelector("input[name='task-name']").value = taskName;
var taskType = taskSelected.querySelector("span.task-type").textContent;
document.querySelector("select[name='task-type']").value = taskType;
//including the task's id in edit mode
formEl.setAttribute("data-task-id", taskId);
};

//Making it clear that the task is in edit mode
document.querySelector("#save-task").textContent = "Save Task";

