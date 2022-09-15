const arrayNum = [17,12,13,22,2,135,3,10]
console.log("Original:",arrayNum)

const triplos = arrayNum.map((item,indice,array) =>{
return item *3})
console.log("Map X 3:", triplos)

const metade = arrayNum.map((item, indice,array) =>{
    return item /2})
    console.log("Map / 2:", metade)