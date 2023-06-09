//Component authorization
const Authorization = () => {
    const users = getUsers() || []
    const root = document.getElementById('root')
    const node = document.createElement('div')
    node.className = 'main-wrap'
    node.id = 'authorization'
    node.innerHTML = authorizationTemplate
    const signIn = node.querySelector('#signIn')
    const authInput = node.querySelector('#auth')
    const signUpBtn = node.querySelector('.signUp')

    //User compliance check function
    const toAuthorization = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const {value} = authInput
        const user = users.filter(el => el.NICK_NAME === value || el.EMAIL === value)
        if (!user.length) return alert('User not found')
        node.remove()
        Game(...user)
    }
    // Registration transition function
    const toRegistration = (e) => {
        node.remove()
        Registration()
    }

    signIn.addEventListener('click', toAuthorization)
    signUpBtn.addEventListener('click', toRegistration)

    root.append(node)
}
