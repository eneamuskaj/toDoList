// function displayProjects() {
//   // delete previous content

//   var remover = document.getElementById("projectButtons");
//   remover.remove();

//   const grabber = document.getElementById("content");
//   var projectButtons = document.createElement("div");
//   projectButtons.id = "projectButtons";
//   grabber.appendChild(projectButtons);

//   for (let i = 0; i < defaultList.length; i++) {
//     let projectDisplay = document.createElement("button");
//     projectDisplay.innerHTML = defaultList[i].name;
//     projectButtons.appendChild(projectDisplay);
//     projectDisplay.addEventListener("click", function () {
//       displayNotes(i);
//       selectedProject = i;
//       console.log(selectedProject);
//     });
//   }
// }

// export { displayProjects };
