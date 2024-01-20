const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoiceModel');

router.post('/invoice', async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    const savedInvoice = await newInvoice.save();
    res.json(savedInvoice);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
