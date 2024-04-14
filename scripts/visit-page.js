console.log('hello world');

const form = document.getElementById("visit-form");
const errorContainer = document.getElementById("errorDiv");
const errorMessage = document.createElement("p");
errorMessage.style.textAlign = "center";
errorMessage.textContent = "Data not completed, please re-enter.";
errorMessage.setAttribute('style', 'color: red');

const peopleError = document.createElement("p");
peopleError.style.textAlign = "center";
peopleError.textContent = "Please enter a valid number of people!";
peopleError.setAttribute('style', 'color: red');


function formSubmission(x) {
    x.preventDefault();
    const dateInput = form.elements["date"];
    const timeSelect = form.elements["time"];
    const visitorsInput = form.elements["visitors"];

    if (
        !dateInput.value.trim() ||
        !timeSelect.value.trim() ||
        !visitorsInput.value.trim()
    ) {
        errorContainer.innerHTML = '';
        errorContainer.append(errorMessage);
        return;
    } else {
       errorContainer.innerHTML = '';

       if (!Number.isInteger(parseFloat(visitorsInput.value)) || parseInt(visitorsInput.value) < 1) {
        console.log('lower than 1 or not an integer');
        errorContainer.innerHTML = '';
        errorContainer.appendChild(peopleError);
        return;
      } else {
        errorContainer.innerHTML = '';
      }
    }

    const date = dateInput.value;
    const time = timeSelect.value;
    const no = parseInt(visitorsInput.value)



    if (reserve(date, time, no)) {
        errorContainer.innerHTML = '';
        alert("Your reservation is successful!");
    } else {
        errorContainer.innerHTML = '';
        alert(
            "Sorry, the reservation is full!"
        );
    }
}

form.addEventListener('submit', formSubmission);