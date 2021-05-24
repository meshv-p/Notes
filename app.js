

// function dark(){
//     if( onclick()== true ){

//         document.getElementById('body').className= 'darkmode';
//     }
//     document.getElementById('body').className= 'darkmode';


// }
// for dark mode
function dark() {
    var element = document.getElementsById("n1");
    element.classList.toggle("darkmode");
  }




// search option
// serch for
  let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('note');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("input")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
}) 


// showing setting Option    // for 1 notes
function opt() {

    if (document.getElementById('optio').style.display != 'none') {
        document.getElementById('optio').style.display = 'none';
        }
    else {
        document.getElementById('optio').style.display = 'block';   // optio.style.display
        }
        }    // end

        // for 2 notes 
        function opt1() {
            if (optio1.style.display != 'none') {
                optio1.style.display = 'none';
            }
            else {
                optio1.style.display = 'block';
            }
        }   // end




          /* // showing setting Option          // for 2 notes
            function option() {
                if (op2.style.display != 'none') {
                    op2.style.display = 'none';
                }
                else {
                    op2.style.display = 'block';   // optio.style.display
                }
            }   */

            // function option(){
            //    if(document.getElementById('op1') = document.getElementById('o1') ) {
            //   if (op1.style.display != 'none') {
            //     op1.style.display = 'none';
            // }
            // else {
            //     op1.style.display = 'block';   // optio.style.display
            // }  }

            // if ( document.getElementById('op2') = document.getElementById('o2')  ) {
            // if (op2.style.display != 'none') {
            //     op2.style.display = 'none';
            // }
            // else {
            //     op2.style.display = 'block';   // optio.style.display
            // } }  }

        // }    // end


      // check notes(strick through) 
      function checked() {
        if (t1.style.textDecoration != 'none') {
            t1.style.textDecoration = 'none';
        }
        else {
            t1.style.textDecoration = 'line-through';
            // t1.style.textDecoration= 'line-through';
        }
    } // end

     // removing notes
     function removed() {
        var y = document.getElementById('n1');
        y.remove(y.querySelector);
    }


    function removed1() {
        var y = document.getElementById('n2');
        y.remove(y.querySelector);
    }
          /*  start // ============== Function to delete a note    
        // function deleteNote(index) {
        //    console.log("I am deleting", index);

        // let notes = localStorage.getItem("notes");
        // if (notes == null) {
        // notesObj = [];
        // } else {
        //     notesObj = JSON.parse(notes);
        // }

        //     notesObj.splice(index, 1);
        // localStorage.setItem("notes", JSON.stringify(notesObj));
        // showNotes();
            // }  */ // end







    // =====adding notes====== 
        // adding a notes
        // console.log("Welcome to notes app. This is app.js");
        showNotes();

        // If user adds a note, add it to the localStorage
        let addBtn = document.getElementById("plus");
        addBtn.addEventListener("click", function (e) {
            let addTxt = document.getElementById("addText");   // addtext for txt
            let AddTitle = document.getElementById("addText2");  // addtext2 for Title
            let notes = localStorage.getItem("notes");
            if (notes == null) {
                notesObj = [];
            } else {
                notesObj = JSON.parse(notes);
            }
            let myobj={
                title: addText2.value, // addtext2
                text : addText.value    //  addText 
            }
            notesObj.push(myobj);
            localStorage.setItem("notes", JSON.stringify(notesObj));
            addTxt.value = "";
            AddTitle.value = "";
            console.log(notesObj);
            showNotes();
        });
        // add notes show
        function showNotes() {
            let notes = localStorage.getItem("notes");
            if (notes == null) {
                notesObj = [];
            } else {
                notesObj = JSON.parse(notes);
            }
                let html = "";
                    notesObj.forEach(function (element,index) {
                    html += `
                    <div class="notesn">
                <div class="noten">
                    <input type="text" class="t1"  value="${element.title}" > <input type="text" class="des"  placeholder="${element.text}">
                    <button  onclick="option()" class="b3" id="o${index}" > <i class="fa fa-cog"></i></button>
                </div>
                <div class="op">
                    <button onclick="checked()"   class="btnc"><i class="fa fa-check  check"></i> </button>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
                </div>`;
                    });
                    let notesElm = document.getElementById("notes");
                    if (notesObj.length != 0) {
                    notesElm.innerHTML = html;
                            }
            }

           
                // for media queries
                // function myFunction(x) {
                //     if (x.matches) { // If media query matches
                //       document.getById("n1").style.background="red";
                //     } else {  
                //         document.getById("n1").style.background="blue";
                //     }
                //   }
                  
                //   var x = window.matchMedia("(max-width: 500px)")
                //   myFunction(x) // Call listener function at run time
                //   x.addEventListener(myFunction) // Attach listener function on state changes


              //========== show Title bar========
        function AddTitle() {
            document.getElementById('addText2').style.display = 'block';
            document.getElementById('addText').style.top='2px';
            document.getElementById('plus').style.top='-26px';

            }
            function removeTitle(){
                document.getElementById('addText2').style.display = 'none';
                document.getElementById('addText').style.top='27px';
                document.getElementById('plus').style.top='9px'; }
