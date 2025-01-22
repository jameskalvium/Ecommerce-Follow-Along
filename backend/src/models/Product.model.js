const mongoose = require('mongoose');

const SchemaObject = {
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 1 },
  discountedPrice: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  category: { type: String, required: true, enum: ['male', 'female', 'kids'] },
  images: [
    {
      type: String,
      required: true,
      default:
          "https://cdnmedia.placewellretail.com/pub/media/catalog/product/cache/d2f155c8ae3423b25125c336aa39579e/s/a/samsung_galaxy_s24_ultra_titanium_black.webp"
        ,
    },
  ],
  userEmail: {type: String, require:true},  

};
const productSchema = new mongoose.Schema(SchemaObject, { versionKey: false });
const ProductModel = mongoose.model('Product', productSchema);
module.exports = ProductModel;