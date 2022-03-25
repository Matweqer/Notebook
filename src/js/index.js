const textArea = document.querySelector('.input__area'),
    addButton = document.querySelector('.input__button'),
    notesArea = document.querySelector('.notebook__notes');

let countOfAdd = 1

function checkNumbersOfNotes() {
    const noteNumbers = document.querySelectorAll('.note__number');
    for (let i = 1; i <= noteNumbers.length; i++) {
        noteNumbers[i-1].textContent = i;
    }
}

function addNote(event) {
    event.preventDefault();

    if (textArea.value === '') {
        textArea.classList.add('error');
        textArea.placeholder = 'It does not be empty!'
        setTimeout(() => {
            textArea.classList.remove('error');
            textArea.placeholder = 'Write your note here';
        }, 3000);
        return
    }

    let newNote = document.createElement('div')
    let newNoteNum = document.createElement('div')
    let newNoteText = document.createElement('textarea')
    let closeNote = document.createElement('div')

    newNote.classList.add('notebook__note');
    newNote.classList.add('note');
    newNoteNum.classList.add('note__number');
    newNoteText.classList.add('note__text');
    closeNote.classList.add('note__close');

    newNoteNum.textContent = `${countOfAdd}`;
    newNoteText.textContent = textArea.value;
    textArea.value = '';

    newNote.appendChild(newNoteNum);
    newNote.appendChild(newNoteText);
    newNote.appendChild(closeNote);

    notesArea.appendChild(newNote);
    countOfAdd++;
    checkNumbersOfNotes();

}

function removeNote(event) {
    let target = event.target
    if (target.classList.value !== 'note__close') return
    target.closest('.note').remove()
    countOfAdd--;
    checkNumbersOfNotes()

}

function changeNote(event) {
    let target = event.target;
    if (target.classList.value !== 'note__text') return



}

addButton.addEventListener('click', addNote);
notesArea.addEventListener('click', removeNote);
