let lowerCaseWords = array => {
    return new Promise((resolve, reject) =>  {
        if (array.length === 0) {
            reject("Error: invalid input");
        } else {
            resolve(
                array
                .filter(item => typeof item === 'string') 
                .map(str => str.toLowerCase()) 
            );
        }
    });
};

lowerCaseWords(["Sherry", 101274382, "Zarei", 45, "hEllo", true])
    .then(result => console.log(result))
    .catch(error => console.log(error));
