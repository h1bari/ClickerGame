// Win screen component
const Win = (user = {}) => {
    const root = document.getElementById('root')
    const node = document.createElement('div')
    const field = document.createElement('div')
    node.className = 'main-wrap'
    node.id = 'win'
    field.className = 'winScreen-field'
    node.append(field)
    changeBackground(root, false, true)
    const users = getUsers() || []
    //Function to compare the best time and current
    const checkTime = (best = 0, current = 0) => (best === 0 || current < best)
    //Update user data
    const updateUser = {
        ...user,
        TIME: config.time,
        BEST_TIME: checkTime(user.BEST_TIME, config.time) ? config.time : user.BEST_TIME,
    }
    //Restart game
    const toStartGame = (e) =>{
        node.remove()
        resetGame()
        Game()
    }
    const  updatesUsers = users.map(el => el.NICK_NAME === user.NICK_NAME ? updateUser : el)
    setUsers(updatesUsers)
    const allBestTime = updatesUsers.map(el  => el.BEST_TIME > 0 && el.BEST_TIME).filter(el => el)
    const yourBestTime = checkTime(user.BEST_TIME, config.time) ? config.time : user.BEST_TIME
    const data = {
        name: user.NICK_NAME,
        score: config.score,
        time: formatTime(config.time),
        your_best: formatTime(yourBestTime),
        total_best: formatTime(Math.min(...allBestTime)),
    }
    field.innerHTML = `
       <p class="winScreen-field__text">${TEXT_CONSTANTS.WIN_TEXT} ${data.name}!</p>
       <p class="winScreen-field__text">${TEXT_CONSTANTS.YOUR_SCORE} ${data.score}</p>
       <p class="winScreen-field__text">${TEXT_CONSTANTS.USER_BEST_TIME} ${data.your_best}</p>
       <p class="winScreen-field__text">${TEXT_CONSTANTS.ALL_BEST_TIME} ${data.total_best}</p>
       <p class="winScreen-field__text">${TEXT_CONSTANTS.TIME_TEXT} ${data.time}</p>
       <button class="new-game-btn">Start new game</button>
    `
    const newGameBtn = field.querySelector('.new-game-btn')
    newGameBtn.addEventListener('click', toStartGame)
    root.append(node)
}
