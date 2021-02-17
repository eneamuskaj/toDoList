function displayProjects() {
  // delete previous content

  remover = document.getElementById("projectButtons");
  remover.remove();

  const grabber = document.getElementById("content");
  projectButtons = document.createElement("div");
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

export { displayProjects };
