/*
 * Javascript file for Hack Your Future, Javascript1, homework Week3
 * program will take and save notes.
*/

// NOnoN0nOYes (Note taking app)

// Save a note
const notes = [];

function saveNote(content, id) {
    if (duplicateCheck(id)) {
        console.error(`Note with id:${id} is already exist!Please change the id to ${notes.length + 1} and save your note again`);
    } else if (!id) {
        console.error(`There is no id for your note.Please select id:${notes.length + 1} and save your note again.`);
    } else {
        notes.push({ content, id });
    };
};

function duplicateCheck(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return true;
        }
    }
    return false;
};

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Washing dishes", 2);
saveNote("Washing dishes", 3);
saveNote("Cleaning home");

console.log(notes);

//get note from id
function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (i === (id - 1)) {
            return notes[i];
        };
    }
    return `There is no note with id=${id} on the list.`;
};

let firstNote = getNote(4);
console.log(firstNote);
firstNote = getNote(2);
console.log(firstNote);

// Log out notes

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id:${notes[i].id}, has the following note text: ${notes[i].content}`);
    }
};

logOutNotesFormatted();

/* Unique feature
* I added the duplicateCheck function to check if the id is already exist on the list.
Also to prevent saving notes without ID.
I also implemented a code to show the next available id to the user in case of id duplication and id missing.
*/
