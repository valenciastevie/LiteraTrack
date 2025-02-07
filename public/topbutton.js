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

function startTimer() {
  timer = setInterval(() => {
    timeElapsed++;
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    timerElement.innerText = `Reading time: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (timeElapsed >= 60) {
      doneButton.disabled = false;
    }
  }, 1000);
}

// Handle Done button click
doneButton.addEventListener("click", () => {
  let taskId = "your-task-id"; // Set this dynamically based on the story

  if (timeElapsed < 60) {
    alert("Progress didn't save because the reading time is under 1 minute.");
  } else {
    alert("Progress saved!");
    storeProgress(taskId); // Store progress only if time is >= 60s
    clearInterval(timer);
    window.location.href = "index.html"; // Redirect after confirmation
  }
});

doneButton.addEventListener("mouseover", function () {
  if (timeElapsed >= 60) {
    doneButton.classList.add("hovered");
  }
});

doneButton.addEventListener("mouseout", function () {
  doneButton.classList.remove("hovered");
});

window.onload = startTimer;
