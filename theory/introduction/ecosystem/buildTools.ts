interface Note {
    id: number;
    title: string;
    content: string;
}

class NotesApp {
    notes: Note[];
    nextId: number;

    constructor() {
        this.notes = [];
        this.nextId = 1;
    }

    addNote(title: string, content: string): void {
        const newNote: Note = { id: this.nextId++, title, content };
        this.notes.push(newNote);
    }

    displayNotes(): void {
        console.log("Your Notes:");
        this.notes.forEach(note => {
            console.log(`ID: ${note.id}, Title: ${note.title}, Content: ${note.content}`);
        });
    }

    findNoteById(id: number): Note | undefined {
        return this.notes.find(note => note.id === id);
    }

    deleteNoteById(id: number): void {
        this.notes = this.notes.filter(note => note.id !== id);
    }
}

const myNotesApp = new NotesApp();
myNotesApp.addNote("Shopping List", "Milk, Eggs, Bread");
myNotesApp.addNote("Meeting Agenda", "Discuss project timeline");
myNotesApp.addNote("Ideas", "Brainstorm new features");
myNotesApp.displayNotes();

const noteIdToDelete = 2;
const noteToDelete = myNotesApp.findNoteById(noteIdToDelete);
if (noteToDelete) {
    myNotesApp.deleteNoteById(noteIdToDelete);
    console.log(`Note with ID ${noteIdToDelete} deleted successfully.`);
} else {
    console.log(`Note with ID ${noteIdToDelete} not found.`);
}

myNotesApp.displayNotes();
