function calculateMoney(ticketSale ){
    const unitTicketPrice=120;
    const guardBill=500;
    const lunchBill=400; /* 8*50 per head */
    const utilityBill= guardBill+lunchBill;

    if (ticketSale<0){
       return(" ''Invalid Number'' Please insert a valid number. It must be an integer.")
    }
    else{
        const totalincome=unitTicketPrice*ticketSale;
        const revenue= totalincome-utilityBill;
        return revenue;
    }
    
}   


function checkName(name) {
    if (typeof name === "string"){
        let lastWord= name.split('').pop();
        lastWord=lastWord.toLowerCase();
        
        // console.log(lastWord)
        if(lastWord==="a"||lastWord==="y"||lastWord==="i"||lastWord==="e"||lastWord==="o"||
        lastWord==="u"||lastWord==="w"){
        return("Good Name")
        }
        else{
            return("Bad Name")
        }

    }
    else if(typeof name === "number" || typeof name === "object" ){
        return("Please insert a name. Which must be a string.");
    }
   }

    
function deleteInvalids(array) {
        let sortedArray=[];   
        
        if(Array.isArray(array)===true){
            let newArray = array.filter(value => !Number.isNaN(value))
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

    

function password(obj) {

            const objLength = Object.keys(obj).length
            const ageString = obj.birthYear.toString();
            const ageLength = ageString.length
            // const SiteNameWord= obj.siteName.split('');
            // const upCaseSiteNameWord= SiteNameWord[0].toUpperCase();
            const SiteNameWord = obj.siteName.charAt(0);
            const upCaseSiteNameWord = SiteNameWord.toUpperCase();
            const textReplace = obj.siteName.replace(SiteNameWord, upCaseSiteNameWord);
        
            if (ageLength === 4 && objLength === 3) {
                const passwordMaking = textReplace + "#" + obj.name + "@" + obj.birthYear
                return passwordMaking
            }
            else {
                return ("Invalid. Pl fill up inputs carefully")
            }
        }   

        
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

          