const mongoose = require('mongoose');

require('../configs/db.config');

const User  = require('../models/User.Model')



const users = [
    {
        username: 'ida',
        password:'kronic'
    },
    {
        username: 'vojislav',
        password:'zaja'
    },
    {
        username: 'neko',
        password:'svako'
    }
];

User.create(users)
.then(usersFromDB =>{
    console.log('Created projects from DB',usersFromDB.length);
    mongoose.connection.close();
})
.catch(err => console.log('Something went wrong with seding DB:',err))



