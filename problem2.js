
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
    
    const goodOrBad= checkName("TANVIRE")
    console.log(goodOrBad)



