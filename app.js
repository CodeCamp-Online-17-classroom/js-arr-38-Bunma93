// write code here
const array1 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว

const array2 = [1, -3, 2, 8, -4, 5];
// ค่าที่เป็นเลขบวก

const array3 = [1, 3, 4, 5, 6, 7, 8];
// ค่าที่หาร 3 ลงตัว

let result1 = array1.filter(x => x.length > 6);
let result2 = array2.filter(x => x > 0);
let result3 = array3.filter(x => x%3 == 0);

console.log(result1);
console.log(result2);
console.log(result3);