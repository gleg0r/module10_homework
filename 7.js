const arr = [5, 6, 5, 5, null, 0]
let zero = 0
let odd = 0
let even = 0
let remains
let x
for(let i = 0; i < arr.length; i++) {
    x = arr[i]
    if(typeof arr[i] != 'number' || arr[i] == null) {
        continue
    }
    if(arr[i] == 0) {
        zero++
        continue
    }
    remains = arr[i] % 2
    switch (remains) {
        case 0:
            even++
            break;
        case 1:
            odd++
            break;
    }
}

console.log('Кол-во четных - ' + even)
console.log('Кол-во нечетных - ' + odd)
console.log('Кол-во нулей - ' + zero)