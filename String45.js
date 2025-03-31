const array = [10, 5, 10];

let start = 0 ;
let end = array.length-1;

while(start < end){
    if(array[start] > array[end]){
       end = end - 1;
    }
    else if(array[start] < array[end]){
        start = start + 1;
    }
    
}

console.log(array[start], array[end], "started");