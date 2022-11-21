const express = require('express')
const { signup, signin } = require('../controller/userController')
const route = express.Router()

// new user sign up
route.post('/signup', signup)
// user login
route.post('/signin', signin);

module.exports = route