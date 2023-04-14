// Registration form template
const registrationTemplate = `
            <form action="" class="form">
            <h2 class="form-name">Create account</h2>
            <div class="input-field">
                <label for="nickname">Nickname:</label>
                <input type="text" placeholder="Enter your nickname" id="nickName" name="nickName" required>
            </div>
            <div class="input-field">
                <label for="name">Name:</label>
                <input type="text" placeholder="Enter your name" id="userName" name="userName" required>
            </div>
            <div class="input-field">
                <label for="email">Email:</label>
                <input type="text" placeholder="Enter your email" id="email" name="email" required>
            </div>
            <div class="form-button">
                <button id="createBtn">Create user</button>
            </div>
            <p class="or">or</p>
            <div class="form-button">
                 <a href="#" class="signIn">Sign in</a>
            </div>
            
        </form>
    `

// Sign in form template
const authorizationTemplate = `
    <form action="" class="form in">
            <h2 class="form-name">Sign in</h2>
            <div class="input-field">
                <label for="auth">Nickname or email:</label>
                <input type="text" placeholder="Enter your nickname or email" id="auth" name="auth" required>
            </div>
            <div class="form-button">
                <button id="signIn">Sign in</button>
            </div>
            <p class="or">or</p>
            <div class="form-button">
                 <a href="#" class="signUp">Sign up</a>
            </div>
        </form>
`
