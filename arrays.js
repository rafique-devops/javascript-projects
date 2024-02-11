const myArray = [1,2,3,4,5]
console.log(myArray);
console.log(myArray[2]);

myArray.push(6);
myArray.push(7);
console.log(myArray);

myArray.unshift(8);
console.log(myArray);

myArray.shift();
console.log(myArray);

const newArr = myArray.join()
console.log(newArr);
console.log(typeof newArr);

console.log(`\n\n-------Splice & Slice Method---------\n\n`)

const newArr2 = myArray.slice(1,3);
console.log(newArr2);
console.log("Original Array After Slice", myArray);

const newArr3 = myArray.splice(1,3);
console.log(newArr3);
console.log("Original Array After Splice",newArr3);
