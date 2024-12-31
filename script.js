function showNotes() {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes;
  }
}

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Show notes on page load
showNotes();

// Add a new note
createBtn.addEventListener("click", () => {
  const inputElement = document.createElement("p");
  const img = document.createElement("img");

  inputElement.className = "input-box";
  inputElement.setAttribute("contenteditable", "true");

  img.src = "/assets/images/delete.png";
  img.className = "delete-icon";

  // Append elements to the notes container
  inputElement.appendChild(document.createTextNode("")); // Placeholder text
  inputElement.appendChild(img);
  notesContainer.appendChild(inputElement);

  updateStorage(); // Update storage after adding a new note
});

// Handle delete and keyup events
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

notesContainer.addEventListener("keyup", (e) => {
  if (e.target.classList.contains("input-box")) {
    updateStorage();
  }
});
