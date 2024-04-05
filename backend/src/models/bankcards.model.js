import mongoose from "mongoose";

let Schema = mongoose.Schema;

let BankcardsSchema = new Schema({
    bank__name: { type: "string",default:"ABC"},
    bank_number: { type: "string", default:"1234567890" },
    bank_pers_name: { type: "string", default: "Nguyễn Văn A" },
    bank_pers_id: { type: "string", default: "9876543210" },
    user_id: { type: Schema.Types.ObjectId, ref: "users" },
});

module.exports = mongoose.model("bankcards", BankcardsSchema);