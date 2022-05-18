const router = require('express').Router();
const { Sleep, SleepTag, User, Tag } = require('../models');

router.get('/', async (req,res) => {
    try {
        const sleepData = await Sleep.findAll({
            attributes: [
                'title',
                'sleep_description',
                'hours_slept',
                'dream_sw',
                'dream_description'
            ],
            include: [
                {
                   model: User,
                   attributes:['username'] 
                },
                {
                    model: Tag,
                    attributes:['tag_name'],
                }
            ]

        });

        const sleep = await sleepData.map(post => post.get({plain: true}));
        res.render('homepage', { sleep });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/', (req,res) => {
    console.log(req.session);
})

module.exports = router;