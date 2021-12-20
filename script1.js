// class meeting dec 18 / 2021

// //forEach

// const myArray = [1, 2, 3]

// // myArray.forEach(x => {
// //   console.log(x)
// // });

// function myMethod(myArray) {
//   for (let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);

//   }
// }

// myMethod(myArray)

 
// const myArray = ["g", "r", "i" ,"n", "d"];            
// let myString = '';
// let myConnect = (myArray) => {
//   for (i = 0; i < myArray.length; i++) {
//     myString = myString + myArray[i]

//   };
//    return myString;
// }
 
// console.log(myConnect(myArray));
// array1 = [2, 5, 6. 3]
// const map1 = array1.map(x => x + 30);
// console.log(map1());


// make an array, take element and add numbers to that array 

// let myMapArray = [1,12,30,46,58];
 

// function mapFunction(myMapArray){
//     let myNewArray=[];
//     let newNumber = 0;
//   for (let i = 0; i < myMapArray.length; i++){
//       newNumber = myMapArray[i]+ 30;
//       myNewArray.push(newNumber);
//       //myNewArray= myMapArray[]+ myNewArray[i]
//   }
//   return myNewArray
// }
// console.log(mapFunction(myMapArray));

//--------
// let myMapArray = [1,12,30,46,58];
 

// function mapFunction(myMapArray,someNum){
//     let myNewArray=[];
//     let newNumber = 0;
//   for (let i = 0; i < myMapArray.length; i++){
//       newNumber = myMapArray[i]+ someNum;
//       // myNewArray.push(newNumber);
//       //myNewArray= myMapArray[]+ myNewArray[i]
//       myNewArray = [...myNewArray, newNumber]
//     myNewArray = [newNumber, ...myNewArray] // print opposit

//   }
//   return myNewArray
// }
// console.log(mapFunction(myMapArray, 100));

//----------------
