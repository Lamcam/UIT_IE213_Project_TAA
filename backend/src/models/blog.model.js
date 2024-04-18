const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let BlogSchema = new Schema({
    b_title: { type: "string", required: true },
    b_date: { type: "string", required: true },
    b_content: { type: "string", required: true },
    b_heading: { type: "string", required: true },
    b_heading: {
        type: [String], // Đây là một mảng các chuỗi
        required: true,
    },
    b_text: { type: "string", required: true },
    b_text: {
        type: [String], // Đây là một mảng các chuỗi
        required: true,
    },
    b_image: { type: "string", required: true },
    b_image: {
        type: [String], // Đây là một mảng các chuỗi
        required: true,
    },
});

module.exports = mongoose.model("blog", BlogSchema);
