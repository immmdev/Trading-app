const mongoose = require("mongoose");

const PositionSchema = mongoose.Schema({
    product: {
        type: String,
        required: true,

    },
    name: {
        type: String,
        required: true,

    },
    qty: {
        type: Number,
        required: true,
        min: 0
    },

    avg: {
        type: Number,
        required: true,

    },
    price: {
        type: Number,
        required: true,

    },
    net: {
        type: Number,
        required: true,

    },
    day: {
        type: Number,
        required: true,

    },
    isLoss: {
        type: Boolean,
        required: true,

    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model("position", PositionSchema);

