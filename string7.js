let haystack = "leetcode", needle = "leeto" ;




// console.log(haystack.indexOf(needle))


let s = "race a car";
let s1 = s.replace(/[^a-zA-Z0-9]/g, " ").split(" ").join("").toLowerCase();

let left = 0;
let right = s1.length - 1;

let pallindrome = true ;

while(left < right){
    if(s1[left] !== s1[right]){
       pallindrome = false;
       break;
    }
    left++;
    right--;

}


console.log(pallindrome, "data156")

