

//Assign string to new array

const string1 = "odces";
const indices = [1, 2, 0, 3, 4];
function wordScramble(string, inputArr) {
     let stringArr = string.split(""); //creat a new array
     for (let i = 0; i < inputArr.length; i++) {
          for(let j = 0; j < inputArr.length; j++) {
               if (inputArr[j] > inputArr[j + 1]) {
                    [inputArr[j], inputArr[j+1]] = [inputArr[j+1], inputArr[j]]; // swapping it for numbers
                    [stringArr[j], stringArr[j+1]] = [stringArr[j+1], stringArr[j]]; //it's for the return // for letter        
               }
          }    
     }  
return stringArr.join('');       

}
console.log(wordScramble("odce", [1, 2, 0, 3]));

// strig and indices for input
//----------


// const string = "odec";
// const indices = [1, 2, 0, 3];  
// const restoreString = (string, indices) => {
//      let result = "";

//      for (let i = 0; i < indices.length; i++) {
//           result += string[indices.indexOf(i)]
//      }
//      return result;
// }
// console.log(restoreString('odces', [1, 4, 2, 0, 3]));

//[0, 1, 2, 3, 4]
//(c, o, d, e, s)