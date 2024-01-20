
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB (replace 'your-mongodb-uri' with your MongoDB URI)
// mongoose.connect('mongodb+srv://Dentee:Dentee1234@denteecluster.z7tggmn.mongodb.net/Dentee?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });
// // Define a MongoDB schema for invoices
// const invoiceSchema = new mongoose.Schema({
//   currentDate: String,
//   invoiceNumber: Number,
//   customerName: String,
//   phoneNumber: String,
//   Email: String,
//   notes: String,
//   total: String,
//   subTotal: String,
//   taxRate: String,
//   taxAmount: String,
//   discountRate: String,
//   discountAmount: String,
//   items: [
//     {
//       id: Number,
//       name: String,
//       description: String,
//       price: String,
//       quantity: Number
//     }
//   ]
// });

// const Invoice = mongoose.model('Invoice', invoiceSchema);

// // Define a route to handle invoice creation
// app.post('/invoice', async (req, res) => {
//   try {
//     const newInvoice = new Invoice(req.body);
//     const savedInvoice = await newInvoice.save();
//     res.json(savedInvoice);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const invoiceRoutes = require('./routes/invoiceRoutes');
app.use('/api', invoiceRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
