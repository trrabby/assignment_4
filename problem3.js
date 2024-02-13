let arrayNames= {num: [ 1 , 2 , 3 ]};
let sortedArray=[];
  
function deleteInvalids(array) {
    
    
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

const result= deleteInvalids(sortedArray)
console.log(result)