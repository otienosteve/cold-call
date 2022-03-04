

const students=["Paullete Adhiambo",
"Adlight Akinyi",
"Damaris Chepchirchir",
"Flora	Chepchirchir",
"Hanan	Ibrahim",
"Denis	Kagunda",
"Rose	kamau",
"Isabel	Karimi",
"Kabui	Kariuki",
"Richard Koinange",
"Sam Kuria",
"Catherine Marite",
"Pauline Momanyi",
"Martin	Muchai",
"John Muiruri",
"Eunice	Mungai",
"Milcah	Muraguri",
"Yvonne	Muthui",
"Ann Mwangi",
"Nancy Mwende",
"Ann Ndegwa",
"Lynn Nyangon",
"Beverly Odhiambo",
"John	Odhiambo",
"John	Onyaango",
"Joseph	Onyango",
"Catherine Otondi",
"William Owalla",
"Ruth Eva Wamuyu",
"Purity	Wanjiku",
"Andrian Weru"]
// console.log(students.length)
let indiceList=[];
let total=students.length
const button=document.getElementById('generate');
button.addEventListener('click',()=>{
function generateIndex(){
    let randomIndex=Math.floor(Math.random()*100);
    if(randomIndex>total-1){
        randomIndex=randomIndex.toString().split('').map((elem)=>parseInt(elem)).reduce((ac,val)=>ac+=val,0)
    }  
    
    if(indiceList.includes(randomIndex)){
        indiceList.unshit(randomIndex);
        generateIndex();
    }
    
    if(indiceList.length===30){
        indiceList=[];
        console.log("reset")
    }
    indiceList.push(randomIndex);
    console.log(randomIndex)
    console.log(indiceList)
    return randomIndex
}
para=document.getElementById('stud')
    
para.textContent=students[generateIndex()];
       

})