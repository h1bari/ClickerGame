// Компонент статистики
const Panel = (user = {}) =>{
    const root = document.getElementById('root')
    const node = document.createElement('ul')
    node.className = 'ui'
    node.id = 'panel'
    const objEntries = Object.entries(BASE_CONFIGURATION);
    node.innerHTML = `
        <li class="ui-text">${user.NICK_NAME}</li>
        ${ objEntries.map(el => `<li class="ui-text ui-small">
            ${replaceUnderscore(el[0])}: <span class="${createClassName(el[0])}">${el[1]}</span>
        </li>`).join('') }
        <li class="ui-text"><button class="exit">Exit</button></li>
    `
    const  exitButton = node.querySelector('.exit')
    //Выход на экран регистрации
    const toExit = () => {
        node.remove()
        document.querySelector('#game').remove()
        Registration()
    }
    exitButton.addEventListener('click', toExit)

    root.append(node)
}
