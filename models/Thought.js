const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction')
const dateFormat = require('../utils/date-format')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtValue => dateformat(createdAtValue),
            getter: true
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)

thoughtSchema.virtual('reationCount').get(function () {
    return this.reactions.length
})

const Thought = model('Thought', thoughtSchema)

module.exports = Thought;
