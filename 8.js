let map = new Map()
map.set('Уч. платформа', 'Skillfactory')
map.set('Курс', 'Frontend-разработчик PRO')
map.set('Группа', 'FR-PRO7')

for(let key of map.keys()) {
    console.log('Ключ - ' + key + ' Значение - ' + map.get(key))
}