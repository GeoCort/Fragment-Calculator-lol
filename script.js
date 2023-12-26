//origin fragment cost for initial origin 
// 100 replaces 0 for future origins
origin_table =[0,30,35,40,45,50,55,60,65,200,80,90,100,110,120,130,140,150,160,350,170,180,190,200,210,220,230,240,250,500];
//hexa skill table
hexaSkillTable = [50,15 ,18,20,23,25,28.30,33,100,40,45,50,55,60,65,70,75,80,175,85,90,95,100,105,110,115,120,125,250] 
//Hexa Boost Cores
hexaCoreTable = [75,23,27,30,34,38,42,45,49,150,60,68,75,83,90,98,105,113,120,263,128,135,143,150,158,165,173,180,188,375]


let origin = document.getElementById("origin")
let totalFrags = document.getElementById("totalFrag")
// totalFrags.textContent
console.log(origin.value)

origin.addEventListener("change",()=>{

    calc(parseInt(origin.value))
})

function calc(origin=0, mastery=0,boost1=0,boost2=0,boost3=0,boost4=0){
    let total =0;
    let totalOrigin =
    total+= origin_table[origin]
    totalFrags.innerText=`${total}`
}

function sumTable(arr, level){
    for(let i =0; i < level; i++){
        
    }
}