import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/route.js';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from "url";
const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({extended:false}))
app.use(cors());
// Middleware
app.use('/api', routes);
app.get('/uploads/:filename', (req, res) => {
    res.sendFile(path.join(__dirname + '/uploads/' + req.params.filename));
}); // this two line took me 1 day 

  
// MongoDB Connection
const MONGO_URI = 'mongodb://localhost:27017/test';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(MONGO_URI, options);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Configure routes


// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
