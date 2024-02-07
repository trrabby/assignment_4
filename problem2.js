
function checkName(names) {
    // name=name.toLowerCase();
    const lastWord= name.split('').pop()
    // console.log(lastWord)
    if(lastWord==="a"||lastWord==="y"||lastWord==="i"||lastWord==="e"||lastWord==="o"||lastWord==="u"||lastWord==="w"){
        return("Good Name")
    }
    else if(typeof name=== "number"){
        return("Please insert a name")
    }
    else{
        return("Bad Name")
    }
    }
    let nam= "salman"
    let name= nam.toLowerCase();
    const goodOrBad= checkName(name)
    console.log(goodOrBad)

    let nam1= "RAFEE"
    let name= nam.toLowerCase();
    const goodOrBad1= checkName(name)
    console.log(goodOrBad1)





    // let nam= "RAFEE"
    // let name= nam.toLowerCase();
    // console.log(goodOrBad)
    // const goodOrBad1= checkName()
    // console.log(goodOrBad1)
    // const goodOrBad2= checkName("Jhankar")
    // console.log(goodOrBad2)
    // const goodOrBad3= checkName("199")
    // console.log(goodOrBad3)
    // const goodOrBad4= checkName(["Rashed"])
    // console.log(goodOrBad4)