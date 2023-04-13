// получение всех пользователей
const getUsers = () => JSON.parse(localStorage.getItem('users'))
// Добавление всех пользователей
const setUsers = (users = []) => localStorage.setItem('users', JSON.stringify(users))
//Проверка валидации
const checkValidation = (value = '', reg = new RegExp('')) => (!value || !reg.test(value))
// Добавление валидации в поле ввода
const addValidationInput = (input = {}, reg = new RegExp('')) => {
    const {value} = input
    input.style.background = checkValidation(value, reg) ? 'pink' : 'white'
    return checkValidation(value, reg)
}
// Добавление валидации полям ввода по потере фокуса
const addBlurInput = (input = {}, reg = new RegExp('')) => {
    input.addEventListener('blur', (e) => {
        const {value} = e.target
        input.style.background = checkValidation(value, reg) ? 'pink' : 'white'
    })
}
// Замена нижнего подчеркивания
const replaceUnderscore = (str = '') => str.replace('_', ' ')
// Создание имя  классов на основе констант
const createClassName = (str = '') => str.replace('_', '-').toLowerCase()
// Преобразование времени
const formatTime = (time = 0) => {
    const duration = moment.duration(time, 'seconds')
    return `${Math.floor(duration.asMinutes())}m ${duration.seconds()}s`
}
// Сброс базовых значений при перезагрузке игры
const resetGame = () => {
    config.score = FULL_BASE_CONFIGURATION.TIME
    config.lvl = FULL_BASE_CONFIGURATION.LEVEL
    config.hp = FULL_BASE_CONFIGURATION.HP
    config.click = FULL_BASE_CONFIGURATION.YOUR_COINS
    config.time = FULL_BASE_CONFIGURATION.START_TIME
}
//Изменение изображений
const changePictures = (root = {}, img = '', character = true) => {
    const path = ASSETS[character ? 'CHARACTER' : 'BACKGROUND']
    const format = character ? 'png' : 'jpg'
    root.style.backgroundImage = `url(${path}${img}.${format})`
}
//Изменение фона
const changeBackground = (root = {}, registration = false, win = false) => {
    let img = config.lvl
    if (registration) img = 'startscreen'
    if (win) img = 'winscreen'
    changePictures(root, img, false)
}


