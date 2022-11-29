const arr = [5, 6, 5, 5]
let f = true
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            f = false
            break;
        }
    }
    if(f === false) break;
}
console.log(f)