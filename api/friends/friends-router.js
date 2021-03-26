const router = require('express').Router()
const Friends = require('./friends-model')


router.get('/', (req, res, next)=>{
    Friends.getAll()
        .then(friends=>{
            res.status(200).json(friends)
        })
        .catch(next)
})
 router.post('/', (req, res, next)=>{
     const newFriend = req.body
     Friends.create(newFriend)
        .then(friend=>{
            console.log(friend)
            res.status(201).json(friend)

        })
 })

 router.delete('/:id', (req, res, next)=>{
     Friends.deleteById(req.params.id)
        .then(()=>{
            res.status(200).json({message: 'You got one less friend'})
        })
        .catch(next)
 })





module.exports = router