import mongoose from "mongoose";

let Schema = mongoose.Schema;

let OrdersSchema = new Schema({
    order_datetime: { type: "date", require: true },
    order_total_cost: { type: "decimal", require: true },
    user_id: { type: Schema.Types.ObjectId, ref: "users" },
    bank_id: { type: Schema.Types.ObjectId,ref:"bankcards" },
    pay_id: { type: Schema.Types.ObjectId, ref: "payingmethod" },
    tran_id: { type: Schema.Types.ObjectId, ref: "transportmethods" },
    loca_id: { type: Schema.Types.ObjectId, ref: "locations" },
    order_is_paying: { type: "int", default: 0 },
    quantity: { type: "int", default: 1 },
});

module.exports = mongoose.model("orders", OrdersSchema);
