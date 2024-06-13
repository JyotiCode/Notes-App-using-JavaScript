const notesContainer =document.querySelector(".notes-container")
const createBtn =document.querySelector(".btn")

let notes =document.querySelectorAll(".input-box")

// The code uses the localStorage object to store and retrieve notes. When the page loads, it calls the showNotes() function, which retrieves the notes from local storage and displays them in the "notes-container" element.


function showNotes(){
     notesContainer.innerHTML =localStorage.getItem("notes");
}
showNotes();


function updateStorage(){
     localStorage.setItem("notes",notesContainer.innerHTML)
}

// When the user clicks on the button with the class "btn", a new paragraph element (<p>) is created with the class "input-box" and the attribute contenteditable set to "true", making it editable. An image element (<img>) is also created to serve as a delete button for each note. This new note is then appended to the "notes-container".


createBtn.addEventListener("click", ()=>{
     let inputBox= document.createElement("p");
     let img =document.createElement("img");
     inputBox.className="input-box"
     inputBox.setAttribute("contenteditable", "true");
     img.src="img/delt.png";
     notesContainer.appendChild(inputBox).appendChild(img)
})


//The code listens for clicks on the "notes-container" element. If the clicked element is an image (<img>), it removes the parent paragraph element (<p>) containing the note. It then updates the notes stored in local storage.


notesContainer.addEventListener("click", function(e){
     if(e.target.tagName=== "IMG"){
          e.target.parentElement.remove();
          updateStorage();
     }
     //If the clicked element is a paragraph (<p>), it allows the user to edit the note content. It also updates the notes in local storage whenever the user types something in any of the editable notes.

     else if(e.target.tagName === "p"){
          notes= document.querySelectorAll(".input-box")
          notes.forEach(nt =>{
               nt.onkeyup= function(){
                    updateStorage();  
               }
          })
     }

})

/*here i am adding document dot eventlisner key down event and if the event key is entered then document dot exe command is insert line break and event cmd is inerst line break and event prevent default it means when i will click enter  in our keyboard then it will add one line break in the p tag and it will prevent the default feature of the enter key
*/

document.addEventListener("keydown", event =>{
     if(event.key === "Enter"){
          document.execCommand("insertLineBreak");
          event.preventDefault();
     }
})