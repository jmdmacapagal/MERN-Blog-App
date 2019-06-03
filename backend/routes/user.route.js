const router = require('express').Router()
const User = require('../models/User.model')
const { registerValidation, loginValidation } = require('../validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// find all
router.get('/', async (req, res) => {
    try {
        const usersData = await User.find()
        res.status(200).json(usersData)
    } catch (error) {
        res.status(404).json(error)
    }
})

// find user by id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json('not found')
    }
})

// add new user
router.post('/register', async (req, res) => {

    // validation
    const { error } = await registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // check if existing already
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).send('Email Already Exist')

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // create user
        const userSignUp = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email
        })
    try {
        const newUser = await userSignUp.save()
        res.status(201).send(newUser)
    } catch (error) {
        res.json(400).json(error)
    }
})

// edit and update user username and email only
router.put('/edit/userDetails/:id', async (req, res) => {
    const { username, email } = req.body
    const id = req.params.id
    try {
        const user = await User.findByIdAndUpdate(id, {username, email})
        res.status(201).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
})

// edit and update user username and email only
router.put('/edit/userPassword/:id', async (req, res) => {
    const { password } = req.body
    const id = req.params.id
    try {
        const user = await User.findByIdAndUpdate(id, {password})
        res.status(201).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findByIdAndDelete(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
})

module.exports = router