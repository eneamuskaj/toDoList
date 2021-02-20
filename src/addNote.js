import { Item, newList, defaultList, selectedProject } from './index'
import { displayNotes } from './displayNotes'
import { displayProjects } from './displayProjects'
export function addNote() {
  const buttonClick = document.getElementById('firstButton')

  buttonClick.addEventListener('click', function () {
    const nameOfNote = document.getElementById('noteName').value
    const descriptionOfNote = document.getElementById('noteDescription').value
    const nameOfProject = document.getElementById('projectName').value

    let newNote = new Item(nameOfProject, nameOfNote, descriptionOfNote)

    for (let i = 0; i < defaultList.length; i++) {
      if (newNote.name === defaultList[i].name) {
        defaultList[i].noteName.push(newNote.noteName)
        defaultList[i].noteDescription.push(newNote.noteDescription)
      } else {
        newNote = new newList(nameOfProject, nameOfNote, descriptionOfNote)
        defaultList.push(newNote)
        console.log(defaultList)
      }
    }

    // delete previous content
    document.getElementById('temporaryDiv').remove()
    let redo = document.createElement('div')
    redo.id = 'temporaryDiv'
    document.getElementById('displayContent').appendChild(redo)
    displayProjects()
    displayNotes(selectedProject)
  })
}
