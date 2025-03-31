let str = "i.like.this.program.very.much";

let str1 = []

let currentSubString = "";

for (let i= 0; i< str.length; i++) {
    if (str[i] === ".") {
        str1.push(currentSubString);
        currentSubString  = "";
    }
    else{
        currentSubString += str[i]; 
    }
}
str1.push(currentSubString);

for(let i = 0; i<Math.floor(str1.length / 2) ; i++ ){
    let temp = str1[i];
    str1[i] = str1[str1.length-1 - i];
    str1[str1.length-1 - i] = temp;
}

console.log(str1.join("."), "data156");