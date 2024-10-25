import express from 'express'
const router = express.Router()

//Route for the Login page
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login Page' })
})

//Route for the Register page
router.get('/register', (req, res) => {
    res.render('register', { title: 'Register Page' })
})

//Route for the Forgot Password page
router.get('/forgot-password', (req, res) => {
    res.render('forgot-password', { title: 'Forgot-password Page' })
})

//Route for the Reset Password page
router.get('/reset-password', (req, res) => {
    res.render('reset-password', { title: 'Reset-password Page' })
})

export default router