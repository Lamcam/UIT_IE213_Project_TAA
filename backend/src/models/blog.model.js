const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let BlogSchema = new Schema({
    b_title: { type: "string", required: true },
    b_date: { type: "string", required: true },
    b_content: { type: "string", required: true },
    b_heading: {
        type: [String],
        required: true,
    },
    b_text: {
        type: [String],
        required: true,
    },
    b_image: {
        type: [String], 
        required: true,
    },
});

module.exports = mongoose.model("bankcards", BlogSchema);
