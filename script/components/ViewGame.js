//Компонент отрисовки игры
const ViewGame = (user = {}) => {
    //Отображение данных статистики текущего пользователя
    const renderDataPanel = ({score, hp, lvl}) => {
        document.querySelector('.hp').textContent = hp
        document.querySelector('.level').textContent = lvl
        document.querySelector('.your-coins').textContent = score

    }
    //Таймер счета
    const timer = setInterval(() => {
        config.time++
    }, 1000)
        //Удаление элементов игры и переход на win Screen
    const clearGame = (node = {}) => {
        document.querySelector('#panel').remove()
        node.remove()
        clearInterval(timer)
        Win(user)
    }

    const root = document.getElementById('root')
    const node = document.createElement('div')
    const enemy = document.createElement('div')
    node.className = 'main-wrap'
    node.id = 'game'
    enemy.className = 'enemy'
    node.append(enemy)
    changeBackground(root)
    changePictures(enemy, config.lvl)
    //Функция нажатия на персонажа
    const handleClick = (e) => {
        const {MAX_LVL, SCALE_COIN, DEFAULT_STEP, MIN_HP, HP} = FULL_BASE_CONFIGURATION
        config.score += SCALE_COIN
        config.hp -= DEFAULT_STEP
        if (config.hp <= MIN_HP) {
            config.lvl += DEFAULT_STEP
            config.hp = HP * config.lvl
            alert(TEXT_CONSTANTS.NEXT_LVL_TEXT)
            changeBackground(root)
            changePictures(enemy, config.lvl)
        }
        if (config.lvl > MAX_LVL) {
            return clearGame(node)
        }
        renderDataPanel(config)
    }
    enemy.addEventListener('click', handleClick)
    root.append(node)
}
