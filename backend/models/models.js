import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        
    },
    condition: {
        type: String,
        
    },
    contact: {
        type: String,
        
    },
    price:{
        type:String,
        required:true,
    },
    image: {
        type: String, // Assuming the image is stored as a URL
    },
    category: {
        type: String,
        // Assuming each product must belong to a category
    },
    seller: {
        type: String,
        ref: 'User',
        required: true, // Assuming every product must have a seller
    },
    // Add more fields as needed for your product
});

const Product = mongoose.model('Product', productSchema);

export { Product };
