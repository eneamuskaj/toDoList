// display notes

function displayNotes() {
  const parent = document.getElementById("temporaryDiv");

  for (let i = 0; i < defaultList[0].noteName.length; i++) {
    let noteContainer = document.createElement("div");
    let displayHeader = document.createElement("h1");
    let displayDescription = document.createElement("p");
    let doneButton = document.createElement("button");
    displayHeader.innerHTML = defaultList[0].noteName[i];
    displayDescription.innerHTML = defaultList[0].noteDescription[i];

    parent.appendChild(noteContainer);
    noteContainer.appendChild(displayHeader);
    noteContainer.appendChild(displayDescription);
    noteContainer.appendChild(doneButton);
  }
}

export default { displayNotes };
