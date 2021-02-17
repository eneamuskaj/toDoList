defaultList = [
  {
    name: "default",
    noteName: ["Do the white clothes", "Do the green", "Dont Forget the black"],
    noteDescription: [
      "this is a brief description",
      "this is a brief description",
      "this is a brief description",
    ],
  },
  {
    name: "school",
    noteName: ["school supplies", "notes", "calcumator"],
    noteDescription: [
      "this is a brief description",
      "this is a brief description",
      "this is a brief description",
    ],
  },
];

function Item(name, noteName, noteDescription) {
  this.name = name;
  this.noteName = noteName;
  this.noteDescription = noteDescription;
}

selectedProject = "default";

function displayProjects() {
  const grabber = document.getElementById("content");
  for (let i = 0; i < defaultList.length; i++) {
    let projectDisplay = document.createElement("button");
    projectDisplay.innerHTML = defaultList[i].name;
    grabber.appendChild(projectDisplay);
    projectDisplay.addEventListener("click", function () {
      displayNotes(i);
      selectedProject = defaultList[i].name;
      console.log(selectedProject);
    });
  }
}

// display notes

function displayNotes(num) {
  const parent = document.getElementById("temporaryDiv");

  for (let i = 0; i < defaultList[num].noteName.length; i++) {
    let noteContainer = document.createElement("div");
    let displayHeader = document.createElement("h1");
    let displayDescription = document.createElement("p");
    let doneButton = document.createElement("button");
    displayHeader.innerHTML = defaultList[num].noteName[i];
    displayDescription.innerHTML = defaultList[num].noteDescription[i];

    parent.appendChild(noteContainer);
    noteContainer.appendChild(displayHeader);
    noteContainer.appendChild(displayDescription);
    noteContainer.appendChild(doneButton);
  }
}

// add note

function addNote() {
  const buttonClick = document.getElementById("firstbutton");

  buttonClick.addEventListener("click", function () {
    const nameOfNote = document.getElementById("noteName").value;
    const descriptionOfNote = document.getElementById("noteDescription").value;

    const newNote = new Item(selectedProject, nameOfNote, descriptionOfNote);

    for (let i = 0; i < defaultList.length; i++) {
      if (newNote.name === defaultList[i].name) {
        defaultList[i].noteName.push(newNote.noteName);
        defaultList[i].noteDescription.push(newNote.noteDescription);
      }
    }

    document.getElementById("temporaryDiv").remove();
    let redo = document.createElement("div");
    redo.id = "temporaryDiv";
    document.getElementById("displayContent").appendChild(redo);
    displayProjects();
  });
}

displayProjects();

addNote();
