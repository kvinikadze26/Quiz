//1)
let array2 = [14, 150, 'css', null, 'javascript', 25];

newArray = array2.map(item => {
    if (typeof item == 'number') {
        return item ** 2;
    } else if (typeof item == 'string') {
        return item.toUpperCase();
    } else {
        return item;
    }
})

console.log(newArray);
//2)

