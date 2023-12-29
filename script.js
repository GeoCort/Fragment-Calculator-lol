//origin fragment cost for initial origin 
// 100 replaces 0 for future origins
origin_table =[0,30,35,40,45,50,55,60,65,200,80,90,100,110,120,130,140,150,160,350,170,180,190,200,210,220,230,240,250,500];
//hexa skill table
hexaSkillTable = [50,15 ,18,20,23,25,28,30,33,100,40,45,50,55,60,65,70,75,80,175,85,90,95,100,105,110,115,120,125,250] 
//Hexa Boost Cores
hexaCoreTable = [75,23,27,30,34,38,42,45,49,150,60,68,75,83,90,98,105,113,120,263,128,135,143,150,158,165,173,180,188,375]
hexaStat = [10,10,10,10,10,15,15,15,15,15,20,20,20,20,20,25,25,25,25,25]

let origin = document.getElementById("origin") //origin
let mastery = document.getElementById("mastery") //hexa skill mastery
let boost1 = document.getElementById("boostOne")
let boost2 = document.getElementById("boostTwo")
let boost3 = document.getElementById("boostThree")
let boost4 = document.getElementById("boostFour")
let totalFrags = document.getElementById("totalFrag")
let tickets= document.getElementById("tickets")
let hStat = document.getElementById("hexaStat")
let stat= document.getElementById("hexStat")

origin.addEventListener("change",()=>{
    if(parseInt(origin.value) > 30){
        origin.value =30;
    }else if(parseInt(origin.value) < 0){
        origin.value=0;
    }
    calc(parseInt(origin.value),parseInt(mastery.value),parseInt(boost1.value),parseInt(boost2.value),
    parseInt(boost3.value),parseInt(boost4.value),parseInt(hStat.value))
})
mastery.addEventListener("change",()=>{
    if(parseInt(mastery.value) > 30){
        mastery.value =30;
    }else if(parseInt(mastery.value) < 0){
        mastery.value=0;
    }
    calc(parseInt(origin.value),parseInt(mastery.value),parseInt(boost1.value),parseInt(boost2.value),
    parseInt(boost3.value),parseInt(boost4.value),parseInt(hStat.value))
})
boost1.addEventListener("change", ()=>{
    if(parseInt(boost1.value) > 30){
        boost1.value =30;
    }else if(parseInt(boost1.value) < 0){
        boost1.value=0;
    }
    calc(parseInt(origin.value),parseInt(mastery.value),parseInt(boost1.value),parseInt(boost2.value),
    parseInt(boost3.value),parseInt(boost4.value),parseInt(hStat.value))
})
boost2.addEventListener("change", ()=>{
    if(parseInt(boost2.value) > 30){
        boost2.value =30;
    }else if(parseInt(boost2.value) < 0){
        boost2.value=0;
    }
    calc(parseInt(origin.value),parseInt(mastery.value),parseInt(boost1.value),parseInt(boost2.value),
    parseInt(boost3.value),parseInt(boost4.value),parseInt(hStat.value))
})
boost3.addEventListener("change", ()=>{
    if(parseInt(boost3.value) > 30){
        boost3.value =30;
    }else if(parseInt(boost3.value) < 0){
        boost3.value=0;
    }
    calc(parseInt(origin.value),parseInt(mastery.value),parseInt(boost1.value),parseInt(boost2.value),
    parseInt(boost3.value),parseInt(boost4.value),parseInt(hStat.value))
})
boost4.addEventListener("change", ()=>{
    if(parseInt(boost4.value) > 30){
        boost4.value =30;
    }else if(parseInt(boost4.value) < 0){
        boost4.value=0;
    }
    calc(parseInt(origin.value),parseInt(mastery.value),parseInt(boost1.value),parseInt(boost2.value),
    parseInt(boost3.value),parseInt(boost4.value),parseInt(hStat.value))
})
hStat.addEventListener("change", ()=>{
    if(parseInt(hStat.value) > 20){
        hStat.value = 20;
    }else if(parseInt(hStat.value) < 0){
        hStat.value=0;
    }
    calc(parseInt(origin.value),parseInt(mastery.value),parseInt(boost1.value),parseInt(boost2.value),
    parseInt(boost3.value),parseInt(boost4.value),parseInt(hStat.value))
})

function calc(origin=0, mastery=0,boost1=0,boost2=0,boost3=0,boost4=0,zstat=0){
    let total =0;
    let totalOrigin =sumTable(origin_table,origin);
    let totalMastery = sumTable(hexaSkillTable,mastery)
    let boostOne = sumTable(hexaCoreTable,boost1)
    let boostTwo = sumTable(hexaCoreTable,boost2)
    let boostThree = sumTable(hexaCoreTable,boost3)
    let boostFour = sumTable(hexaCoreTable,boost4)
    let hexStat_ = sumTable(hexaStat,zstat)
    // calc origin
    console.log(hexStat_)
    total= totalOrigin + totalMastery + boostOne + boostTwo +boostThree + boostFour + hexStat_;
    tickets.innerText = `${total / 200}`
    totalFrags.innerText=`${total}`
    stat.innerText = `${hexStat_}`
}

function sumTable(arr, level){
    let sum = 0;
    for(let i =0; i < level; i++){
        sum+=arr[i]
    }
    console.log(sum)
    return sum;
}