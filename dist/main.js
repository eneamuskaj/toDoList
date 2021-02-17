/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var defaultList = [\r\n  {\r\n    name: \"default\",\r\n    noteName: [\"Do the white clothes\", \"Do the green\", \"Dont Forget the black\"],\r\n    noteDescription: [\r\n      \"this is a brief description\",\r\n      \"this is a brief description\",\r\n      \"this is a brief description\",\r\n    ],\r\n  },\r\n  {\r\n    name: \"school\",\r\n    noteName: [\"school supplies\", \"notes\", \"calcumator\"],\r\n    noteDescription: [\r\n      \"this is a brief description\",\r\n      \"this is a brief description\",\r\n      \"this is a brief description\",\r\n    ],\r\n  },\r\n];\r\n\r\nfunction Item(name, noteName, noteDescription) {\r\n  this.name = name;\r\n  this.noteName = noteName;\r\n  this.noteDescription = noteDescription;\r\n}\r\n\r\nvar selectedProject = 0;\r\n\r\nfunction displayProjects() {\r\n  // delete previous content\r\n\r\n  var remover = document.getElementById(\"projectButtons\");\r\n  remover.remove();\r\n\r\n  const grabber = document.getElementById(\"content\");\r\n  var projectButtons = document.createElement(\"div\");\r\n  projectButtons.id = \"projectButtons\";\r\n  grabber.appendChild(projectButtons);\r\n\r\n  for (let i = 0; i < defaultList.length; i++) {\r\n    let projectDisplay = document.createElement(\"button\");\r\n    projectDisplay.innerHTML = defaultList[i].name;\r\n    projectButtons.appendChild(projectDisplay);\r\n    projectDisplay.addEventListener(\"click\", function () {\r\n      displayNotes(i);\r\n      selectedProject = i;\r\n      console.log(selectedProject);\r\n    });\r\n  }\r\n}\r\n\r\nfunction displayNotes(numb) {\r\n  //delete previous content\r\n  document.getElementById(\"temporaryDiv\").remove();\r\n  let redo = document.createElement(\"div\");\r\n  redo.id = \"temporaryDiv\";\r\n  document.getElementById(\"displayContent\").appendChild(redo);\r\n\r\n  const parent = document.getElementById(\"temporaryDiv\");\r\n\r\n  for (let i = 0; i < defaultList[numb].noteName.length; i++) {\r\n    let noteContainer = document.createElement(\"div\");\r\n    let displayHeader = document.createElement(\"h1\");\r\n    let displayDescription = document.createElement(\"p\");\r\n    let doneButton = document.createElement(\"button\");\r\n    displayHeader.innerHTML = defaultList[numb].noteName[i];\r\n    displayDescription.innerHTML = defaultList[numb].noteDescription[i];\r\n\r\n    parent.appendChild(noteContainer);\r\n    noteContainer.appendChild(displayHeader);\r\n    noteContainer.appendChild(displayDescription);\r\n    noteContainer.appendChild(doneButton);\r\n  }\r\n}\r\n\r\nfunction addNote() {\r\n  const buttonClick = document.getElementById(\"firstbutton\");\r\n\r\n  buttonClick.addEventListener(\"click\", function () {\r\n    const nameOfNote = document.getElementById(\"noteName\").value;\r\n    const descriptionOfNote = document.getElementById(\"noteDescription\").value;\r\n\r\n    const newNote = new Item(\r\n      defaultList[selectedProject].name,\r\n      nameOfNote,\r\n      descriptionOfNote\r\n    );\r\n\r\n    for (let i = 0; i < defaultList.length; i++) {\r\n      if (newNote.name === defaultList[i].name) {\r\n        defaultList[i].noteName.push(newNote.noteName);\r\n        defaultList[i].noteDescription.push(newNote.noteDescription);\r\n      }\r\n    }\r\n\r\n    // delete previous content\r\n    document.getElementById(\"temporaryDiv\").remove();\r\n    let redo = document.createElement(\"div\");\r\n    redo.id = \"temporaryDiv\";\r\n    document.getElementById(\"displayContent\").appendChild(redo);\r\n\r\n    displayNotes(selectedProject);\r\n  });\r\n}\r\n\r\ndisplayProjects();\r\naddNote();\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;