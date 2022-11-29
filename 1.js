let isNumber = +prompt('Введите значение')
if(isNumber !== NaN) {
    x = isNumber
    if(x % 2 === 0) {
        console.log('число четное')
    } else {
        console.log('число нечетное')
    }
} else {
    console.log('Упс, вы ошиблись')
}