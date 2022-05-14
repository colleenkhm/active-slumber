const router = require('express').Router();
const { User, Sleep, Tag } = require('../../models');

// create GET route to get all tags
router.get('/', async (req, res) => {
    try {
        const tagData = await Tag.findAll();
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;