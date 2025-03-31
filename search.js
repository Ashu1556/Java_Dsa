function Searching_number(k, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k && arr[i + 1] === k) {
            return i + 1;
        }
        else if (arr[i] === k) {
            return i;
        }




    }

    return -1;
}


console.log(Searching_number(98, [1, 22, 57, 47, 34, 18, 66]));