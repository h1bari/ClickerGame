// Компонент запуска игры и панели статистики
const Game = (user = null) => {
    if (!user) {
        const users = getUsers() || []
        user = users[users.length - 1]
    }

    Panel(user)
    ViewGame(user)
}

