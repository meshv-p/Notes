

// function dark(){
//     if( onclick()== true ){

//         document.getElementById('body').className= 'darkmode';
//     }
//     document.getElementById('body').className= 'darkmode';

// search option
// serch for
  let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noten');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("span")[0].innerText;
        if (cardTxt.includes(cardTxt)) {
            element.style.display = "block";
            // cardTxt.style.color="yellow";  
        }
        else{
            element.style.display = "none";
        }
       
        // console.log(cardTxt);
    })
}) 


// showing setting Option    // for 1 notes
function opt() {

    if (document.getElementById('bar').style.display != 'none') {
        document.getElementById('bar').style.display = 'none';     
        }
    else {
        document.getElementById('bar').style.display = 'block';   // optio.style.display
        }
        }    // end

            // for removing bar
                function  removebar() {
        document.getElementById('bar').style.display = 'none';
                }

                // let o${index} = document.getElementById('o${index}')
                // if( o$`{index}` == indexof(b`$`) ){
                //     if (document.getElementById('bar').style.display != 'none') {
                //         document.getElementById('bar').style.display = 'none';     
                //         }
                //     else {
                //         document.getElementById('bar').style.display = 'block';   // optio.style.display
                //         }
                // }



        // for 2 notes 
        function opt1() {
            if (optio1.style.display != 'none') {
                optio1.style.display = 'none';
            }
            else {
                optio1.style.display = 'block';
            }
        }   // end




        


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








        showNotes();

        // If user adds a note, add it to the localStorage
       let addBtn = document.getElementById('plus')
        addBtn.addEventListener("click", function(e) {
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
            // console.log(notesObj);
            //     document.getElementById("plus").className= "rotate";
            //     document.getElementById('done').className="done";
               
    



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
                 <span   class="title"   >   ${element.title} </span> 
                  <span  class="notesm" role="textbox" style="display:  block;"> ${element.text} </span>
                    <button  onclick="option()" class="b3" id="o${index}" > <i class="fa fa-cog"></i></button>
                    <span class="time" id="min${index}" ></span>
                </div>
                <div class="op">
                    <button onclick="checked()"   class="btnc"><i class="fa fa-check  check"></i> </button>
                    <button id="${index+1}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
                </div>`;
                    });
                    let notesElm = document.getElementById("notes");
                    if (notesObj.length != 0) {
                    notesElm.innerHTML = html;
                            }
                     else {
                        notesElm.innerHTML = "Nothing to see your notes here. You haven't saved Your  notes. Just type Yuor notes and hit plus button. ";
                     }       
            }
            active();
            function active() {
                
            
            const addText = document.querySelector('.footer input');
            const plus = document.querySelector('.plus1 button');
            addText.onkeyup =()=>{
                let dec = addText.value;
        if(addText.val !=0){
            plus.classList.add('active');
        }
        else{
            plus.classList.remove('active');
        }
        } }
              

              //========== show Title bar========
        function AddTitle() {
            document.getElementById('addText2').style.display = 'block';
            document.getElementById('addText').style.top='2px';
            document.getElementById('plus').style.top='-24px';
            

            }

            plus.addEventListener("click",function(){
                    
                document.getElementById('addText2').style.display = 'none';
                document.getElementById('addText').style.top='27px';
                plus.style.top='-1px';
                plus.classList.remove('active');
                
            })

        
            // window.location.reload();
                
            //     var d = new Date();
            //     var n = d.getUTCSeconds();
            //     document.getElementById("min2").innerHTML = n;
              
            
            
            
               








