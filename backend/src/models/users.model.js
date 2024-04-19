const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let UsersSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    user_name: { type: "string", required: true },
    user_phone: { type: "string", required: true },
    user_email: { type: "string", required: true, uniquer: true },
    user_pass: { type: "string", require: true },
    user_avatar: { type: "string" }, //chỉnh lại sau (HAN chỉnh từ null thành string)
    local_default_id: { type: Schema.Types.ObjectId, ref: "locations"}, // HAN delete required: true
    bank_default_id: { type: Schema.Types.ObjectId, ref:"bankcards" },
    user_username: { type: "string" },
    user_cccd: {type:"string"},
});

module.exports = mongoose.model("users", UsersSchema);
