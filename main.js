console.log("You are Welcome!");

// sans rien devant la vriable est publique
title = "The First Author: ";
name = "Aurelle " ;
othername = "Auri Stark";
// avec var la variable est declaree localement ne peut pas etre utilisee dans le fichier html
var x = 1234;
var y = 234;

console.log( name + x);
xToString = x.toString();
console.log(xToString.length);

var position = title.indexOf("Author");
console.log(position);

var replacedValue = title.replace("Author", "new Authorin");
console.log(replacedValue + othername);

//operateurs
var result = x-y;
console.log("x-y = " + result);
result++;
console.log(result);

var myBoolean = (x===5); // x =1234; (x!== 5)? // different (x<=1234)? (x>31452)? // &&; ||
console.log(myBoolean);

// if else
if (myBoolean){
    console.log("Code execute");
} else if(x!==5){
    console.log("la condition 1 n'est pas vrai mais la 2 l'est."); // ducoup le else ne sera plus execute
    if(x>1000){
        console.log("condition verifie avec succes: " + x + " > 1000");
    }
} else {
    console.log("la condition est fausse.");
}

// switch case
var favoriteColor = "blue";

switch(favoriteColor){
    case "red":
    case "blue":
        console.log("le Rouge et le bleue c'est trop beau");
        break;
    case "yellow":
        console.log("j'aimerais bien avoir une voiture jaune");
        break;
    default:
        console.log("ce serait un plaisir pour moi de partager ta couleur preferee");
}

// while loop
number = 0; // public
while(number < 4){
    console.log("The while Loop : " +number);
    number++;
}

//do while
number = 2;
do{
    console.log( "The do Loop: " + number);
    number++; 
} 
while(number!==0 && number<5)

// for loop
for(x=1230; x<=1235; x++){
    console.log("For Loop: " + x);
}

//function

/* onclick btn
function showmessage(parameter){
    
}
*/

function multiply(number1,number2){ //Scope : when The function is locsly defined
    var resultMultiply = number1*number2;
    return resultMultiply;
}
var a = 10;
var c = 5;
var mult = multiply(a,c);
console.log(mult);


//array
var fruits =["pommes", "peches", "poirres", "Fraises"];

console.log(fruits.length);
console.log(fruits);
for(i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
fruits.pop();
console.log(fruits);

fruits.push("Kiwi");
console.log(fruits);

var Agrumes = fruits.slice(2,4);
console.log(Agrumes);

var myArray =[[1 , 2] , [5 , 6], [8 , 9]];
console.log(myArray[0][1]);




/*function message(){
    onclick="console.log(1+2);
}*/


// Faire basculer les elements D'une page a un angle qui n est pas defini

var elements = document.querySelectorAll('div,p,span,img,a,body'); 
for (var i=0; i< elements.length; i++){ 
    elements[i].style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
} 