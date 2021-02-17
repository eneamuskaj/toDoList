function initialize() {
  var defaultList = [
    {
      name: "default",
      noteName: [
        "Do the white clothes",
        "Do the green",
        "Dont Forget the black",
      ],
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

  var selectedProject = 0;
}

function displayProjects() {
  // delete previous content

  var remover = document.getElementById("projectButtons");
  remover.remove();

  const grabber = document.getElementById("content");
  var projectButtons = document.createElement("div");
  projectButtons.id = "projectButtons";
  grabber.appendChild(projectButtons);

  for (let i = 0; i < defaultList.length; i++) {
    let projectDisplay = document.createElement("button");
    projectDisplay.innerHTML = defaultList[i].name;
    projectButtons.appendChild(projectDisplay);
    projectDisplay.addEventListener("click", function () {
      displayNotes(i);
      selectedProject = i;
      console.log(selectedProject);
    });
  }
}

function displayNotes(numb) {
  //delete previous content
  document.getElementById("temporaryDiv").remove();
  let redo = document.createElement("div");
  redo.id = "temporaryDiv";
  document.getElementById("displayContent").appendChild(redo);

  const parent = document.getElementById("temporaryDiv");

  for (let i = 0; i < defaultList[numb].noteName.length; i++) {
    let noteContainer = document.createElement("div");
    let displayHeader = document.createElement("h1");
    let displayDescription = document.createElement("p");
    let doneButton = document.createElement("button");
    displayHeader.innerHTML = defaultList[numb].noteName[i];
    displayDescription.innerHTML = defaultList[numb].noteDescription[i];

    parent.appendChild(noteContainer);
    noteContainer.appendChild(displayHeader);
    noteContainer.appendChild(displayDescription);
    noteContainer.appendChild(doneButton);
  }
}

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
initialize();
displayProjects();
addNote();
