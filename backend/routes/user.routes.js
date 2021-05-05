const express = require('express');
const router = express.Router();

const User  = require('../models/User.Model')

///all users
router.get('/all-users', (req, res, next) => 
User.find()
.then(allUsersFromDb=>{
    res.json(allUsersFromDb)
})
.catch(err=>res.json(err))
);

////add user
router.post('/new-user', (req, res, next) => {

    const {username, password, imageUrl} = req.body;

    User.create({username, password, imageUrl})
    .then(createdUser=>{
        console.log('-----res.locals',res.locals)
        res.status(200).json(createdUser)
    })
    .catch(err=>{
        res.json(err)
    })

})

///delete user
router.delete('/all-users/:id', (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.json({message: 'User deleted'})
    })
    .catch(error=>{
        res.json(error)
    })
});

////update user
router.put('/all-users/:id', (req, res, next)=>{
    console.log('this is body',req.body)
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
        res.json({message:'User updated'})
    })
    .catch(err=>res.json(err))
})





////one user details
router.get('/all-users/:id', (req, res, next) => {
    User.findById(req.params.id)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(error=>{
        res.json(error)
    })
});




module.exports = router;
