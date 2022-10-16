console.log("its this is working");
shownotes();

// addEventListener for get value of notes
// add strig of notes in the localStorage
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addtext = document.getElementById("text");
  let notes = localStorage.getItem("notes");
  let title = document.getElementById("title");  
  
  
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myobj={
    title: title.value,
    text: addtext.value 
  };
  console.log()
  notesObj.push(myobj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtext.value = "";
  title.value = "";
  console.log(notesObj);
  shownotes();
});
// title




// function for shows notes

function shownotes() {
  
  
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  
  notesObj.forEach(function (element,index) {

    html += `
   
    
      <div class="noteCard my-2 mx-2 card  bg-dark bg-gradient" style="width: 19.5rem;">
        <div class="card-body ">
          <h5 class="card-title" style="color:#ffff";>${element.title}</h5>
          <hr style="color:#ffff";>
          <p class="cardpage" id ="p" style="color:#ffff";>${element.text}</p>
          <br>
          <hr style="color:#ffff";>
          <button onclick="fundel(this.id)" class="btn btn-primary bg-dark " id="${index}" >Delete note</button>
          
        
      
     </div> 
    </div>
      
        `;
  });
  let noteselm = document.getElementById("notes");

  if (notesObj.length != 0) {
    noteselm.innerHTML = html;
  } else {
    noteselm.innerHTML = `<h5 style="color:green" >Noting to show "please add some notes!" ,thanks ghanshyam</h5>`;
  }
}

// function for delete notes

function fundel(index) {
  console.log("i am Delete", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
};

// edit nots function

// let editnote = document.getElementsByClassName("btn");
// editnote.addEventListener("click",funedit);{
  
// } ;

// function funedit(e){
  
//   let noteselms = `<div class="card text-center">
//   <div class="card-header">
//     Featured
//   </div>
//   <div class="card-body">
//     <h5 class="card-title">Special title treatment</h5>
//     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
//   <div class="card-footer text-muted">
//     2 days ago
//   </div>
// </div>`;
// document.getElementById('noteCard').innerHTML= noteselms;

  
// }

// function for searching text from notes

let searching = document.getElementById("srtxt");
searching.addEventListener("input", function() {
    let ipval = searching.value;
    // all note is in notescard
    let notescard = document.getElementsByClassName("noteCard");
    console.log(notescard);
    // get notescard one by one forEach function
    Array.from(notescard).forEach(function(element){
      let txtcard =document.getElementsByTagName("p");
      // get txt from tagname p 
      // one by one
      Array.from(txtcard).forEach(function(){
        let txts= element.innerHTML;
        // compare input and note text
        if (txts.includes(ipval)){
          element.style.display= "block";
        }
        else{
         element.style.display= "none";
        }
      });
    });
    
});

