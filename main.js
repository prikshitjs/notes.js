function addNote() {
    let notesec = document.querySelector(".addnotes");
    notesec.classList.add("show");
}
function removetab() {
    let notesec = document.querySelector(".addnotes");
    notesec.classList.remove("show");
}
let savebtn = document.querySelector(".savebtn");
let noteinput = document.getElementById("note-input");
let display_notes = document.querySelector(".display_notes");
let notealert = document.querySelector(".notealert");


savebtn.addEventListener("click", ()=> {
    let note = noteinput.value;
    let getnote = JSON.parse(localStorage.getItem("notes")) ?? [];
    getnote.push({
        'noteslist':note
    })
    localStorage.setItem("notes", JSON.stringify(getnote));
    displaynotes();
    noteinput.value='';
    notealert.classList.add("showalert");
    setTimeout(function(){
        notealert.classList.remove("showalert");
    }, 4000);
})

let displaynotes=()=>{
    let getnote = JSON.parse(localStorage.getItem("notes")) ?? [];
    let final='';
    getnote.forEach((element,i)=> {
        final+=`
        <div class="notebox">
        <i onclick="deletenote(${i})" class="fa fa-trash-can" title="Delete this note"></i>
        <p>${element.noteslist}</p>
        </div>
        `
    })
    display_notes.innerHTML=final;
}
displaynotes();

function deletenote(index) {
    let getnote = JSON.parse(localStorage.getItem("notes")) ?? [];
    getnote.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(getnote));
    displaynotes();
}