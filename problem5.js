
function monthlySavings(arr , livingCost) {
    let incomeOverLimit=[];
    let incomeUnderLimit=[];
    let totalincome=0;
       
  if(Array.isArray(arr) === true && typeof livingCost=== "number" ){
    for(const income of arr){

        if (typeof income==="number" && income>=3000){
            const afterBankCharge= (income- (income/100*20))
            incomeOverLimit.push(afterBankCharge)
                       
        }
        else if (income>0){
            incomeUnderLimit.push(income)
            
        }
        else if (typeof income=== "string" || typeof income !== "number"){
            return("Invalid Input")
        }
        
    }
    const netArray= incomeOverLimit.concat(incomeUnderLimit)
           
    for (const inc of netArray){
            totalincome= inc+totalincome
        }
        const savings= totalincome-livingCost
        
        if(savings<0){
            return (`Earn More. Your expecences exceded your income. You are in debt of ${savings} bdt.`)
        }
        else {
            return savings
        }            
    }
    else{
        return("Invalid Input.")
    }
    
  }  
  
  console.log(monthlySavings([10000, 50000, 3000], 50000))
// const array= [ 900 , 2700 , 3400];
// // const livingCost=10000;

// //   const result=monthlySavings(array, livingCost)
//   console.log(result)
    