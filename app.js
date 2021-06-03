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
                 <span   class="title"   >   ${element.title} </span> 
                  <span  class="notesm" role="textbox" style="display:  block;"> ${element.text} </span>
                    <button  class="b3" id="o${index}" > <i class="fa fa-cog"></i></button>
                    <span class="time" id="min${index}" ></span>
                </div>
                <div class="op" id="op${index}">
                    <button onclick="checked()"   class="btnc"><i class="fa fa-check  check"></i> </button>
                    <button onclick="deleteNote(this.id)" class="remove trash"><i class="fa fa-trash tr" aria-hidden="true"></i></button>
                    
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
              

              //========== show Title bar========
        function AddTitle() {
            document.getElementById('addText2').style.display = 'block';
            document.getElementById('addText').style.top='-6px';
            document.getElementById('plus').style.top='-33px';
            

            }

            plus.addEventListener("click",function(){
                    
                document.getElementById('addText2').style.display = 'none';
                document.getElementById('addText').style.top='27px';
                plus.style.top='-1px';
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
        



           o0.addEventListener('click',function () {
                if(op0.style.display !='none') {
                    op0.style.display = 'none'; }
                    else{
                    op0.style.display = 'block'; } 
                    
           })
           o1.addEventListener('click',function () {
                if(op1.style.display !='none') {
                    op1.style.display = 'none'; }
                    else{
                    op1.style.display = 'block'; } 
                    
           })  //2
           o2.addEventListener('click',function () {
                if(op2.style.display !='none') {
                    op2.style.display = 'none'; }
                    else{
                    op2.style.display = 'block'; } 
                    
           })
           o3.addEventListener('click',function () {
                if(op3.style.display !='none') {
                    op3.style.display = 'none'; }
                    else{
                    op3.style.display = 'block'; } 
                    
           }) //4
           o4.addEventListener('click',function () {
                if(op4.style.display !='none') {
                    op4.style.display = 'none'; }
                    else{
                    op4.style.display = 'block'; } 
                    
           })
           o5.addEventListener('click',function () {
                if(op5.style.display !='none') {
                    op5.style.display = 'none'; }
                    else{
                    op5.style.display = 'block'; } 
                    
           })
           o6.addEventListener('click',function () {
                if(op6.style.display !='none') {
                    op6.style.display = 'none'; }
                    else{
                    op6.style.display = 'block'; } 
                    
           }) //7
           o7.addEventListener('click',function () {
                if(op7.style.display !='none') {
                    op7.style.display = 'none'; }
                    else{
                    op7.style.display = 'block'; } 
                    
           })
           o8.addEventListener('click',function () {
                if(op8.style.display !='none') {
                    op8.style.display = 'none'; }
                    else{
                    op8.style.display = 'block'; } 
                    
           })
           o9.addEventListener('click',function () {
                if(op9.style.display !='none') {
                    op9.style.display = 'none'; }
                    else{
                    op9.style.display = 'block'; } 
                    
           })
           o10.addEventListener('click',function () {
                if(op10.style.display !='none') {
                    op10.style.display = 'none'; }
                    else{
                    op10.style.display = 'block'; } 
                    
           })
           o11.addEventListener('click',function () {
                if(op11.style.display !='none') {
                    op11.style.display = 'none'; }
                    else{
                    op11.style.display = 'block'; } 
                    
           })
           o12.addEventListener('click',function () {
                if(op12.style.display !='none') {
                    op12.style.display = 'none'; }
                    else{
                    op12.style.display = 'block'; } 
                    
           })
           o13.addEventListener('click',function () {
                if(op13.style.display !='none') {
                    op13.style.display = 'none'; }
                    else{
                    op13.style.display = 'block'; } 
                    
           })
           o14.addEventListener('click',function () {
                if(op14.style.display !='none') {
                    op14.style.display = 'none'; }
                    else{
                    op14.style.display = 'block'; } 
                    
           }) //15
           o15.addEventListener('click',function () {
                if(op15.style.display !='none') {
                    op15.style.display = 'none'; }
                    else{
                    op15.style.display = 'block'; }                    
           })
           o16.addEventListener('click',function () {
                if(op16.style.display !='none') {
                    op16.style.display = 'none'; }
                    else{
                    op16.style.display = 'block'; }                    
           })
           o17.addEventListener('click',function () {
                if(op17.style.display !='none') {
                    op17.style.display = 'none'; }
                    else{
                    op17.style.display = 'block'; }                    
           })
           o18.addEventListener('click',function () {
                if(op18.style.display !='none') {
                    op18.style.display = 'none'; }
                    else{
                    op18.style.display = 'block'; }                    
           })
           o19.addEventListener('click',function () {
                if(op19.style.display !='none') {
                    op19.style.display = 'none'; }
                    else{
                    op19.style.display = 'block'; }                    
           }) //20
           o20.addEventListener('click',function () {
                if(op20.style.display !='none') {
                    op20.style.display = 'none'; }
                    else{
                    op20.style.display = 'block'; }                    
           })






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









