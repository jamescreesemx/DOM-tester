/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const studentList = document.querySelectorAll(".student-list");
const studItem = document.getElementsByClassName("student-item cf");
const studDetails = document.querySelectorAll(".student-details");
const joiDet = document.querySelectorAll('.joined-details');

const divPage = document.getElementsByClassName("page");

const pagesUL = pages.querySelector('#pagesUL');


// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
window.addEventListener("load", function(){
for (let i= 0; i< studItem.length; i++){
  if(i>=9){
    studItem[i].style.display= "none";
   }
   else if (i<=9){
     studItem[i].style.display= "block";
   }
 }


// Create and append the pagination links - Creating a function that can do this is a good approach
const pagination=()=>{
  const newDiv =document.createElement("div")
  newDiv.className = ('pagination');

const pages = document.getElementById('pages');


const pagesUL = pages.querySelector('ul');

/*pages.appendChild()
newDiv.appendChild(ul);
ul.appendChild(liPage);
button.appendChild(anchor);
liPage.appendChild(button);*/

}

function totalPages(){

let totalPages = Math.ceil(studItem.length/10);
return totalPages;

}


//pages.appendChild(link);

for(let i=1; i<= totalPages(); i++ ){
let  liPage = document.createElement('li');
const button= document.createElement('button');
let  anchor =document.createElement('a');
anchor.className= 'active';
anchor.href='#';
anchor.textContent= i;
button.appendChild(anchor);
pages.appendChild(button);


}

});


// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
