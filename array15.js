let a  = [11, 7, 1, 13, 21, 3, 7, 3];
 

let b = [11, 3, 7, 1, 7]


let checknumber = false;


for(let i = 0 ; i<=b.length; i++){


    for(let j = 0 ; j<a.length; j++){

        if(b[i] === a[j]){
            checknumber = true;
        }
        else{
            checknumber = false ;
        }
    }
}

console.log(checknumber);