import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ean:{type: String, required: true},
    article_code:{type: String, required: true},
    master_category:{type: String, required: true},
    category:{type: String, required: true},
    product_type:{type: String, required: true},
    brand:{type: String, required: true},
    unit:{type: String, required: true},
    sale_unit:{type: String, required: true},
    purchase_unit:{type: String, required: true},
    alert_quantity:{type: Number, min: 0, max: 100, required: true},
    vat:{type: String, required: true},
    vat_method:{type: String, required: true},
    shipping_method:{type: String, required: true},
    slug:{type: String, required: true},
    featured:{type: Boolean, required: true},
    hide_website:{type: Boolean, required: true},
    photo:{type: String},
    status: { type: Boolean, required: true }
}, {
    timestamps: true
});

const Products = mongoose.model('Products', productsSchema);
export default Products;