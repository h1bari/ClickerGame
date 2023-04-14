// Startup component and statistics bar
const Game = (user = null) => {
    if (!user) {
        const users = getUsers() || []
        user = users[users.length - 1]
    }

    Panel(user)
    ViewGame(user)
}

