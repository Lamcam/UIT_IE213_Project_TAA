import mongoose from "mongoose";

let Schema = mongoose.Schema;

let ProductsSchema = new Schema({
    prod_name: { type: "string", required: true },
    prod_cost: { type: "decimal", required: true },
    prod_discount: { type: "decimal", required: true },
    prod_end_date_discount: { type: "date", required: true },
    prod_num_sold: { type: "int", default: 1 },
    prod_num_avai: { type: "int", default: 50 },
    prod_star_rating: { type: "int", default: 0 },
    prod_description: { type: "string", default: "" },
    cate_id: { type: Schema.Types.ObjectId, ref: "categories" },
});

module.exports = mongoose.model("products", ProductsSchema);
