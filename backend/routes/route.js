import express from 'express';
import path from 'path'; // Import path module for __dirname
import { Product } from '../models/models.js';
import cors from "cors";
import bodyParser from "body-parser";
import multer from 'multer';
import { fileURLToPath } from "url";
import helmet from 'helmet'
const router = express.Router();
router.use(express.urlencoded({extended:false}))
router.use(helmet());
router.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
router.use(bodyParser.json({ limit: "30mb", extended: true }));
router.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
router.use(cors());
// Define __filename and __dirname within the file scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

// Serve static files from the uploads directory
router.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads"); // Specify the directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Specify the filename for uploaded files
    }
});
const upload = multer({ storage });

// API endpoint to get all products
router.get('/products', async (req, res) => {
    try {
        const userId = req.query.userId; // Extract the userId query parameter from the request
        let query = {}; // Define an empty query object
    
        // If userId is provided in the query parameters, add it to the query
        if (userId) {
          query = { userId }; // Set the userId field in the query
        }
    
        // Fetch posts from the database based on the query
        const products = await Product.find(query);
    
        // Send the fetched posts as a response
        res.status(200).json(products);
      } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

// router.get('/:user',async(req,res)=>{

//     const selleremail= req.params.user;
//     try {
//         // Find products based on category
//         const useremail = await Product.find({ seller:selleremail });
//  console.log("seller is",useremail);
//         // If there are no products in that category, return an error
//         if (!useremail.length) {
//             return res.status(404).json({ message: 'No products found in this category' });
//         }

//         // If products are found, return them
//         res.json(useremail);
//     } catch (err) {
//         // If there's an error, return an error response
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }

// });
router.get('/:category', async (req, res) => {
    const category = req.params.category;
     
    try {
        // Find products based on category
        const products = await Product.find({ category });
  
        // If there are no products in that category, return an error
        if (!products.length) {
            return res.status(404).json({ message: 'No products found in this category' });
        }

        // If products are found, return them
        res.json(products);
    } catch (err) {
        // If there's an error, return an error response
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
router.get('/products/:id', async (req, res) => {
    try {
      const productId = req.params.id;
      // Fetch product from the database based on the productId
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      // Send the fetched product as a response
     // console.log(product)
      res.status(200).json(product);
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// API endpoint to update a product
router.put('/products/:id', upload.single('photo'), async (req, res) => {
    try {
        const productId = req.params.id;
        // Validate request body
        const { name, description, category, seller, price } = req.body; // Extract fields from request body
        let updateFields = {};
        if (name) updateFields.name = name;
        if (description) updateFields.description = description;
        if (category) updateFields.category = category;
        if (seller) updateFields.seller = seller;
        if (price) updateFields.price = price;
        if (req.file) updateFields.image = req.file.path; // Check if photo is uploaded

        // Update the product in the database
        const updatedProduct = await Product.findByIdAndUpdate(productId, updateFields, { new: true });

       // console.log('Product updated:', updatedProduct);

        res.json({ status: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API endpoint to delete a product
router.delete('/products/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        // Remove the product from the database by its ID
        await Product.findByIdAndDelete(productId);
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API endpoint to save a new product
// API endpoint to save a new product
router.post('/products', upload.single('photo'), async (req, res) => {
    try {
        // Validate request body
        const { name, description, category, seller, price ,location,condition,contact} = req.body; // Extract fields from request body
        const photoPath = req.file.path;
     //   console.log(photoPath);
        if (!name || !description || !category || !seller || !price) { // Check if all required fields are provided
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a new product instance
        const newProduct = new Product({
            name,
            description,
            location,
            condition,
            contact,
            price,
            image: photoPath,
            category,
            seller,
        
           
           
          
            
        });

        // Save the product to the database
        const savedProduct = await newProduct.save();

     //   console.log('Product saved:', savedProduct);

        res.json({ status: 'Product saved successfully', product: savedProduct });
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
