
var d1 = '.';
var d2 = '-';
var mc1 = "";
var myinput;
var inp;

function setup() {
  noCanvas();
  myinput = createInput();
  myinput.changed(almc);
  //inp = input(newText);
  
}

function draw() {
  background(220);
}

function almc() {
  var newText = myinput.value();
 
  if ( newText == '.-') {
   mc1 = "a" ;
  }
  // console.log("a");

  
   if ( newText == '-...') {
     mc1 = "b" ;
   }
  // console.log("b");

  
    if ( newText == '-.-.') {
      mc1 = "c" ;
    }
  // console.log("c");
  
  
   if ( newText == '-..') {
    mc1 = "d" ;
   }
  // console.log("d");

   if ( newText == '.') {
    mc1 = "e" ;
   }
  //console.log("e");
  
  
   if ( newText == '..-.') {
    mc1 = "f" ;
   }
  //   console.log("f");
  
  
   if ( newText == '--.') {
    mc1 = "g" ;
   }
  // console.log("g");
  
  
   if ( newText == '....') {
    mc1 = "h" ;
   }
  // console.log("h");
  
  
   if ( newText == '..') {
    mc1 = "i" ;
   }
  //console.log("i");
  
  
   if ( newText == '.---') {
    mc1 = "j" ;
   }
  //console.log("j");
  
  
   if ( newText == '-.-') {
    mc1 = "k" ;
   }
  //console.log("k");

  
   if ( newText == '.-..') {
    mc1 = "l" ;
   }
  
  
   if ( newText == '--') {
    mc1 = "m" ;
   }
  
  
   if ( newText == '-.') {
    mc1 = "n" ;
   }
  
  
   if ( newText == '---') {
    mc1 = "o" ;
   }
  
  
   if ( newText == '.--.') {
    mc1 = "p" ;
   }
  
  
   if ( newText == '--.-') {
    mc1 = "q" ;
   }
  
  
   if ( newText == '.-.') {
    mc1 = "r" ;
   }
  
  
   if ( newText == '...') {
    mc1 = "s" ;
   }
  
  
   if ( newText == '-') {
    mc1 = "t" ;
   }
  
  
   if ( newText == '.--') {
    mc1 = "u" ;
   }
  
  
   if ( newText == '...-') {
    mc1 = "v" ;
   }
  
  
   if ( newText == '.--') {
    mc1 = "w" ;
   }
  
  
   if ( newText == '-..-') {
    mc1 = "x" ;
   }
  
  
   if ( newText == '-.--') {
    mc1 = "y" ;
   }
  
  
   if ( newText == '--..') {
    mc1 = "z" ;
   }
  

 if (mc1 != "") {
    console.log(mc1);
  }  else {
  console.log("try again");
  }

}



