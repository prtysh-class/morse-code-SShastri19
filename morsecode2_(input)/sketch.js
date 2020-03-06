var tf;
var al1 = "";
var d1 = ".";
var d2 = "-";
var inp;
var myinput;


function setup() {
  createCanvas(400, 400);
  myinput = createInput();
  myinput.changed(themorse);
  // inp = input(newText);
}

function draw() {
  background(220);
}

function themorse() {
  var newText = myinput.value();
  // console.log(tf.value());
 if (newText == 'a')
  {
     al1 = ".-" ;
  }
  //console.log(al1);
  
   if (newText == 'b')
  {
    al1 = "-..." ;
  }
  //console.log(al1);
  
  
   if (newText == 'c')
  {
    al1 = "-.-." ;
  }
 // console.log(al1);
  
   if (newText == 'd')
  {
    al1 = "-.." ;
  }
 // console.log(al1);
  
   if (newText == 'e')
  {
    al1 = "." ; 
  }
  //console.log(al1);
  
   if (newText == 'f')
  {
    al1 = "..-." 
  }
//   console.log(al1);
  
   if (newText == 'g')
  {
    al1 = "--." 
  }
//   console.log(al1)
  
   if (newText == 'h')
  {
    al1 = "...." 
  }
//   console.log(al1);
  
   if (newText == 'i')
  {
    al1 = ".." ;
  }
//   console.log(al1);
  
   if (newText == 'j')
  {
    al1 = ".---" ;
  }
//   console.log(al1);
  
   if (newText == 'k')
  {
    al1 = "-.-" ;
  }
//   console.log(al1);
  
   if (newText == 'l')
  {
    al1 = ".-.." ;
  }
//   console.log(al1);
  
   if (newText == 'm')
  {
    al1 = "--" ;
  }
//   console.log(al1);
  
   if (newText == 'n')
  {
    al1 = "-." ;
  }
//   console.log(al1);
  
   if (newText == 'o')
  {
    al1 = "---" ;
  }
//   console.log(al1);
  
   if (newText == 'p')
  {
    al1 = ".--." ;
  }
//   console.log(al1);
  
   if (newText == 'q')
  {
    al1 = "--.-" ;
  }
//   console.log(al1);
  
   if (newText == 'r')
  {
    al1 = ".-." ;
  }
//   console.log(al1);
  
   if (newText == 's')
  {
    al1 = "..." ;
  }
//   console.log(al1);
  
   if (newText == 't')
  {
    al1 = "-" ;
  }
//   console.log(al1);
  
   if (newText == 'u')
  {
    al1 = "..-" ;
  }
//   console.log(al1);
  
   if (newText == 'v')
  {
    al1 = "...-" ;
  }
//   console.log(al1);
  
   if (newText == 'w')
  {
    al1 = ".--" ;
  }
//   console.log(al1);
  
   if (newText == 'x')
  {
    al1 = "-..-" ;
  }
//   console.log(al1);
  
   if (newText == 'y')
  {
    al1 = "-.--" ;
  }
//   console.log(al1);
  
   if (newText == 'z')
  {
    al1 = "--.." ;
  }
//   console.log(al1);
  
  if (al1 != "") {
    console.log(al1);
  }  else {
  console.log("stop");
  }
  
}

