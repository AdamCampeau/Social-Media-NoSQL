const router=require('express').Router();

const {
    getAllThought,
    getThoughtId,
    // createThought,
    // updateThought,
    // deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThought)
    // .post(createThought)

router
    .route('/:thoughtId')
    .get(getThoughtId)
    // .put(updateThought)
    // .delete(deleteThought)

router
    .route('/thoughtId/reactions')
    .post(createReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports=router;