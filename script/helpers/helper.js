// Getting all users
const getUsers = () => JSON.parse(localStorage.getItem('users'))
// Add all users
const setUsers = (users = []) => localStorage.setItem('users', JSON.stringify(users))
//Validation check
const checkValidation = (value = '', reg = new RegExp('')) => (!value || !reg.test(value))
// Add validation of input field
const addValidationInput = (input = {}, reg = new RegExp('')) => {
    const {value} = input
    input.style.background = checkValidation(value, reg) ? 'pink' : 'white'
    return checkValidation(value, reg)
}
// Adding validation of input fields for loss of focus
const addBlurInput = (input = {}, reg = new RegExp('')) => {
    input.addEventListener('blur', (e) => {
        const {value} = e.target
        input.style.background = checkValidation(value, reg) ? 'pink' : 'white'
    })
}
// Replace underscore
const replaceUnderscore = (str = '') => str.replace('_', ' ')
// Create class name based on constants
const createClassName = (str = '') => str.replace('_', '-').toLowerCase()
// Time transformation
const formatTime = (time = 0) => {
    const duration = moment.duration(time, 'seconds')
    return `${Math.floor(duration.asMinutes())}m ${duration.seconds()}s`
}
// Reset base values on game restart
const resetGame = () => {
    config.score = FULL_BASE_CONFIGURATION.TIME
    config.lvl = FULL_BASE_CONFIGURATION.LEVEL
    config.hp = FULL_BASE_CONFIGURATION.HP
    config.click = FULL_BASE_CONFIGURATION.YOUR_COINS
    config.time = FULL_BASE_CONFIGURATION.START_TIME
}
//Change pictures
const changePictures = (root = {}, img = '', character = true) => {
    const path = ASSETS[character ? 'CHARACTER' : 'BACKGROUND']
    const format = character ? 'png' : 'jpg'
    root.style.backgroundImage = `url(${path}${img}.${format})`
}
//Change background
const changeBackground = (root = {}, registration = false, win = false) => {
    let img = config.lvl
    if (registration) img = 'startscreen'
    if (win) img = 'winscreen'
    changePictures(root, img, false)
}


