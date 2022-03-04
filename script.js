var textElements = document.querySelectorAll(".text-input");
var saveButtons = document.querySelectorAll(".saveBtn");
var today = moment();
var currentHour = moment().hour();

// Displays the current date.
$("#currentDay").text(today.format("MMM Do, YYYY"));

// Text area changes color based off the past, present, and future.
textElements.forEach((input) => {
  if (input.id < currentHour) {
    input.style.backgroundColor = "rgb(220, 220, 220)";
    console.log(input.id);
  } else if (input.id > currentHour) {
    input.style.backgroundColor = "rgb(135, 255, 135)";
  } else {
    input.style.backgroundColor = "rgb(209, 73, 91)";
  }
});

// Local storage.
saveButtons.forEach((saveButton, i) => {
  saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    var storeText = Array.from(textElements, (text) => text.value);

    // Grab single text value.
    var singleTextArea;
    textElements.forEach((textArea) => {
      if (textArea.id === event.target.name) {
        singleTextArea = textArea;
      }
    });
    localStorage.setItem("Save-Event", JSON.stringify(storeText));
  });
  textElements[i].value = JSON.parse(localStorage.getItem("Save-Event"))[i];
});
