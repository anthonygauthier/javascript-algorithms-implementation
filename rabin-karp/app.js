let rabinKarp = (str, patt) => {
    let array = [],
        indexOf = 0; 

    while(indexOf != -1) {
        let offset = (indexOf === 0) ? indexOf : indexOf + 1;
        indexOf = str.indexOf(patt, offset)

        if(indexOf != -1) 
            array.push(indexOf);
    }
        
    return array;
}

module.exports = {
    rabinKarp
}