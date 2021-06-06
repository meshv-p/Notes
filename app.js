var index=0;

showNotes();
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
        if (cardTxt.includes(inputVal)) {
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

    if (document.getElementById('bar').style.display != 'block') {
        document.getElementById('bar').style.display = 'block';     
        }
    else {
        document.getElementById('bar').style.display = 'none';   // optio.style.display
        }
        }         
        // end

        //     // for removing bar
        //         function  removebar() {
        // document.getElementById('bar').style.display = 'none';
        //         }

                // let o${index} = document.getElementById('o${index}')
                // if( o$`{index}` == indexof(b`$`) ){
                //     if (document.getElementById('bar').style.display != 'none') {
                //         document.getElementById('bar').style.display = 'none';     
                //         }
                //     else {
                //         document.getElementById('bar').style.display = 'block';   // optio.style.display
                //         }
                // }
      // check notes(strick through) 
    //   function checked() {
    //     if (t1.style.textDecoration != 'none') {
    //         t1.style.textDecoration = 'none';
    //     }
    //     else {
    //         t1.style.textDecoration = 'line-through';
    //         // t1.style.textDecoration= 'line-through';
    //     }
    //} // end

     // removing notes
     function removed() {
        var y = document.getElementById('n1');
        y.remove(y.querySelector);
    }


    // function removed1() {
    //     var y = document.getElementById('n2');
    //     y.remove(y.querySelector);
    // }
        //   start // ============== Function to delete a note    
        function deleteNote(index) {
        //    console.log("I am deleting", index);

        let notes = localStorage.getItem("notes");
        if (notes == null) {
        notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
            notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        window.location.reload();

        showNotes();
            }   // end
         
           

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
               
            // index = index +1;
            // console.log(index);
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
                 <span   class="title"  id="c${index}"  >   ${element.title} </span> 
                  <span  class="notesm"  id="c1${index}" role="textbox" style="display:  block;"> ${element.text} </span>
                    <button  class="b3" id="o${index}"  onclick="set${index}()" > <i class="fa fa-cog"></i></button>
                    <span class="time" id="min${index}" ></span>
                </div>
                <div class="op" id="op${index}">
                    <button  id="check${index}"  title="checked" class="btnc"><i class="fa fa-check  check"></i> </button>
                    <button onclick="deleteNote(this.id)"  title="remove" class="remove trash"><i class="fa fa-trash tr" aria-hidden="true"></i></button>
                    
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

        //     var oindex = document.querySelector('.noten button');
        //     // notesObj.forEach(function (index) {
        //     // var opindex = document.getElementById(`op${index}`); 
        //     var opindex =document.querySelector('.op');

        //     (oindex).addEventListener('click',function () {
        //         if((opindex).style.display !='none') {
        //             (opindex).style.display = 'none'; }
        //             else{
        //                 (opindex).style.display = 'block'; } 
                    
        //    })
        
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

        function colors(){
                 if(color.style.display !='block' ){
                    color.style.display ='block';
                }
                else{
                    color.style.display ='none';
                }

        }

                //==================important========
                function important(){
                    if(document.getElementById('p1').style.backgroundColor != 'indianred'){
                        document.getElementById('bar').style.display = 'none';
                        document.getElementById('p1').style.backgroundColor = 'indianred'; 
                        var theme = document.getElementById('p1').style.backgroundColor; 
                        console.log(theme);
                        localStorage.setItem('theme',theme);
                }
                    else{
                        document.getElementById('p1').style.backgroundColor= 'initial';
                        var theme = document.getElementById('p1').style.backgroundColor; 
                            console.log(theme);
                            localStorage.setItem("theme", theme);

                    }
                

                }
                // for red colors 

                function red(){
                    if(document.getElementById('p1').style.backgroundColor != 'red'){
                        document.getElementById('bar').style.display = 'none';
                        document.getElementById('p1').style.backgroundColor = 'red' ; 
                        var theme = document.getElementById('p1').style.backgroundColor; 
                            console.log(theme);
                            localStorage.setItem("theme", theme);
                    }
                    else{
                        document.getElementById('p1').style.backgroundColor= 'initial';
                        var theme = document.getElementById('p1').style.backgroundColor; 
                            console.log(theme);
                            localStorage.setItem("theme", theme);
                        
                    }
                }       
                function green(){
                    if(document.getElementById('p1').style.backgroundColor != 'green'){
                        document.getElementById('p1').style.backgroundColor = 'green';
                        document.getElementById('bar').style.display = 'none';

                          var theme = document.getElementById('p1').style.backgroundColor; 
                            console.log(theme);
                            localStorage.setItem("theme", theme);
                    }
                    else{
                        document.getElementById('p1').style.backgroundColor = 'initial';
                    }
                }       
                function yellow(){
                    if(document.getElementById('p1').style.backgroundColor != 'yellow'){
                        document.getElementById('bar').style.display = 'none';
                        document.getElementById('p1').style.backgroundColor = 'yellow'; 
                          var theme = document.getElementById('p1').style.backgroundColor; 
                            console.log(theme);
                            localStorage.setItem("theme", theme);
                    }
                    else{
                        document.getElementById('p1').style.backgroundColor = 'initial';
                    }
                }       


                // for save in localstorage when reload page

                if(localStorage.theme != "" ){
                    p1.style.backgroundColor = localStorage.getItem('theme');
                } 
                else{
                    p1.style.backgroundColor = 'initial';
                }

      
              //========== show Title bar========
        function AddTitle() {
            document.getElementById('addText2').style.display = 'block';
            document.getElementById('addText').style.top='-6px';
            // var m = window.matchMedia("(max-width:350px)");
            // myFunction(m) // Call listener function at run time
            // m.addEventListener(myFunction);
            // function myFunction() {
            //     if(m.matches){        
            //         document.getElementById('pl').style.top='-4px'; 
            //         document.getElementById('pl').style.position='relative'; 
            //     }
            //     else{
            //     }
            // }   
            document.getElementById('plus').style.top='-33px';
            }

            plus.addEventListener("click",function(){                    
                document.getElementById('addText2').style.display = 'none';
                document.getElementById('addText').style.top='27px';
                pl.style.top='35px';
                plus.classList.remove('active');
                
            })
                // function fullscreen() {
                //     if(n1.style.display != 'block'){
                //         n1.classList.add('full');
                //     }
                    
                //     else {
                //         n1.classList.remove('full');

                //     }
                //     }
                // function checked() {
                //     // let x = document.getElementById('check0');
                //     // if( x.matches ){
                //     if (c0.style.textDecoration != 'none') {
                //     console.log('i am checked',0);
    
                //         c0.style.textDecoration = 'none';
                //     }
                //     else {
                //         c0.style.textDecoration = 'line-through';
                //         // t1.style.textDecoration= 'line-through';
                //     }
                  
                //     if (c1.style.textDecoration != 'none') {
                //     console.log('i am checked',0);
    
                //         c1.style.textDecoration = 'none';
                //     }
                //     else {
                //         c1.style.textDecoration = 'line-through';
                //         // t1.style.textDecoration= 'line-through';
                //     }    
                // }
                check0.addEventListener('click',function () {
                    if(c0.style.textDecoration !='line-through') {
                        c0.style.textDecoration = 'line-through'; c0.style.opacity = '.8' ;}
                        else{
                        c0.style.textDecoration = 'none'; c0.style.opacity = '1';   } 
                        
               })
                check1.addEventListener('click',function () {
                    if(c1.style.textDecoration !='none') {
                        c1.style.textDecoration = 'none';
                        c1.style.opacity = '1';
                    }
                        else{
                        c1.style.textDecoration = 'line-through';
                        c1.style.opacity = '.8';
                    
                    } 
                        
               })
                check2.addEventListener('click',function () {
                    if(c2.style.textDecoration !='none') {
                        c2.style.textDecoration = 'none';
                        c2.style.opacity = '1';
                    }
                        else{
                        c2.style.textDecoration = 'line-through';
                        c2.style.opacity = '.8';
                    
                    } 
                        
               })
                check3.addEventListener('click',function () {
                    if(c3.style.textDecoration !='none') {
                        c3.style.textDecoration = 'none';
                        c3.style.opacity = '1';
                    }
                        else{
                        c3.style.textDecoration = 'line-through';
                        c3.style.opacity = '.8';
                    
                    } 
                        
               }) 

               function set0(){
                if(document.getElementById('op0').style.display !='block') {
                    document.getElementById('op0').style.display = 'block';  
                        console.log('fired 1');
                 }
                    else{
                    document.getElementById('op0').style.display = 'none'; 
                        console.log('fired 2');
                } 
               }


               function set1()  {
                if(op1.style.display !='block') {
                    op1.style.display = 'block'; }
                    else{
                    op1.style.display = 'none'; } 
                    
           } //2
           function set2() {
                if(op2.style.display !='block') {
                    op2.style.display = 'block'; }
                    else{
                    op2.style.display = 'none'; } 
                    
           }
           function set3(){
                if(op3.style.display !='block') {
                    op3.style.display = 'block'; }
                    else{
                    op3.style.display = 'none'; } 
                    
           }//4
           function set4() {
                if(op4.style.display !='block') {
                    op4.style.display = 'block'; }
                    else{
                    op4.style.display = 'none'; } 
                    
           }
           function set5() {
                if(op5.style.display !='block') {
                    op5.style.display = 'block'; }
                    else{
                    op5.style.display = 'none'; } 
                    
           }
           function set6() {
                if(op6.style.display !='block') {
                    op6.style.display = 'block'; }
                    else{
                    op6.style.display = 'none'; } 
                    
           } //7
           function set7() {
                if(op7.style.display !='block') {
                    op7.style.display = 'block'; }
                    else{
                    op7.style.display = 'none'; } 
                    
           }
           function set8() {
                if(op8.style.display !='block') {
                    op8.style.display ='block'; }
                    else{
                    op8.style.display = 'none'; } 
                    
           }
           function set9() {
                if(op9.style.display !='block') {
                    op9.style.display = 'block'; }
                    else{
                    op9.style.display = 'none'; } 
                    
           }
           function set10() {
                if(op10.style.display !='block') {
                    op10.style.display = 'block'; }
                    else{
                    op10.style.display = 'none'; } 
                    
           }
           function set11() {
                if(op11.style.display !='block') {
                    op11.style.display = 'block'; }
                    else{
                    op11.style.display = 'none'; } 
                    
           }
           function set12() {
                if(op12.style.display !='block') {
                    op12.style.display = 'block'; }
                    else{
                    op12.style.display = 'none'; } 
                    
           }
           function set13(){
                if(op13.style.display !='block') {
                    op13.style.display = 'block'; }
                    else{
                    op13.style.display = 'none'; } 
                    
           }
           function set14() {
                if(op14.style.display !='block') {
                    op14.style.display = 'block'; }
                    else{
                    op14.style.display = 'none'; } 
                    
           } //15
           function set15() {
                if(op15.style.display !='block') {
                    op15.style.display = 'block'; }
                    else{
                    op15.style.display = 'none'; }                    
           }
           function set16() {
                if(op16.style.display !='block') {
                    op16.style.display = 'block'; }
                    else{
                    op16.style.display = 'none'; }                    
           }
           function set17() {
                if(op17.style.display !='block') {
                    op17.style.display = 'block'; }
                    else{
                    op17.style.display = 'none'; }                    
           }
           function set18() {
                if(op18.style.display !='block') {
                    op18.style.display = 'block'; }
                    else{
                    op18.style.display = 'none'; }                    
           }
           function set19() {
                if(op19.style.display !='block') {
                    op19.style.display = 'block'; }
                    else{
                    op19.style.display = 'none'; }                    
           } //20
           function set20() {
                if(op20.style.display !='block') {
                    op20.style.display = 'block'; }
                    else{
                    op20.style.display = 'none'; }                    
           }
        //    var i = 0;
        // //    var index;
        //     for ( i=0; i= index;i++){
        //         oi.addEventListener('click',function () {
        //             console.log('here');
        //             if(opi.style.display !='none') {
        //                 opi.style.display = 'none';
        //                 console.log('here2');
        //             }
        //                 else{
        //                 opi.style.display = 'block'; } 
                        
        //        })
        //     }
