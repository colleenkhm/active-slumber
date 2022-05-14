const router = require('express').Router();
const { User, Sleep, Tag } = require('../../models');

// create GET route to get all sleep entries
router.get('/', async (req, res) => {
    try {
        const sleepData = await Sleep.findAll();
        res.status(200).json(sleepData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create GET route to get one sleep entry
router.get('/:id', async (req, res) => {
    try {
        const sleepData = await Sleep.findByPk(req.params.id, {
            include: [{model: Tag}]
        });

        if(!sleepData) {
            res.status(404).json({Message: 'No entry found with that id!'});
            return;
        }

        res.status(200).json(sleepData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create POST route to post sleep entry
router.post('/', async (req, res) => {
    // create a new sleep entry
    try {
        const sleepData = await Sleep.create({
            title: req.body.title,
            sleep_description: req.body.sleep_description,
            hours_slept: req.body.hours_slept,
            dream_sw: req.body.dream_sw,
            dream_description: req.body.dream_description,
        });
        // wasn't quite sure if save needed to be called or if that was directly related to user login
        req.session.save();
        res.status(200).json(sleepData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;