let array = [1,2,4,5,7,8,3];

let firstIndex = 0;
let elementIndex = 0 ;

for(let i = 1 ; i<= array.length-1; i++){
    if(array[i] > array[firstIndex]){
        firstIndex = firstIndex + 1 ;
        elementIndex = elementIndex + 1 ;
    }
    else if(array[i] < array[firstIndex]){
        firstIndex = firstIndex + 1 ;
        elementIndex = elementIndex + 1 ;
    }
}