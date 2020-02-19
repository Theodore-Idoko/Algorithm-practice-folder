
//LONGEST-WORD

// const str = 'The quick brown fox jumps over a lazy encyclopedia'
// const strArray = str.split(' ')
// const sortedArray = strArray.sort((a,b)=>{
//   return b.length - a.length
// })

// console.log(sortedArray[0])

// let numbs = "What if we try a super-long word such as otorhinolaryngology";
// function longestWord(numbs){
//   num = numbs.split(" ");
//   let lg = 0;
//   let longest;
//   for(let i = 0; i < num.length; i++){
//     if(num[i].length > lg){

//     lg = num[i].length;
//     longest = num[i];

//   }
//   }
//   return longest;
// }

// console.log(longestWord(numbs));

// function getIndexToIns (arr, num) {

//   if (typeof arr !== 'object')
//   throw new Error('Please, pass an array');

//   if (typeof num !== 'number') 
//   throw new Error('Please, Pass a number');

  
//   try {
//   arr.unshift(num);

//   let sorted = arr.sort((a, b) => a - b);
  
//   return sorted.indexOf(num)
//   }

//   catch (e){
//     alert(e);
//   }
// }

// getIndexToIns([1,3,5,4,2,8,11,13,10], u);

// How to remove duplicate values from an array
 
// let values = [3,4,5,5,6,7,6,8,9,8];
// function removeDuplicates(values){
//   let numb = []
//   let temp;
  
//   for (let i = 0; i < values.length; i++){
//     if (values[i] !== temp){
//       numb.push(values[i])
//       temp = values[i];
//     }

//   }
//   console.log(numb)
// }

// removeDuplicates(values)


// let a = [1,2,5,2,1,8];
// let b = [];
// let len = a.length;

// for(let i = 0; i < len; i++){
//   //if a[i] in b is negative
//   if(b.indexOf(a[i]) === -1){
//     b.push(a[i]);
//   }
// }

// console.log(b)

// let num = [1,2,5,2,1,8];
// //doesnt return duplicates
// //spread operator turns the set into array
// console.log([...new Set(a)])


// //ReverseString

// function reverseString(str){
//  return str.split('').reverse().join('');
// }
//  console.log(reverseString('hello'))

//  function reverseStrings(str){
//    let final = '';
//    for(let i = str.length -1; i >= 0; i--) {
//      final += str[i];
//    }
//    return final
//  }

//  console.log(reverseStrings('hello'));


//  //Factorialize
//  function factorialize(num){
//    let result = 1;
//    for(let i = 1; i <= num; i++){
//      result *= i;
//    }
//    return result;
//  }

//  console.log(factorialize(5));

//Palindrome
function Palindrome(str){
  let reg = /[\W_]/g;//Any non aphalnumeric character including underscore
  let smallStr = str.toLowerCase().replace(reg, '');//replace any non alphanumeric character with nothing
  let reversed = smallStr.split('').reverse().join('');
  if (reversed === smallStr) return true;

  return false;
}
console.log(Palindrome('racecar'))


//Title Case a Sentence

// function titleCase(str){
//   let words = str.toLowerCase().split(' ');
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1); //slice (1) means that the first letter should be removed and others returned;
//   }
//   return words.join(' ');
// }
console.log(titleCase(`I'm a little tea pot`))

function titleCase(str){
  let titled = str.toLowerCase().split(' ').map(function(elem){ //for each element replace the first letter with uppercase and add the rest
    return elem[0].toUpperCase() + elem.slice(1);
  })
  return titled.join(' ');
}