let x
let type
x = 'adff'
type = typeof x
console.log(type)
switch (type) {
    case 'number':
        console.log('x - число');
        break;
    case 'string':
        console.log('x - строка');
        break;
    case 'boolean':
        console.log('x - булев');
        break;
    default:
        console.log('Тип x не определён')
}