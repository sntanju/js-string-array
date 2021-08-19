function addNumbers(num1, num2){
    //console.log(arguments[1]);
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
     //arguments.push(45);
    //const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 100, 420);
//console.log(sum);

function getFullName(firstName,LastName){
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Omuk', 'Songket', 'Bin', 'Hanif', 'Songket', 'Bin', 'Tomuk', 'Songket', 'Bin', 'Komuk', 'Songket');
console.log(name);