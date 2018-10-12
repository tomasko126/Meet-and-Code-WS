class Notes {
    
    // Store note in Set
    storeNote(description) {
        
        const storedNotes = this.getStoredNotes();
        
        if (storedNotes.includes(description)) {
            return false;
        }
        
        storedNotes.push(description);
        
        localStorage.setItem("sites", JSON.stringify(storedNotes));
        
        return true;
    }

    getStoredNotes() {
        return JSON.parse(localStorage.getItem('sites')) || [];
    }
    
    // Remove note from Set
    removeNote(description) {
        let storedNotes = this.getStoredNotes();
        
        storedNotes = storedNotes.filter((note) => note !== description);
        
        localStorage.setItem("sites", JSON.stringify(storedNotes));
    }
}

class UI {
    
    constructor() {
        const storedNotes = notes.getStoredNotes();
        
        for (const note of storedNotes) {
            // Create UI for every stored note
            this._createNoteUI(note);
        }
    }
    
    // Create UI for new note
    _createNoteUI(description) {
        const node = document.createElement("li");
        node.textContent = description;
        
        node.onclick = () => {
            this.removeNote(node);
        };
        
        document.getElementById("body").appendChild(node);
    }
    
    // Remove note's UI
    _removeNoteUI(element) {
        element.remove();
    }
    
    // Add note
    addNote(description) {        
        if (description === "") {
            return;
        }
        
        if (notes.storeNote(description)) {
            this._createNoteUI(description);
            this.clearTextBox();
        } else {
            alert("Note with the given description already exists!");
        }
    }
    
    // Remove note
    removeNote(element) {
        const removalConfirmation = confirm("Do you really want to delete this note?");
        this._removeNoteUI(element);
        notes.removeNote(element.textContent);
    }
    
    clearTextBox() {
        document.getElementById("inputField").value = "";
    }
}

const notes = new Notes();
const ui = new UI();

document.getElementById("addButton").onclick = () => ui.addNote(document.getElementById("inputField").value);