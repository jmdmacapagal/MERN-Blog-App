const router = require('express').Router()
let BlogPost = require('../models/Blog.model')
const verifyUser = require('../verifyToken')

// find all
router.get('/', verifyUser, async (req, res) => {
    try {
        const posts = await BlogPost.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({
            failed: error
        })
    }
})

// find by id
router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const post = await BlogPost.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({
            notFound: error
        })
    }
})


// add new
router.post('/new', async (req, res) => {
    const post = new BlogPost(req.body)
    try {
        const newPost = await post.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json({
            failed: error
        })
    }
})

// edit and update existing
router.put('/edit/:id', async (req, res) => {
    const {
        title,
        body,
        author
    } = req.body
    const id = req.params.id
    try {
        const post = await BlogPost.findByIdAndUpdate(id, {
            title,
            body,
            author
        })
        res.status(201).json(post)
    } catch (error) {
        res.status(404).json({
            notFound: error
        })
    }
})

// delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const post = await BlogPost.findByIdAndDelete(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({
            notfound: error
        })
    }
})

module.exports = router