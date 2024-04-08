import mongoose from "mongoose";

let Schema = mongoose.Schema;

let LocationsSchema = new Schema({
    loca_pers__name: { type: "string", required: true },
    loca_pers_phone: { type: "string", required: true },
    loca_address: { type: "string", default: "" },
    loca_detail: { type: "string", default: "" },
    user_id: { type: Schema.Types.ObjectId, ref: "users" },
});

module.exports = mongoose.model("locations", LocationsSchema);
