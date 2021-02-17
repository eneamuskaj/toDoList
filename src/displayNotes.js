// function displayNotes(numb) {
//   //delete previous content
//   document.getElementById("temporaryDiv").remove();
//   let redo = document.createElement("div");
//   redo.id = "temporaryDiv";
//   document.getElementById("displayContent").appendChild(redo);

//   const parent = document.getElementById("temporaryDiv");

//   for (let i = 0; i < defaultList[numb].noteName.length; i++) {
//     let noteContainer = document.createElement("div");
//     let displayHeader = document.createElement("h1");
//     let displayDescription = document.createElement("p");
//     let doneButton = document.createElement("button");
//     displayHeader.innerHTML = defaultList[numb].noteName[i];
//     displayDescription.innerHTML = defaultList[numb].noteDescription[i];

//     parent.appendChild(noteContainer);
//     noteContainer.appendChild(displayHeader);
//     noteContainer.appendChild(displayDescription);
//     noteContainer.appendChild(doneButton);
//   }
// }

// export { displayNotes };
