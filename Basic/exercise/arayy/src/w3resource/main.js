// 1. Write a JavaScript function to check whether an `input` is an array or not.
let is_array = function(input){
    if(toString.call(input) === "[object Array]")
        return true;
    return false;
}
console.log(is_array("giang")); // false;
console.log(is_array([1 , 2 , 3 , 4])); // true

// 2. Write a JavaScript function to clone an array
// C1 : Sử dụng array method slice => clone an array
let array_Clone1 = function(arr1){
    return arr1.slice(0);
}
console.log(array_Clone1([1 , 2 , 3 , 4]));
// C2 : spread operator => [...var]
// let array_Clone2 = [...arr2];
let arr = [1 ,2 , 3, 4];
let clone_arr = [...arr];
console.log(clone_arr); // (4) [1, 2, 3, 4]
console.log(typeof(clone_arr)) // object 
console.log(Array.isArray(clone_arr)); // true
// C3 : Array.from()
let arr3 = [1 ,2 , 3, 4];
let clone_arr3 = Array.from(arr);
console.log(clone_arr3)

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
let first = function(array , n){
    if(array == null)
        return void 0;
    if(n == null)
        return array[0];
    if(n < 0)
        return [];
    return array.slice(0, n);
}

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array
    // => arrow function
let last = (array , n) => {
    if (array == null) 
        return void 0;
    if (n == null)
        return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));  
}
console.log(last([7, 9, 0, -2])); // -2
console.log(last([7, 9, 0, -2],3)); // [9,0,-2]
console.log(last([7, 9, 0, -2],6)); // [7,9,0,-2]


