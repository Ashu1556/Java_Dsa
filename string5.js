let arr = ["geeksforgeeks", "geeks", "geek", "geezer"]


for(let i = 0 ; i< arr.length ; i++){
    console.log(arr[i].length);
    for(let j = 0 ; j < arr[i].length; j++){
        console.log(arr[i][j]);
        if(arr[i][j] === arr[i+1][j]){
            console.log(arr[i][j], arr[i+1],[j]);
        }
    }
} 