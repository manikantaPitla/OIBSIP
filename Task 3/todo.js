const input = document.getElementById("input");
const allTasks = document.getElementById("allTasks");



function checkTaskList() {
    const taskList = allTasks.querySelectorAll("li");
    const noTaskMsg = document.querySelector(".no_task_msg");
  
    if (taskList.length === 0) {
      noTaskMsg.style.display = "block";
    } else {
      noTaskMsg.style.display = "none";
    }
}
  
function addtask() {
    if (input.value === "") {
      alert("You must write something!");
    } 
    else {
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.innerText = input.value;
      allTasks.appendChild(li);
      li.appendChild(p);
  
      let span = document.createElement("span");
      li.appendChild(span);
  
      let deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fa-solid");
      deleteIcon.classList.add("fa-trash");
      span.appendChild(deleteIcon);
  
      span.addEventListener("click", function () {
        li.remove(); //delete the task
        checkTaskList();
      });
  
      let anchor = document.createElement("a");
      li.appendChild(anchor);
  
      let Check = document.createElement("i");
      Check.classList.add("fa-solid");
      Check.classList.add("fa-circle-check");
      anchor.appendChild(Check);
  
      anchor.addEventListener("click", function () {
        anchor.querySelector(".fa-circle-check").classList.toggle(
          "completed_task_active"
        );
        li.querySelector("p").classList.toggle("completed_line_strike");
      });
  
      checkTaskList();
    }
  
    input.value = "";
  
}
  