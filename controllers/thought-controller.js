const { Thought, User } = require('../models');

const thoughtController = {
    getAllThought(req, res) {
        Thought.find()
            .sort({ _id: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400)
            })
    },
    getThoughtId({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
            .populate({
                path: "reactions",
                select: "-__v"
            })
            .select("-__v")
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({
                        message: "Page not found"
                    })
                    return;
                }
                res.json(dbThoughtData);
            })
    },

    // create thought


    // update thought


    //delete thought

    createReaction({ params, body }, res) {
        Thought.findOnceAndUpdate({ _id: params.thoughtId }, { $push: { reactions: body } }, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({
                        message: "Page not found"
                    });
                }
                return User.findOneAndUpdate(
                    { _id: params.UserId },
                    { $pull: { thoughts: params.ThoughtID } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({
                        message: "Page not found"
                    });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                res.json(err)
            });
    }
};

module.exports = thoughtController