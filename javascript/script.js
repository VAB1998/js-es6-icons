/*
Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
    {
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}

];


/*
-Milestone 1: Partendo dalla seguente struttura dati, 
mostriamo in pagina tutte le icone disponibili come da layout.
*/


for(item of icons){
    //Destructuring each object in the array
    const {name, prefix, type, family} = item;

    //Show the icons in the webpage
    document.getElementById('my_icons').innerHTML += `
    <div class="col p-4">
        <i class="${family} ${prefix+name} fa-3x d-block" style="color: }"></i>
        <span>${name} </span>
    </div>`
}


/*
Milestone 2: Coloriamo le icone per tipo
*/

//creare un array che mi da tutti i tipi una volta
//creare un array che contiene  colori quanti sono i tipi
const typesList = [];
const colorsList = [];
for(item of icons){
    if(!typesList.includes(item.type)){
        typesList.push(item.type)
        colorsList.push(getRandomHEXColor())
    }
}


// icons.forEach((item) =>{
//     typesList.forEach((typesListitem, index) =>{
//     if(item.type == typesListitem){
//         item.color = colorsList[index];
//     } else if(item.type == typesListitem) {
//         item.color = colorsList[index];
//     } else if(item.type == typesListitem) {
//         item.color = colorsList[index];
//     }});
// });

//Indipendentemente da quanti 'type' ci sono verrà assegnato loro un colore che dipende dal tipo  
icons.forEach((item) =>{
    let i = 0;
    //Ciclo che dipende dal numero di type
    while(i < typesList.length){
        if(item.type == typesList[i]){
            item.color = colorsList[i];
        }
        i++;
    }
});
console.log(typesList);
console.log(colorsList);

console.log(icons);








function pushNonRepeatedItemsInAnArray(receiverArray, itemToPush){

    if (!receiverArray.includes(itemToPush)){
  
      receiverArray.push(itemToPush);
    }
  }





/*
Milestone 3: Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

// ++++++Functions++++++
function getRandomHEXColor() { return '#' + Math.floor(Math.random()*16777215).toString(16); }