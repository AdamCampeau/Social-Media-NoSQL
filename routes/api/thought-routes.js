const router=require('express').Router();

const {
    getAllThought,
    getThoughtId,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThought)

router
    .route('/:thoughtId')
    .get(getThoughtId)
    .delete(deleteThought)

router
    .route('/thoughtId/reactions')
    .post(createReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports=router;