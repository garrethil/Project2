const {User} = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        user_name: 'john_doe',
        email: 'john_doe@example.com',
        pswd: bcrypt.hashSync('p@ssword!23', 10), 
    },
    {
        username: 'jane_day',
        email: 'janeDay@example.com',
        password: bcrypt.hashSync('@pple!23', 10),
    },
    {
        username: 'mike_smith',
        email: 'mikeSmith@example.com',
        password: bcrypt.hashSync('projecT432', 10),
    },
    {
        username: 'sara_bill',
        email: 'saraBill@example.com',
        password: bcrypt.hashSync('mond@y!32', 10),
    },
];

const seedUser = async () => User.bulkCreate(userData);

module.exports = seedUser;