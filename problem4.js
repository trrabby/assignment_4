function password(obj) {

    const objLength= Object.keys(input).length
    const ageString= input.birthYear.toString();
    const ageLength= ageString.length
    if (ageLength===4 && objLength===3){
        const passwordMaking= input.siteName + "#" + input.name + "@" + input.birthYear
        return passwordMaking
    }
    else{
        return ("Invalid. Pl fill up inputs carefully")
    }
    
    }
const input= {name: "kolimuddin", birthYear:1999}
const result= password(input);
console.log(result)