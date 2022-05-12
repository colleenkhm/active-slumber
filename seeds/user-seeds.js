const { User } = require('../models');

const userData = [
    {
        userName: 'Dolo',
        email: 'klnusftly@gmail.com',
        password: 'abc123ABC!'

    },
    {
        userName: 'Betty',
        email: 'bettywhite@gmail.com',
        password: 'abc123ABC!'

    },
    {
        userName: 'Cullers',
        email: 'imblueimblue@doobie.com',
        password: 'abc123ABC!'

    },
    {
        userName: 'Barb',
        email: 'iCutMyOwnHair@ucutit.com',
        password: 'abc123ABC!'

    }
    
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;