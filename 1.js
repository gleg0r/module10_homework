let isNumber
isNumber = prompt('Введите значение')
isNumber = +isNumber
if(isNumber !== NaN && typeof isNumber    == "number") {
    x = isNumber
    if(x % 2 === 0) {
        console.log('число четное')
    } else {
        console.log('число нечетное')
    }
} else {
    console.log('Упс, вы ошиблись')
}