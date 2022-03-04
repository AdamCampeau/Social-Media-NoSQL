const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/date-format')

const reactionSchema = new Schema({
    reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionText: {
        type: String,
        required: true,
        maxlength: 250
    },
    username: {
        type: String,
        required: true
    },
    createTime: {
        type: Date,
        default: Date.now,
        get: (createTimeVal) => dateFormat(createTimeVal)
    }
},
    {
        toJson: {
            getters: true
        },
        id: false
    });

module.exports = reactionSchema;