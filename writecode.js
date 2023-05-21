// SUMZERO

function addToZero(x){
    for(let i=0;i<x.length; i++){
        for(let j=1; j<x.length; j++){
            if(x[i]+x[j] === 0){
                return true
            }
        }
    }
    return false
}

console.log(addToZero([])); // -> False

console.log(addToZero([1]));// -> False

console.log(addToZero([1, 2, 3])); // -> False

console.log(addToZero([1, 2, 3, -2]));// -> True

console.log(addToZero([1, 2, 3, 7, -5, 8, 5]));// -> True

// I believe the addToZero function is quadratic runtime, O(n^2). I believe this because there are 2 loops with each having runtime n, with both combined the runtime becomes n*n. The reason it is n*n is that one relies on the other. This results in quadratic runtime O(n^2).


//UNIQUE CHARACTERS

const hasUniqueChars = (x) =>{
    return x.length === new Set(x).size
}

console.log(hasUniqueChars("Monday")); // -> True

console.log(hasUniqueChars("Moonday")); // -> False

// I believe the hasUniqueChars has a linear runtime. Reason is that x.length is a constant since it is an attribute of the array. On the other hand, Set(x) is working through the array so it may have a linear runtime O(n). The size of the set is also a constant 1 since it is an attribute of the Set. In the end we are working with n+1+1 which would result in O(n) runtime. 


// PANGRAM SENTENCE

const isPangram = function isPan(x){
    let alphSize = 26
   return alphSize === new Set(x.toLowerCase().replace(/[^a-z]/g, '')).size;
};


console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

// I believe isPangram has a runtime of O(n) which would be an linear runtime. To break it down, the x.toLowerCase() has a linear runtime O(n) since it has to go through the array. You then also have .replace which also contains O(n)runtime since it also has to run through the entire array. Then lastly you have new-Set which also has to go through entire array thus having a O(n)runtime. The rest of things have a constant such as declaration of variable and size of the Set. This leaves us with n+n+n resulting in O(3n) runtime. It is not n*n*n since each function runs independently from each other. After cleaning up the Big O notation would be O(n) if not mistaken. 


// LONGEST WORD

function findLongestWord(x){
    let y = []
    x.forEach(ele => y.push(ele.length))
    return Math.max(...y)
}

console.log(findLongestWord(["hi", "hello"]));
// -> 5

console.log(findLongestWord(["hi", "hello", 'WubbaLubbaDubDub']));
// -> 16


//I believe findLongestWord function also has a linear runtime, O(n). Reason for this is that x.forEach has a runtime of O(n) due to taking longer based on how big the array is. Then the Math.max(...y) also has a linear runtime O(n). The rest are constant runtimes since they are properties of the array. In the end we are left with n+n which would be 2n. The run time would result in O(n), linear. 