import { displayNotes } from "./displayNotes";
import { defaultList, selectedProject } from "./index";

export function displayProjects() {
  // delete previous content

  var remover = document.getElementById("projectButtons");
  remover.remove();

  const grabber = document.getElementById("mainContainer");
  var projectButtons = document.createElement("div");
  projectButtons.id = "projectButtons";
  grabber.prepend(projectButtons);

  for (let i = 0; i < defaultList.length; i++) {
    let projectDisplay = document.createElement("button");
    projectDisplay.className = "projectButton";
    projectDisplay.innerHTML = defaultList[i].name;
    projectButtons.appendChild(projectDisplay);
    projectDisplay.addEventListener("click", function () {
      displayNotes(i);
      selectedProject = i;
      console.log(selectedProject);
    });
  }
}
