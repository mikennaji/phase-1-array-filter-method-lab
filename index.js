// Code your solution here
function findMatching(array,string){
    //const normalizedArray = array.map(element => element.toLowerCase());
    //const searchString = string.toLowerCase()
    //const results = normalizedArray.filter(element => element === searchString);
    //const normalizedResults = results.map(element => 
        //element[0].toUpperCase() + element.slice(1,element.length));
    ///return normalizedResults;
    const results = array.filter(element => {
       if( element[0].toLowerCase()+element.slice(1,element.length)===string ||element=== string ){
            return console.log(string)
        }
    })
        
    return results;
}

function fuzzyMatch(array,string){
    const results = array.filter(element => element.slice(0,3).includes(string))
    return results 
}

function matchName(driver,string){
    const results = driver.filter(element => element.name === string )
    return results;
}