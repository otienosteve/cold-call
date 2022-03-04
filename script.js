

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
const button=document.getElementById('generate');
button.addEventListener('click',()=>{
let randomIndex=Math.floor(Math.random()*100);
let total=students.length

para=document.getElementById('stud')
    if(randomIndex>total-1){
        let tens=randomIndex.toString().split('').map((elem)=>parseInt(elem)).reduce((ac,val)=>ac+=val,0)
        
        para.textContent=students[tens];
        
        }else{
            para.textContent=students[randomIndex];
        }


})