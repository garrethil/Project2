const {User} = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        user_name: 'john_doe',
        email: 'john_doe@example.com',
        pswd: bcrypt.hashSync('p@ssword!23', 10), 
    },
];

const seedUser = async () => User.bulkCreate(userData);

module.exports = seedUser;