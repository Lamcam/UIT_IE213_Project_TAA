import mongoose from "mongoose";

let Schema = mongoose.Schema;

let UsersSchema = new Schema({
    user_name: { type: "string", required: true },
    user_phone: { type: "int", required: true },
    user_email: { type: "string", required: true },
    user_pass: { type: "string", require: true },
    user_avatar: { type: "null" }, //chỉnh lại sau
    local_default_id: { type: "string", required: true },
    bank_default_id: { type: "string" },
});

module.exports = mongoose.model("users", UsersSchema);
