// window.addEventListener('DOMContentLoaded', () => {
//     const authBtn = document.getElementById('open-auth-btn')
// })

const authBtn = document.getElementById('open-auth-btn');
//const modal = document.getElementById('auth-modal');
const openCartBtn = document.getElementById('open-cart-btn');
const logoutBtn = document.getElementById('logout-btn');
const modal = document.getElementById('auth-modal');
const closeBtns = modal.querySelectorAll('.close-btn');
const loginBtn = modal.querySelector('.login-btn');


const openModal = () => {
    //modal.style.display = 'block'
    modal.classList.add('d-block')

    setTimeout(() => {
        modal.classList.add('show')
    }, 100)
}

const closeModal = () => {
    modal.classList.remove('show')

    setTimeout(() => {
        //modal.style.display = 'none'
        modal.classList.remove('d-block')
    }, 100)
    
}

const login = () => {
    //authBtn.style.display = 'none'
    authBtn.classList.add('d-none')
    openCartBtn.classList.remove('d-none')
    logoutBtn.classList.remove('d-none')
    //openCartBtn.style.display = 'block'
    //logoutBtn.style.display = 'block'
    closeModal()
}

const logout = () => {
    authBtn.classList.remove('d-none')
    openCartBtn.classList.add('d-none')
    logoutBtn.classList.add('d-none')
}

const checkAuth = () => {
    //console.log(localStorage.getItem('auth'));
    if (JSON.parse(localStorage.getItem('auth'))) {
        login()
    }
}
authBtn.addEventListener('click', openModal)


closeBtns.forEach((btn) => {
    btn.addEventListener('click', closeModal)
    })

loginBtn.addEventListener('click', () => {
    const loginInput = modal.querySelector('#login-control')
    const passwordInput = modal.querySelector('#password-control')

    const user = {
        login: loginInput.value,
        password: passwordInput.value
    }
    localStorage.setItem('auth', JSON.stringify(user))
    login()
})

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('auth')
    logout()
})

checkAuth()
