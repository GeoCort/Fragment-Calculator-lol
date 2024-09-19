//origin fragment cost for initial origin 
// 100 replaces 0 for future origins
const origin_table =[0,30,35,40,45,50,55,60,65,200,80,90,100,110,120,130,140,150,160,350,170,180,190,200,210,220,230,240,250,500];
//hexa skill table
const hexaSkillTable = [50,15 ,18,20,23,25,28,30,33,100,40,45,50,55,60,65,70,75,80,175,85,90,95,100,105,110,115,120,125,250] 
//Hexa Boost Cores
const hexaCoreTable = [75,23,27,30,34,38,42,45,49,150,60,68,75,83,90,98,105,113,120,263,128,135,143,150,158,165,173,180,188,375]
const hexaStat = [10,10,10,10,10,15,15,15,15,15,20,20,20,20,20,25,25,25,25,25]
const hexaPublic = [125,38,44,50,57,63,69,75,82,300,110,124,138,152,165,179,193,207,220,525,234,248,262,275,289,303,317,330,344,
    750]

const submitBtn = document.getElementById("calculateFrags")
// Handle form information
submitBtn.addEventListener("click", (e)=>{
    // get the form for validation
    const form = document.getElementById("fragForm")
    e.preventDefault();
    // if the form is valid
    if(form.checkValidity()){
        // node list of all inputs
        const inputs = document.querySelectorAll("input")
        let sum = 0; 
        // Sum all inputs
        inputs.forEach( (input)=>{
            console.log(sum, " : ", input.value)
            if(input.value == 0 ) return;
            switch(input.dataset.type){
                case "origin": sum+= origin_table[input.value-1];
                break;
                case "mastery": sum+= hexaSkillTable[input.value-1];
                break;
                case "boost": sum += hexaCoreTable[input.value-1]
                break;
            }
        })
       let fragCost = document.getElementById("fragCost")
       fragCost.innerText = `${sum}`
        // Report form errors
    }else{
        form.reportValidity()
    }
})
