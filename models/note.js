const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const noteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', //am i referencing user right?
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Note', noteSchema);
