// undedifined = valeur par defaut d'une var non initialisee
var a;
console.log(a);

// null = similaire a un reset
var selectedObject = {
    name: "aurelle"
}
console.log(selectedObject);
selectedObject = null;
console.log(selectedObject);

//error : is not defined = the var is not defined
/* 
console.log(b);
*/

//Hosting phenomen for functions
addition(7,3);

function addition(a,c){
    console.log(a + c);
}