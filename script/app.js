// Стартовый компонент загрузки приложения
const app = () => !getUsers() ? Registration() : Game()

app()
