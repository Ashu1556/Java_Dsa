let s = "tebbem";



if(s.length === 3 ){
    if(s[0] === s[s.length- 1]){
        return true ;
    }
    else{
        return false ;
    }
}
else{
    let newCharacter = s.slice(0,1) + s.slice(1 + 1).toLowerCase();

    let pallindrome = true ;

    let right = 0 ;

    let left = newCharacter.length - 1 ;

    while (left < right){
        if(newCharacter[left] !== newCharacter[right]){
            pallindrome = false;
            break;
        }
        left ++;
        right --;
    }
    return pallindrome ;
}