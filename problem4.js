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

console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "spacex" }))
// const input= { name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
// const result= password(input);
// console.log(result)