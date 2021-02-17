import { displayProjects } from "./displayProjects";
import { addNote } from "./addNote";

export var defaultList = [
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

export function Item(name, noteName, noteDescription) {
  this.name = name;
  this.noteName = noteName;
  this.noteDescription = noteDescription;
}

export var selectedProject = 0;

displayProjects();
addNote();
