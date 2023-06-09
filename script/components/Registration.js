//Registration component
const Registration = () => {
    //Start game
    const startGame = (node = {}, users = []) => {
        setUsers(users)
        node.remove()
        Game()
    }
    //Check duplicate user
    const checkDuplicate = (users = [], values = {}) => {
        return users.some(el => el.NICK_NAME === values.NICK_NAME || el.EMAIL === values.EMAIL)
    }
//Creating an Object with User Data
    const createValuesObject = () => {
        return {
            USER_NAME: userNameInput.value,
            NICK_NAME: nickNameInput.value,
            EMAIL: emailInput.value,
            ...BASE_TIME,
        }
    }
    //Transition to authorization
    const toAuth = (e) =>{
        e.preventDefault()
        node.remove()
        Authorization()
    }
    //Create new user
    const onSubmit = (e) => {
        e.preventDefault()
        const values = createValuesObject()

        if (!addValidationInput(nickNameInput, REG_FORM.NICK_NAME) &&
            !addValidationInput(userNameInput, REG_FORM.USER_NAME) &&
            !addValidationInput(emailInput, REG_FORM.EMAIL)
        ) {
            const users = getUsers() || []

            if (checkDuplicate(users, values)) {
                alert('duplicated user')
                return
            }

            startGame(node, [...users, values])
        }
    }
    
    const root = document.getElementById('root')
    const node = document.createElement('div')
    node.className = 'main-wrap'
    node.id = 'registration'
    node.innerHTML = registrationTemplate
    const createBtn = node.querySelector('#createBtn')
    const userNameInput = node.querySelector('#userName')
    const nickNameInput = node.querySelector('#nickName')
    const emailInput = node.querySelector('#email')
    const signButton = node.querySelector('.signIn')

    changeBackground(root, true)

    addBlurInput(userNameInput, REG_FORM.USER_NAME)
    addBlurInput(nickNameInput, REG_FORM.NICK_NAME)
    addBlurInput(emailInput, REG_FORM.EMAIL)

    signButton.addEventListener('click', toAuth)
    createBtn.addEventListener('click', onSubmit)

    root.append(node)
}
