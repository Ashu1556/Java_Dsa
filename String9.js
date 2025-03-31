let s = "101";

let newArray = "";

let count = 0 ;

for(let i = 0 ; i<s.length; i++){
    if(s[i] === '0' && s[i+1] !== '0'){
        break;
    }
    else if (s[i] === '0'){
        newArray += s[i];
        count++;
    }
    else if(s[i+1] === '0'){
        newArray += s[i];
        count++;
    }
    else{
        newArray += s[i];
        count++;
    }
}

console.log(count, newArray);