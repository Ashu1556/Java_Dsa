let str = "Let's take LeetCode contest";

let str1 = str.split(" ");
console.log(str1);
let str2 = "";
for(let i=0; i<str1.length; i++){
    let word = str1[i].split("");

    let mid = Math.floor(word.length / 2);
    for(let j = 0; j< mid ; j++){
        
        let temp = word[j];
        word[j] = word[word.length - 1 - j];
        word[word.length - 1 - j] = temp
    }
    str1[i] = word.join("");
}

let words = str1.join(" ");

console.log(words, "data158");
