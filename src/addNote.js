function addNote() {
  const buttonClick = document.getElementById("firstbutton");

  buttonClick.addEventListener("click", function () {
    const nameOfNote = document.getElementById("noteName").value;
    const descriptionOfNote = document.getElementById("noteDescription").value;

    const newNote = new Item(
      defaultList[selectedProject].name,
      nameOfNote,
      descriptionOfNote
    );

    for (let i = 0; i < defaultList.length; i++) {
      if (newNote.name === defaultList[i].name) {
        defaultList[i].noteName.push(newNote.noteName);
        defaultList[i].noteDescription.push(newNote.noteDescription);
      }
    }

    // delete previous content
    document.getElementById("temporaryDiv").remove();
    let redo = document.createElement("div");
    redo.id = "temporaryDiv";
    document.getElementById("displayContent").appendChild(redo);

    displayNotes(selectedProject);
  });
}

export { addNote };
