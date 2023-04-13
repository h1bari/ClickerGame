// Регулярки для проверки формы
const REG_FORM = {
    USER_NAME: /^[a-zA-Zа-яА-ЯёЁ_][a-zA-Zа-яА-ЯёЁ0-9_-]{0,}$/,
    NICK_NAME: /^[a-zA-Z_][a-zA-Z0-9_.+$-]{0,}$/,
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
}
// Для добавления в новых пользовотелей
const BASE_TIME = {
    TIME: 0,
    BEST_TIME: 0,
}
// Базовое отображение панели

const BASE_CONFIGURATION = {
    HP: 5,
    LEVEL: 1,
    YOUR_COINS: 0,
}
// Все базовые конфиги
const FULL_BASE_CONFIGURATION = {
    ...BASE_CONFIGURATION,
    ...BASE_TIME,
    MAX_LVL: 5,
    SCALE_COIN: 1,
    DEFAULT_STEP: 1,
    MIN_HP: 0,
    START_TIME: 0
}
//Данные для winScreen
const TEXT_CONSTANTS = {
    WIN_TEXT: 'Congratulation you end the game,',
    NEXT_LVL_TEXT : 'Congratulation you clear this LVL!',
    YOUR_SCORE : 'Your score: ',
    USER_BEST_TIME : 'Your best time: ',
    ALL_BEST_TIME : 'All best time: ',
    TIME_TEXT : 'Your time: ',
}
// Путь к ассетам
const ASSETS = {
    BACKGROUND: './images/backgrounds/',
    CHARACTER: './images/characters/',
}
