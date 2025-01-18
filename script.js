let taskListArr = JSON.parse(localStorage.getItem("taskListArr")) || [];

function checkEnter(event) {
  if (event.key === "Enter") {
    add();
  }
}

function remove(target) {
  var targetedTask = target.closest(".singleTask");
  console.log(targetedTask);

  var taskTitle = targetedTask.querySelector("h4").innerText;

  var taskIndex = taskListArr.findIndex((task) => task.title === taskTitle);
  console.log(taskIndex);

  if (taskIndex !== -1) {
    taskListArr.splice(taskIndex, 1);
    localStorage.setItem("taskListArr", JSON.stringify(taskListArr));
  }

  targetedTask.remove();
}
function add() {
  var taskList = document.querySelector(".taskList");
  var input = document.querySelector("input");
  var date = new Date();
  var task = {
    title: input.value,
    date: date.toDateString(),
  };

  if (input.value.length > 0) {
    taskList.innerHTML += `<div class="singleTask">
        <h4>${task.title}</h4>
        <div>
          <p>${task.date}</p>
          <button onclick="remove(this)">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>`;
  }

  taskListArr.push(task);
  console.log(taskListArr);

  localStorage.setItem("taskListArr", JSON.stringify(taskListArr));
  input.value = "";
}

window.onload = function () {
  var taskList = document.querySelector(".taskList");
  taskListArr.forEach((task) => {
    taskList.innerHTML += `<div class="singleTask">
          <h4>${task.title}</h4>
          <div>
            <p>${task.date}</p>
            <button onclick="remove(this)">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>`;
  });
};
