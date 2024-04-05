import mongoose from "mongoose";

let Schema = mongoose.Schema;

let TransportmethodsSchema = new Schema({
    tran_name: { type: "string", required: true },
    tran_cost: {type:"decimal", default:0.00}
});

module.exports = mongoose.model("transportmethods", TransportmethodsSchema);
