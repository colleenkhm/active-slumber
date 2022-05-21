const router = require('express').Router();
const { Tag } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/',  async (req,res) => {
    
    try {
        const tagData = await Tag.findAll({
            attributes: [
                'id',
                'tag_name'
            ]
        });

        const tag = await tagData.map(post => post.get({plain: true}));
        res.render('createSleep', { tag, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;