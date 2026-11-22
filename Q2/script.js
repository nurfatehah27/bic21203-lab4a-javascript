
// Select HTML elements
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Create validation function
function checkInput() {

    // Read the input
    const inputValue = userInput.value.trim();

    // Check empty input
    if (inputValue === "") {
        result.textContent = "Please enter a valid number!";
    }

    // Convert input into a number
    else if (!Number.isFinite(Number(inputValue))) {
        result.textContent = "Please enter a valid number!";
    }

    else {
        const number = Number(inputValue);

        if (number < 10) {
            result.textContent = "The number is lower than 10";
        }
        else if (number > 10) {
            result.textContent = "The number is higher than 10";
        }
        else {
            result.textContent = "The number is equal to 10";
        }
    }
}

// Add click event
checkBtn.addEventListener("click", checkInput);
