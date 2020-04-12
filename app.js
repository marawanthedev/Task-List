const form = document.querySelector("#task-from");

const tasklist = document.querySelector(".collection");

const clearBtn = document.querySelector(".clear-tasks");

const filter = document.querySelector("#filter");

const taskInput = document.querySelector("#task");



loadEventListners();
// loadall eventListeners

function loadEventListners() {

  // DOM LOAD EVENT

  document.addEventListener("DOMContentLoaded", getTasks);


  form.addEventListener("submit", addTask);

  // removeTask
  tasklist.addEventListener("click", removeTask);

  clearBtn.addEventListener("click", clearTasks);

  filter.addEventListener("keyup", filterTasks);
}

function addTask(e) {
  if (taskInput.value === "") {

    alert("Add a task ");

    // so what i am doing here is checking whether the the added task had a value or not
    // if it doesnt have a value i will alert the user to enter a value in order to add to his task list

  }
  if(taskInput.value!==""){
    const li = document.createElement("li");

    // this is creating an element of li which is gonna be lated appeneded to the ul of tasks
  
    // Add class;
    li.className = "collection-item";
    // giving it the class collection item bcs each ul has a class of collection and each li of that ul should have a class of collection-item
  
    // create textNode and append it to li
    li.appendChild(document.createTextNode(taskInput.value))
  
    // here i am appending a text node to the li element which is gonna be the added task by the user
    // so know i am appending a child node to that li which is gonna be the taskinput value
  
    // create newLinkk
  
    const link = document.createElement("a");
  
    // this is adding the x button at the end of the task in order to remove it if the user wishes to
  
    link.className = "delete-item secondary-content";
  
    // it should have a secondary content class in order to be displayed after its parent
    // Add icon
  
    link.innerHTML = "<i class='fa fa-remove'> </li>"
  
    // inner html
    // append link to li
  
    li.appendChild(link);
    // here i am appending the a tag to the li
    console.log(li);
  
    // then append the li to the Ul
    tasklist.appendChild(li);
    // and lastly appending the li to ul which display the list of tasks that has been entered by the user
  
  
    // store input in JS Localstorage
    storeTaskInLocalStorage(taskInput.value);
  
  
  
    e.preventDefault();
    // this is event delegation
  
    // we are prevnting the default action which would have been proccessing that input to the index.php file
  }
  
  
  
  
  function storeTaskInLocalStorage(input) {
  
    let tasks;
  
    if (localStorage.getItem("tasks") === null) {
  
      tasks = [];
      console.log(` empty ${tasks}`);
  
      // so here i am checking in the tasks item is empty at the local storage and setting the tasks to null array if it was empty
  
    }
    else {
      // tasks=localStorage.getItem("tasks")
  
      // console.log(`Tasks before Parsing ${tasks}`);
      // console.log(`Tasks before Parsing ${typeof tasks}`);
  
  
  
      tasks = JSON.parse(localStorage.getItem("tasks"));
      console.log(`Tasks after Parsing ${typeof tasks}`);
  
  
      // Why are we JSON.Parsing it then JSON stringify it
  
      // *VERYIMPORTANT**VERYIMPORTANT**VERYIMPORTANT**VERYIMPORTANT*
      // *VERYIMPORTANT**VERYIMPORTANT**VERYIMPORTANT**VERYIMPORTANT*
  
      // the main reason for parsing in to JSON object is to be able to treat it as an array and push the new values that
      // are being entered by the user using push method and then we can stringify that output again and put it back to the localStorage
      // because we cannot push the users's new input to a string without messing up the whole thing
  
      // *VERYIMPORTANT**VERYIMPORTANT**VERYIMPORTANT**VERYIMPORTANT*
      // *VERYIMPORTANT**VERYIMPORTANT**VERYIMPORTANT**VERYIMPORTANT*
  
  
      // so JSON parsing the result which does get returned as string and converts it to an JSON Object
  
  
      // ok so what am i doing here is getting the existing values from the localstorage itself
      // then am pushing to it the new input that has been entered by the user
  
      // and if there is string values at the item tasks i am taking it after parsing it and setting the array to it
  
      // Note: get item from the local storage always returns a string so we have to json parse it
    }
    // tasks before pushing the user's input
  
    tasks.push(input);
    // tasks after pushing the user's input
  
  
  
  
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
 

}




// getTask from localStorage
function getTasks() {

  // all of this code will only be executed after a refresh event


  let tasks;

  if (localStorage.getItem("tasks") === null) {

    tasks = [];

    // so here i am checking in the tasks item is empty at the local storage and setting the tasks to null array if it was empty

  }
  else {
    tasks = JSON.parse(localStorage.getItem("tasks"));

  }


  tasks.forEach(function (task) {

    // revision NOTE
    // for each will display or acess the value of each element or index within the array
    // which we have recently made using JSON.PARSE after accessing the data from the localStoragec
    // thats what i understand at the moment and i am looking forward to understand it even more in the future


    const li = document.createElement("li");

    // this is creating an element of li which is gonna be lated appeneded to the ul of tasks

    // Add class;
    li.className = "collection-item";
    debugger
    // giving it the class collection item bcs each ul has a class of collection and each li of that ul should have a class of collection-item

    // create textNode and append it to li
    li.appendChild(document.createTextNode(task))

    // now i am appending the task that we are getting from the local storage to the li

    // here i am appending a text node to the li element which is gonna be the added task by the user
    // so know i am appending a child node to that li which is gonna be the taskinput value

    // create newLinkk

    const link = document.createElement("a");

    // this is adding the x button at the end of the task in order to remove it if the user wishes to

    link.className = "delete-item secondary-content";

    // it should have a secondary content class in order to be displayed after its parent
    // Add icon

    link.innerHTML = "<i class='fa fa-remove'> </li>"

    // inner html
    // append link to li

    li.appendChild(link);
    // then appeding the a tag

    // here i am appending the a tag to the li

    // then append the li to the Ul
    tasklist.appendChild(li);
    // and lastly appending the whole li to ul

  });
}





function removeTask(e) {

  if (e.target.className === "fa fa-remove") {
    if (confirm("Do you Want to Remove That Task?")) {
      e.target.parentElement.parentElement.classList.add("hide");
      let x = e.target.parentElement.parentElement;
      console.log(`x's text content is ${x.textContent}`);

      // Remove from LocalStorage

      debugger
      // dubbugger tool

      removeTaskFromLocalStorage(e.target.parentElement.parentElement);




    }

    // traversing up to the Li it Self
    // console.log(e.target.parentNode.parentNode);
  }


}



function removeTaskFromLocalStorage(deletedTask) {
  console.log(` Deleted task is ${deletedTask.textContent}`)
  console.log("inside of removing storage")
  let existingTasks;

  if (localStorage.getItem("tasks") === null) {
    existingTasks = [];
  }
  else {
    existingTasks = JSON.parse(localStorage.getItem("tasks"));
  }
  existingTasks.forEach(function (task, index) {

    if(deletedTask.textContent) {
      deletedTask.textContent = deletedTask.textContent.trim();

      // i am trimming both text just to remove anyspace at the start or the end of text and then comparing the two text content
    }

    if(task) {
      task = task.trim();
      // i am trimming both text just to remove anyspace at the start or the end of text and then comparing the two text content

    }

    if (deletedTask.textContent === task) {
      debugger
      // debugger tool

      console.log(`We are finally in`);
      existingTasks.splice(index, 1);

    }
    else {
      console.log("a7a")
    }
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

  });

}



function clearTasks() {


  // tasklist.innerHTML=" ";

  // thats the simple way

  while (tasklist.firstChild) {

    tasklist.removeChild(tasklist.firstChild);
  }
  localStorage.clear();

  // this way is faster
}

// filterThrought the Tasks

function filterTasks(e) {



  const text = e.target.value.toLowerCase();


  console.log(`Filter input is ${text}`);

  document.querySelectorAll(".collection-item").forEach(function (e) {
    console.log(`E's textContent is ${e.textContent}`);
    console.log(`E firstChild's  is ${e.firstChild}`);

    // why is e's and e's first child text contents are the same
    // so what i have came to understand is that the text inside of anything is conidered to be the first child to that parent


    const item = e.firstChild;

    console.log(item);



    if (item.textContent.toLowerCase().indexOf(text) != -1) {

      e.style.display = "block";

      // i cant add classes to this since this is an temproary event object so i have to style it using JS


      // its better to use the child of the filterign keyup input bar
      // since the first child will always be the text inside of it
    }
    else {
      e.style.display = "none";
      // i cant add classes to this since this is an temproary event object so i have to style it using JS

    }
  });

}










































// function addTask(e){

//   let newTask=(addedTask.value);
//   tasks.push(newTask);
//   console.log(addedTask.value);
//   console.log(typeof addedTask.value);

//   for(let x=0;x<tasks.length;x++){

//    console.log(`X value is ${x}`);
//    if(x>=1){

//     condition=true;
//    }

//     tasklist.innerHTML+=`<li>The Task number: ${x+1} is ${tasks[x]}</li>`
//     if(condition===true){

//       tasklist.innerHTML-=`<li>The Task number: ${x} is ${tasks[x-1]}</li>`
//      }
//     console.log(`The Task number: ${x+1} is ${tasks[x]}`);

//   }
//    e.preventDefault();
// }