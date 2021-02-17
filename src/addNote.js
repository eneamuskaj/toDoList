// add note to the list
function addNote() {
  const buttonClick = document.getElementById("firstbutton");

  buttonClick.addEventListener("click", function () {
    const nameOfNote = document.getElementById("noteName").value;
    const descriptionOfNote = document.getElementById("noteDescription").value;

    const newNote = new Item("this list", nameOfNote, descriptionOfNote);

    defaultList.noteName.push(newNote.nameOfNote);
    defaultList.noteDescription.push(newNote.descriptionOfNote);

    document.getElementById("temporaryDiv").remove();
    let redo = document.createElement("div");
    redo.id = "temporaryDiv";
    document.getElementById("displayContent").appendChild(redo);
  });
}

export default { addNote };
