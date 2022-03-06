//Title- Cold Call program 
//Below is the list of students 
const students=["Paullete Adhiambo","Adlight Akinyi","Damaris Chepchirchir","Flora	Chepchirchir","Hanan	Ibrahim","Denis	Kagunda","Rose	kamau","Isabel	Karimi",
"Kabui	Kariuki","Richard Koinange","Sam Kuria","Catherine Marite","Pauline Momanyi","Martin	Muchai","John Muiruri","Eunice	Mungai","Milcah	Muraguri",
"Yvonne	Muthui","Ann Mwangi","Nancy Mwende","Ann Ndegwa","Lynn Nyangon","Beverly Odhiambo","John	Odhiambo","John	Onyaango","Joseph	Onyango","Catherine Otondi",
"William Owalla","Ruth Eva Wamuyu","Purity	Wanjiku","Andrian Weru","Already displayed this...Looking for another"]
//we are going to select one element from the above array by referncing a random index




let total=students.length //get the total length of students
let indiceList=[]; //will store all logged indices we store it outside the button body so as not to autorefresh everytime
const button=document.getElementById('generate'); //get the button element from the html code and place it in a javascript variable
function generateIndex(){
    let exists=false;
    let randomIndex=Math.floor(Math.random()*100); //code to generate a random number which we will use to specify an index in our array
    if(randomIndex>total-2){ //confirm if the random number generated is not greater than our total number of indices
        randomIndex=randomIndex.toString().split('').map((elem)=>parseInt(elem)).reduce((ac,val)=>ac+=val,0)
        // The code above will  set a new value to random index
        //it takes the index that is greater than our array Size and converts it to a string --to String methof [toString()]
        // the code the converts it to an array --split method [.split()]
        //it then uses the map method to convert the array string members into integers
        //it then uses the reducer method to add the numbers 
        //The final result is what is stored in the randomIndex variable
    }  
    //Below We confirm if the randomIndex had already been output, if so we perform recursion, the function calls itself 
    if(indiceList.includes(randomIndex)){
        exists=true
        generateIndex();
    }
    //Below we confirm if the indices list is equal to 30 if so we flush it
    if(indiceList.length===30){
        indiceList=[];
    }
    indiceList.push(randomIndex); // here we add the randomIndex to the indices List
    console.log(randomIndex)
    console.log(indiceList)
    //if the element does not exist we return the random Index else we return the default value at the 31st index
    if(exists!==true){
        return randomIndex
    }else{
        return 31
    }
}
// The event listener  is added to the button element
button.addEventListener('click',()=>{
para=document.getElementById('stud') // we get the paragraph from the document tree
para.textContent=students[generateIndex()]; //we set the paragraph textContent property to the student array elemenmt at the index value we get from the generateIndex function
})