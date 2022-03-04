var textElements = document.querySelectorAll(".text-input");
var saveButtons = document.querySelectorAll(".saveBtn");
console.log(textElements);

saveButtons.forEach((saveButton, i) => {
  saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    var saveText = Array.from(textElements, (text) => text.value);
    localStorage.setItem("Save-Event", JSON.stringify(saveText));
  });
  textElements[i].value = JSON.parse(localStorage.getItem("Save-Event"))[i];
});
