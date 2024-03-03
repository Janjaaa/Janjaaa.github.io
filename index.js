const sendNote = document.getElementById('createNote')

sendNote.addEventListener('click', () => {
    let newNote = document.getElementById('newNote')
    let noteList = document.getElementById('noteList')
    let noteItem = document.createElement('li')
    let noteCheckBox = document.createElement('input')
    noteCheckBox.classList.add('form-check-input')
    noteCheckBox.setAttribute('type', 'checkbox')
    noteCheckBox.setAttribute('value', '')
    let noteLabel = document.createElement('label')
    noteLabel.classList.add('form-check-label')

    noteLabel.innerHTML = newNote.value

    newNote.value = ''

    noteItem.appendChild(noteCheckBox)
    noteItem.appendChild(noteLabel)

    noteList.appendChild(noteItem)
})
