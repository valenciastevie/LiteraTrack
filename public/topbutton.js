// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element (could be null on some pages)
  let mybutton = document.getElementById("myBtn");

  // Check if the button exists
  if (mybutton) {
    // Show the button when user scrolls
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      console.log("Scroll detected:", document.documentElement.scrollTop);
      if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        console.log("Show button");
        mybutton.style.display = "block";
      } else {
        console.log("Hide button");
        mybutton.style.display = "none";
      }
    }

    // Scroll to the top when the button is clicked
    mybutton.addEventListener("click", function topFunction() {
      document.body.scrollTop = 0; // Safari
      document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
    });
  } else {
    console.log("Button 'myBtn' not found on this page.");
  }
});




// Select the timer and button elements
const timerElement = document.getElementById("timer");
const doneButton = document.getElementById("done-button");

// Initialize variables
let timeElapsed = 0;
let timer;

// Function to start the timer
function startTimer() {
  timer = setInterval(() => {
    timeElapsed++;
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    timerElement.innerText = `Reading time: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    // Enable the Done button after 1 minute
    if (timeElapsed >= 60) {
      doneButton.disabled = false;
    }
  }, 1000);
}

// Function to handle Done button click
doneButton.addEventListener("click", () => {
  if (timeElapsed < 60) {
    alert("Progress didn't save because the reading time is under 1 minute.");
  } else {
    alert("Progress saved!");
    clearInterval(timer); // Stop the timer

         // Redirect to file.html after the alert
        window.location.href = "index.html";
  }
}
  }
});

// Function to change button color on hover
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
