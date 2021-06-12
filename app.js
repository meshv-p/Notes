showNotes();
// var n = localStorage.getItem('notes');  // notes is an array of all things.
// var fav = localStorage.getItem('fav');
// console.log(fav)

// for search button 
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

    if (document.getElementById('opt').style.display != 'block') {
        document.getElementById('opt').style.display = 'block';     
        }
    else {
        document.getElementById('opt').style.display = 'none';   // optio.style.display
        }
        }         
        // end

       

     // removing notes
     function removed() {
        var y = document.getElementById('n1');
        y.remove(y.querySelector);
    }
       
   
        //   start // ============== Function to delete a note    
        function deleteNote(index){

        let notes = localStorage.getItem("notes");
        if (notes == null) {
        notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
            notesObj.splice(index,1);
           console.log("I am deleting", index);
           
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
           
            showNotes();
            // window.location.reload();
            let a1 = new Date();
            let a2 = `${a1.getHours()} : ${a1.getMinutes()} : ${a1.getSeconds()}`;
            document.getElementById('ti').innerHTML = a2;
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
                    <div class="notesn" id="todo">
                        <div class="noten" id="noten${index}">
                          <span   class="title"  id="checkc${index}"> ${element.title} </span> 
                          <span  class="notesm"  id="1c${index}" role="textbox" style="display:  block;">${element.text} </span>
                          <button  class="b3" id="o${index}"  onclick="opened(this.id)" > <i class="fa fa-cog"></i></button>  
                          <span id="ti"></span>
                        </div>
                        <div class="option" id="po${index}">
                    <button class="btn che" title="If Your notes is done You can tick cross." id="c${index}" onclick="checked(this.id)"><i class="fa fa-check " ></i></button> <!-- checked -->
                    <button class="btn remove" title="If it is done then remove Notes." onclick="deleteNote(this.id)" id="${index}" ><i class="fa fa-trash-alt" ></i></button> <!-- remove -->
                    <button class="btn pin" title="Favorite notes so You can see in favorite section."  id="${index}" onclick="star(this.id)"><i class="fa fa-star"></i></button> <!-- pinned -->
                    <button class="btn time1"  title="Put timer so You dont forget to do that." onclick="timer()"><i  class="fa fa-clock"></i></button><!--time-->
                    <hr id="hr21">
                    <button class="btn share" title="Share notes with Your friends and families member." onclick="share()"><i class="fa fa-share"></i></button> <!-- share -->
                    <hr id="hr22">
                    <div class="color">
                        <button class="btn red" title="Red" onclick="red()"></button> <!-- red -->
                        <button class="btn b" title="Blue" onclick="blue()"></button> <!-- blue -->
                        <button class="btn last g" title="Green" onclick="green()"></button><!--green  -->
                        <button class="btn yellow" title="Yellow" onclick="yellow()"></button>
                        <button class="btn li" title="LightGreen" onclick="lightgreen()"></button>
                        <button class="btn last sr" title="Silver" onclick="silver()"></button>
                    </div>
                    <div class="text">Colors</div>
                    <span class="font " id="ch" >Checked</span>
                    <span class="font " id="re" >Remove</span>
                    <span class="font " id="pi" >Pinned</span>
                    <span class="font " id="ti" >Timer</span>
                    <span class="font " id="sh" >Share</span>
                </div>

                    </div>`;  
                        /*    <div class="op" id="po${index}">
                            <button  id="c${index}"  onclick="checked(this.id)" title="checked" class="btnc outline"><i class="fa fa-check  check"></i> </button>
                            <button onclick="deleteNote(this.id)" id="${index}"  title="remove" class="remove trash outline"><i class="fa fa-trash tr" aria-hidden="true"></i></button>
                            <button class="gr outline" onclick="colors()"><i class="fa fa-greater-than"></i></button>                                  
                            <div class="colors" id="colorc${index}" onclick="colored(this.id)">
                                <button  id="b12" style="background: pink;border-radius: 7px; margin-left: 7px;" onclick="important()"><i class="fas fa-exclamation"></i></button>
                                <button onclick="red()"    title="red" class="btn red"  ></button>
                                <button onclick="green()"  title="green" class="btn  green"></button>
                                <button onclick="yellow()" title="yellow" class="btn yellow"></button>   
                            </div> 
                        </div>*/




                    });
                    let notesElm = document.getElementById("notes");
                    if (notesObj.length != 0) {
                    notesElm.innerHTML = html;
                            }
                     else {
                        notesElm.innerHTML = "Nothing to see your notes here. You haven't saved Your  notes. Just type Your notes  and hit plus button. ";
                     }       
            }
                 // for showing color options
             function colored(index) {
                console.log("i clicked" , index);
                var id = "color" + index;
                var index1 = document.getElementById(id);
                // console.log(index1);
                if(index1.style.display !='block') {
                index1.style.display = 'block';  
                // console.log('fired 1');
                }
                    else{
                index1.style.display = 'none'; 
                // console.log('fired 2');               
                 } 
                 }
                 //==========for all notes =============
                 function alln(){
                    //  console.log('hii');
                    this.active;
                    document.getElementById('notes').style.display ='block';
                    document.getElementById('n1').style.display ='block';
                    document.getElementById('fnotes').style.display ='none';
                 }
            //=============for favorites notes==============
               function favorite(){
                var c = localStorage.getItem('indexf');
                console.log(c);
                    var id = c;
                    var x = notesObj[id];  // its object 
                    console.log(x)
                    var name1 = x.title;
                    var text = x.text;
                    console.log(name1);
                    console.log(text);
                   document.getElementById('n1').style.display ='none';
                   document.getElementById('notes').style.display ='none';
                   document.getElementById('h2').style.display ='block';
                   document.getElementById('fnotes').style.display ='block';

                //    document.getElementById('fnotes').innerHTML = id;
                   document.getElementById('fnotes').innerHTML = ` 
                   <h2 id="h2">Favorite Notes</h2>
                   <div class="notesn" id="todo">
                   <div class="noten" >
                     <span   class="title"  > ${name1} </span> 
                     <span  class="notesm"  role="textbox" style="display:  block;">${text} </span>
                     <button  class="b3"  onclick="opened(this.id)" > <i class="fa fa-cog"></i></button>  
                     <span id="ti"></span>
                   </div>
                   <div class="option" >
               <button class="btn che" title="If Your notes is done You can tick cross." onclick="checked(this.id)"><i class="fa fa-check " ></i></button> <!-- checked -->
               <button class="btn remove" title="If it is done then remove Notes." onclick="deleteNote(this.id)"  ><i class="fa fa-trash-alt" ></i></button> <!-- remove -->
               <button class="btn pin" title="Favorite notes so You can see in favorite section."onclick="star(this.id)"><i class="fa fa-star"></i></button> <!-- pinned -->
               <button class="btn time1"  title="Put timer so You dont forget to do that." onclick="timer()"><i  class="fa fa-clock"></i></button><!--time-->
               <hr id="hr21">
               <button class="btn share" title="Share notes with Your friends and families member." onclick="share()"><i class="fa fa-share"></i></button> <!-- share -->
               <hr id="hr22">
               <div class="color">
                   <button class="btn red" title="Red" onclick="red()"></button> <!-- red -->
                   <button class="btn b" title="Blue" onclick="blue()"></button> <!-- blue -->
                   <button class="btn last g" title="Green" onclick="green()"></button><!--green  -->
                   <button class="btn yellow" title="Yellow" onclick="yellow()"></button>
                   <button class="btn li" title="LightGreen" onclick="lightgreen()"></button>
                   <button class="btn last sr" title="Silver" onclick="silver()"></button>
               </div>
               <div class="text">Colors</div>
               <span class="font " id="ch" >Checked</span>
               <span class="font " id="re" >Remove</span>
               <span class="font " id="pi" >Pinned</span>
               <span class="font " id="ti" >Timer</span>
               <span class="font " id="sh" >Share</span>
           </div>

               </div>`   
                   
                  
               }
               function imp(){
                var c = localStorage.getItem('indexf');
                   document.getElementById('fnotes').style.display ='block';
//                    console.log(c); 
                document.getElementById('fnotes').innerHTML = document.getElementById('me');


               }




               
               var fn = localStorage.setItem('fnote',fnote);
               var s = localStorage.getItem('fnote');
               var fnote = {
                   title : 'me' , name : 'patel',
                    title1: [ 12,'me']
               }
               
               var title1= [  fnote  , 'hi'];
              
               var t = fnote.title1 ;
                //   console.log(t);
                
                  var title = fnote.title;
                  var name = fnote.name;
                //   console.log(name);
               
               
               
               
                

                  // for checked notes options
             function checked(index) {
                console.log("i checked" , index);   // c0
                var id = "check" + index;
                var index2 = document.getElementById(id) ;
                var id1 = "1" + index;
                var text = document.getElementById(id1); 
                console.log(id1);
                if(index2.style.textDecoration !='line-through') {
                index2.style.textDecoration = 'line-through';  
                index2.style.opacity = '.8' ;
                text.style.opacity = '.7';
                }
                    else{
                index2.style.textDecoration = 'none'; 
                index2.style.opacity = '1' ;  
                text.style.opacity = '1';

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
      
        function submit(){
        //===================for timer set =============================
        // Set the date we're counting down to
        var NewDate = document.getElementById('Date').value; 
         var countDownDate = new Date(NewDate).getTime();
         console.log(NewDate);
         // Update the count down every 1 second
         var x1 = setInterval(function() {
         
           // Get today's date and time
           var now = new Date().getTime();
             
           // Find the distance between now and the count down date
           var distance = countDownDate - now;
             console.log(distance);
         
                     // If the count down is over, write some text 
           if (distance <= 0) {
             clearInterval(x1);
            //  alert('Time is out');
            
            
        var audio =  new Audio('jump.ogg');
        audio.play();
        }
    }, 1000); }
    
    
      
   
    

    function cancel(){
        console.log('cancel');
        clearInterval(x1);
    }



        //================for check =======================
            function check(){
                if(document.getElementById('t1').style.textDecoration !='line-through'){
                    document.getElementById('t1').style.textDecoration ='line-through';
                }
                else{
                    document.getElementById('t1').style.textDecoration ='none';
                }
            }
        //================for remove =======================
            function remove(){
                if(document.getElementById('n1').style.display !='none'){
                    document.getElementById('n1').style.display ='none';
                }
                else{
                    document.getElementById('n1').style.display ='block';
                }
            }
        //================for pinned=======================
            function star(index){
               console.log('pinned',index);
              var fav = index;
              localStorage.setItem('indexf',fav);
//                console.log(fav);
                
            } 
           
         
            
         //================for put timer =======================
            function timer(){
                if(document.getElementById('timer').style.display !='block'){
                    document.getElementById('timer').style.display ='block';
                }
                else{
                    document.getElementById('timer').style.display ='none';
                }
            }

        //================for share=======================
            function share(){
                // var link = "https://meshv-p.github.io/Notes";
                // console.log(link);
               if(navigator.share){
                   navigator.share({
                       title : 'meshv patel', url : 'https://meshv-p.github.io/Notes'
                   }).then(()=>{
                       alert("thanks");
                   }                                                         
                   )                                
                }               
            }
      
         //================for colors section======================

                //==================indianred========
                function important(){
                    if(document.getElementById('p1').style.backgroundColor != 'indianred'){
                        document.getElementById('bar').style.display = 'none';
                        document.getElementById('p1').style.backgroundColor = 'indianred'; 
                        var theme = document.getElementById('p1').style.backgroundColor; 
//                         console.log(theme);
                        localStorage.setItem('theme',theme);
                }
                    else{
                        document.getElementById('p1').style.backgroundColor= 'initial';
                        var theme = document.getElementById('p1').style.backgroundColor; 
//                             console.log(theme);
                            localStorage.setItem("theme", theme);
                    }
                }
                // =================red===============

                function red(){
                    if(document.getElementById('p1').style.backgroundColor != 'red'){
                        document.getElementById('p1').style.backgroundColor = 'red' ; 
                        var theme = document.getElementById('p1').style.backgroundColor; 
//                             console.log(theme);
                            localStorage.setItem("theme", theme);
                    }
                    else{
                        document.getElementById('p1').style.backgroundColor= 'initial';
                        var theme = document.getElementById('p1').style.backgroundColor; 
//                             console.log(theme);
                            localStorage.setItem("theme", theme);
                        
                    }
                }       
                // =================blue===============

                function blue(){
                    if(document.getElementById('p1').style.backgroundColor != 'blue'){
                        document.getElementById('p1').style.backgroundColor = 'blue' ; 
                        var theme = document.getElementById('p1').style.backgroundColor; 
//                             console.log(theme);
                            localStorage.setItem("theme", theme);
                    }
                    else{
                        document.getElementById('p1').style.backgroundColor= 'initial';
                        var theme = document.getElementById('p1').style.backgroundColor; 
//                             console.log(theme);
                            localStorage.setItem("theme", theme);
                        
                    }
                }       
            // =============Green=================================
            //=====================================    
                function green(){
                    if(document.getElementById('p1').style.backgroundColor != 'green'){
                        document.getElementById('p1').style.backgroundColor = 'green';

                          var theme = document.getElementById('p1').style.backgroundColor; 
//                             console.log(theme);
                            localStorage.setItem("theme", theme);
                    }
                    else{
                        document.getElementById('p1').style.backgroundColor = 'initial';
                    }
                }    
              // =============Yellow=================================
            //=====================================          
                function yellow(){
                    if(document.getElementById('p1').style.backgroundColor != 'yellow'){
                        document.getElementById('p1').style.backgroundColor = 'yellow'; 
                          var theme = document.getElementById('p1').style.backgroundColor; 
//                             console.log(theme);
                            localStorage.setItem("theme", theme);
                    }
                    else{
                        document.getElementById('p1').style.backgroundColor = 'initial';
                    }
                }       
              // =============lightgreen=================================
            //=====================================          
                function lightgreen(){
                    if(document.getElementById('p1').style.backgroundColor != 'lightgreen'){
                        document.getElementById('p1').style.backgroundColor = 'lightgreen'; 
                          var theme = document.getElementById('p1').style.backgroundColor; 
                            console.log(theme);
                            localStorage.setItem("theme", theme);
                    }
                    else{
                        document.getElementById('p1').style.backgroundColor = 'initial';
                    }
                }       
              // =============silver=================================
            //=====================================          
                function silver(){
                    if(document.getElementById('p1').style.backgroundColor != 'silver'){
                        document.getElementById('p1').style.backgroundColor = 'silver'; 
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
            
            // document.getElementById('p1').classList = 'plusm';
            //  document.getElementById('p1').style.left='320px'
            document.getElementById('addText2').style.display = 'block';
            if( window.matchMedia("(max-width:500px)").matches){
            document.getElementById('addText').style.top='-20px';
            addText2.style.width = '79%';
            addText2.style.margin = '0px 11px';
            p1.style.top = '-50px';
            }
            else{
            document.getElementById('addText').style.top='6px';
            }
             
          
            }
            //================= removing title =======================
            plus.addEventListener("click",function(){                    
                document.getElementById('addText2').style.display = 'none';
                document.getElementById('addText').style.top='9px';
                pl.style.top='9px';
             
                plus.classList.remove('active');
                
            })
                

                 // for showing setting options
             function opened(index) {
                // console.log("i clicked" , index);
                var id = "p" + index;
                var index1 = document.getElementById(id) ;
                // console.log(index1);
                if(index1.style.display !='block') {
                index1.style.display = 'block';  
                // console.log('fired 1');
                }
                    else{
                index1.style.display = 'none'; 
                // console.log('fired 2');               
                 } 
                 }          
