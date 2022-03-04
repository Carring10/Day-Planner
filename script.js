var textElements = document.querySelectorAll(".text-input");
var saveButtons = document.querySelectorAll(".saveBtn");
var today = moment();
var currentHour = moment().hour();

$("#currentDay").text(today.format("MMM Do, YYYY"));

textElements.forEach((input) => {
  if (input.id < currentHour) {
    input.style.backgroundColor = "gray";
    console.log(input.id);
  } else if (input.id > currentHour) {
    input.style.backgroundColor = "green";
  } else {
    input.style.backgroundColor = "red";
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
