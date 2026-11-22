
// Select the paragraph
const message = document.getElementById("message");

// Select the button
const changeBtn = document.getElementById("changeBtn");

// Create a function
function changeMessage() {
    message.textContent = "Hello there!";
}

// Add click event listener
changeBtn.addEventListener("click", changeMessage);
