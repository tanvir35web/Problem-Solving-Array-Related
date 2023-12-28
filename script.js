// Find last item of every arrays.

// const array = [[1,5,8,6],[5,2,9],[0,4],[1]];

// for(i=0, j=3 ; i < array.length ; i++, j--){
//     console.log("array[" + i + "] [" + j + "] = " + array[i][j]);
// }


// Find last item of every arrays using comma operator must.


// const array = [[1,5,8,6],[5,2,9],[0,4],[1],[0,9]];


// for(i=0; i < array.length; i++){
//     for(j=(array[i].length-1); j > 0; j--){
//         console.log("array[" + i + "] [" + j + "] = " + array[i][j]);
//     }
// }


// const array = [[1, 5, 8, 6], [5, 2, 9], [0, 4], [1], [0, 9]];
// const resultArray = [];

// for (let i = 0; i < array.length; i++) {
//   const subarray = array[i];

//   // Check if the subarray is not empty before accessing its last element
//   if (subarray.length > 0) {
//     const lastElement = subarray[subarray.length - 1];
//     resultArray.push(lastElement);
//   }
// }

// // Output the result
// console.log(resultArray.join(","));


// const array = [[1, 5, 8, 6], [5, 2, 9], [0, 4], [1], [0, 9],[998,0]];

// for (let i = 0; i < array.length; i++) {

//   if (array[i].length > 0) {
//     const lastElement = array[i][array[i].length - 1];

//     console.log("array[" + i + "] = " + lastElement);
//   }
// }


// const array = [[1, 5, 8, 6], [5, 2, 9], [0, 4], [1], [0, 9]];

// for (let i = 0; i < array.length; i++) {
//   // Check if the subarray is not empty before accessing its last element
//   if (array[i].length > 0) {
//     const lastIndex = array[i].length - 1;
//     const lastElement = array[i][lastIndex];
//     console.log(`array[${i}][${lastIndex}] = ${lastElement}`);
//   }
// }



// Find first item of every arrays.


// const array = [[1, 5, 8, 6], [5, 2, 9], [0, 4], [1], [0, 9],[77,0,99],[2.3,9]];

// for (let i = 0; i < array.length; i++) {
  
//   if (array[i].length > 0) {
//     const firstElements = array[i][0]
//         console.log(firstElements);

//     }
   
//   }

// Sum of the array each array's first and last elements

const array = [[1, 5, 8, 6, 8], [5, 2, 9], [8, 4], [5], [0, 0, 1]];

for(let i=0; i < array.length ; i++){

    if(array[i].length > 1) {
        const firstElement = array[i][0];
        const lastElement = array[i][[array[i].length - 1]]

        console.log(`${firstElement} + ${lastElement} = ` + (firstElement + lastElement));
    }
}
