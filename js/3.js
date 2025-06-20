//1)

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
let result = sumArray([10, 50, 6, 7, 8, 11, 6, 3, 9]);
console.log(result);



//2)
let user = {
    fName: 'giorgi',
    lName: 'saakadze',
    isloggedin: true,
};
// პირველი ჩანაწერი
function found(user) {
    if (user.isloggedin == true) {
        return (`${user.fName} ${user.lName}`);
    } else {
        return (`isloggedin is false`);

    }
}
//მეორე ჩანაწერი
function found(user) {
    return user.isloggedin ? `${user.fName} ${user.lName}` : 'isloggedin is false';
}

found(user);

// //3)
function Marray(arr) {
    return Math.max(...arr)
}
let array = [1, 32, 31, 4, 45, 645, 6, 477];

console.log(Marray(array));

//4)
function chekNumber (numbers) {
    if(numbers % 2 ===0 ){
        return 'this number is even';
    } else {
        return 'this number is odd';
    }
}

console.log(chekNumber(10));
