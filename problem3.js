 
function deleteInvalids(arrayNames) {
    let sortedArray=[];   
    
    if(Array.isArray(arrayNames)===true){
        let newArray = arrayNames.filter(value => !Number.isNaN(value))
        newArray= newArray.filter(sortedArray=> {return sortedArray !== null;})

        for (const sigment of newArray){
    
            if (typeof sigment=== "number"){
                sortedArray.push(sigment);
            }
            
        }
        return sortedArray
    }
    else{
        return("Invalid Array. Provide an Array")
    }

    }
// let arrayNames= {num: [ 1 , 2 , 3 ]};
// const result= deleteInvalids(arrayNames)
// console.log(result)

console.log(deleteInvalids([NaN, null, 10, 100, "towfiq"]));