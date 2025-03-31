let nums = [0,0,0];
let target = 1;

const sum3 = (nums, target) => {
    let n = nums.length;
    let sum  = 0;
    for (let i = 0; i <= n; i++) {
        if (nums[i] === target) {
            for(let j = 0 ; j < i ; j++){
                sum += nums[j];
            }
            return sum;
        }
        else if ( i >= 3 && nums[i] !== target){
            for(let j = 0 ; j <= i ; j++){
                sum += nums[j];
            }
                
            
        }
    }
    return sum ;
}


console.log(sum3(nums, target), "data");






