alert( "Do remember to copy the passwords if you need it🤸" );
  const createbtn = document.getElementById("createbtn");
  createbtn.addEventListener("click",()=>{
   
  const random = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9"];
   const postrandom = random[Math.floor(Math.random()*random.length)];
   //secondrandom
   const random1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","#","*","$","&","%","!","~","|","+","-",":",";","_","!","/"];
   const postrandom1 = random1[Math.floor(Math.random()*random1.length)];
   //thirdrandom
   const random2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   const postrandom2 = random2[Math.floor(Math.random()*random2.length)];
   //fourthrandom
   const random3 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   const postrandom3 = random3[Math.floor(Math.random()*random3.length)];
   //fiftyrandom
   const random4 =["-","#","*","$","&","%","!","~","|","+","-","_",":",";","—","–","!","/","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
      const postrandom4 = random4[Math.floor(Math.random()*random4.length)];
  //sixthrandom
   const postrandom5 = Math.floor(Math.random()*9)+1;
   //senventhrandom
   const random6 =["-","#","*","$","&","%","!","~","|","_","+","-",":",";","!","-","_",":",";","—","–","/","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
      const postrandom6 = random6[Math.floor(Math.random()*random6.length)];
   //eightrandom
   const postrandom7 = Math.floor(Math.random()*90)+1;
   
   
  document.getElementById("demo").value= "PASSWORD : " + postrandom + postrandom1 + postrandom2 + postrandom3 + postrandom4 + postrandom5 + postrandom6 + postrandom7;
  
  

  });
  const helpbtn = document.getElementById("helpbtn");
  helpbtn.addEventListener("click",function(){
  const help = document.getElementById("helpcontent");
  help.style.display="block";
  })
  const closebtn = document.getElementById("closehelp");
  closebtn.addEventListener("click",function(event){
  const help = document.getElementById("helpcontent");
  help.style.display="none";
  })
  const copybtn = document.getElementById("copybtn");

  copybtn.addEventListener('click',()=>{
    const copyinput = document.getElementById("demo");
    if(copyinput.value == ''){
        alert("CAN NOT COPY!! INPUT IS EMPTY")
    }
    else{
    copyinput.select(); 
    document.execCommand("copy");
    alert(" Copied  "+copyinput.value);}
})
