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
//-------Milestone 1------ 
//Partendo dalla seguente struttura dati, mostriamo in pagina tutte le icone disponibili come da layout.


//------Milestone 2------ 
// Coloriamo le icone per tipo

//Create an array with all the types values not repeated
const typesList = [];
for(item of icons){
    pushNonRepeatedItemsInAnArray(typesList, item.type);
}

//Create an araay wich contains as many colors as are the types in the icons objects
const colorsList = [];
for(item of typesList){
    colorsList.push(getRandomHEXColor());
}

//Indipendentemente da quanti 'type' ci sono verrà assegnato loro un colore che dipende dal tipo  
icons.forEach((item) =>{
    
    //Ciclo che dipende dal numero di type
    typesList.forEach((typesListItem, typesListIndex) => {
        if(item.type == typesListItem){//ternary operator
            item.color = colorsList[typesListIndex];
        }
    
    });
});



const pageIcons = document.getElementById('my_icons');
writeArrayToPage(icons, pageIcons)

//Check
console.log(typesList);
console.log(colorsList);
console.log(icons);

// ++++++Functions++++++
//------Milestone 1------
/**
 * Writes the array to the HTML page
 * @param {array} array Array to write
 * @param {object} page HTML object where to write the array
 */
function writeArrayToPage(array, page){
    for(item of array){
        //Destructuring each object in the array
        const {name, prefix, type, family, color} = item;
    
        //Show the icons in the webpage
        page.innerHTML += `
        <div class="col py-3 mx-3 rounded border border-dark">
            <i class="${family} ${prefix+name} fa-3x d-block" style="color: ${color}"></i>
            <span>${name} </span>
        </div>`
    }
}

//------Milestone 2------
/**
  * Pushes the items in an array that are not already in it.
  * @param {array} receiverArray The array in which the elements are pushed.
  * @param {*} itemToPush The item to push.
  */
 function pushNonRepeatedItemsInAnArray(receiverArray, itemToPush){

    if (!receiverArray.includes(itemToPush)){
      receiverArray.push(itemToPush);
    }
}

function getRandomHEXColor() { return '#' + Math.floor(Math.random()*16777215).toString(16);}





//------Milestone 1------
// for(item of icons){
//     //Destructuring each object in the array
//     const {name, prefix, type, family, color} = item;

//     //Show the icons in the webpage
//     document.getElementById('my_icons').innerHTML += `
//     <div class="col p-4">
//         <i class="${family} ${prefix+name} fa-3x d-block" style="color: ${color}"></i>
//         <span>${name} </span>
//     </div>`
// }

//------Milestone 2------
// const typesList = [];
// const colorsList = [];
// for(item of icons){
//     if(!typesList.includes(item.type)){
//         typesList.push(item.type)
//         colorsList.push(getRandomHEXColor())
//     }
// }


/*
-Milestone 3: Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

// let selectType = document.getElementById('select_type');
// typesList.forEach((item) =>{
//     selectType.innerHTML +=`
//     <option class="option_type" value="${item}">${item}</option>
//     `;
// });

// const optionType = document.getElementsByClassName('option_type',);

// selectType.addEventListener('change', () =>{
   
//     let ciccio = [];
//     //Check
//     console.log("Dentro event listener");
//     console.log(selectType.value);
//     ciccio = icons.filter((items) => items.type == selectType.value);
//     if (selectType.value == 'all') {
       
//         ciccio = icons;
//     }
// console.log(ciccio);
