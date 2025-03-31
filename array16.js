

const duplicatesArray = (arr) =>{
//   let n = arr.length;
//   let array = [];

//   if(n === 0){
//     return array ;
//   }
//   if(n === 1){
//     return array ;
//   }

//   let firstIndex = 0;

//   for(let i = 1 ; i <arr.length ; i++){
//     if(arr[firstIndex]  === arr[i]){
//         array.push(arr[i]);
//         firstIndex = firstIndex + 1 ;
//     }
//   }
//   return array ;

let seen = new Set();
  let duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num); 
    } else {
      seen.add(num); 
    }
  }

  return [...duplicates]; 
}

let array = [2,5];

console.log(duplicatesArray(array));