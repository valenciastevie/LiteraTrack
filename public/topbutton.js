// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  let mybutton = document.getElementById("myBtn");

  if (mybutton) {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    mybutton.addEventListener("click", function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
});

// Select the timer and button elements
const timerElement = document.getElementById("timer");
const doneButton = document.getElementById("done-button");

let timeElapsed = 0;
let timer;

// Function to start the timer
function startTimer() {
  timer = setInterval(() => {
    timeElapsed++;
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    timerElement.innerText = `Reading time: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (timeElapsed >= 60) {
      doneButton.disabled = false;
      doneButton.classList.add("hovered-enabled"); // Add a class to indicate it's now hoverable
    }
  }, 1000);
}

// Handle "Done!" button click
doneButton.addEventListener("click", () => {
  let taskId = doneButton.getAttribute("data-task-id"); // Get taskId dynamically

  if (timeElapsed < 60) {
    alert("Progress didn't save because the reading time is under 1 minute.");

    // Remove mistakenly stored progress
    let tasksDone = JSON.parse(sessionStorage.getItem("tasksDone")) || [];
    let updatedTasks = tasksDone.filter(id => id !== taskId);
    sessionStorage.setItem("tasksDone", JSON.stringify(updatedTasks));

  } else {
    alert("Progress saved!");
    storeProgress(taskId);
    clearInterval(timer);
    window.location.href = "index.html"; // Redirect after saving
  }
});

// Change button color on hover dynamically
doneButton.addEventListener("mouseover", function () {
  if (timeElapsed >= 60) {
    doneButton.classList.add("hovered");
  }
});

doneButton.addEventListener("mouseout", function () {
  doneButton.classList.remove("hovered");
});

// Start the timer when the page loads
window.onload = startTimer;
