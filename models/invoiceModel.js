const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  currentDate: String,
  invoiceNumber: Number,
  customerName: String,
  phoneNumber: String,
  Email: String,
  notes: String,
  total: String,
  subTotal: String,
  taxRate: String,
  taxAmount: String,
  discountRate: String,
  discountAmount: String,
  items: [
    {
      id: Number,
      name: String,
      description: String,
      price: String,
      quantity: Number
    }
  ]
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
