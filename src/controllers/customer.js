const Customer = require('../models/customerSchema');

const createCustomers = async (req, res) => {
  try {
    const data = req.body;
    const customer = await Customer.create(data);
    res.status(202).json({ status: true, data: customer });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const customers = async (req, res) => {
  try {
    const result = await Customer.find({ status: 'ACTIVE' });
    res.status(202).json({ status: true, data: result });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const removeCustomer = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const result = await Customer.findByIdAndDelete({_id:customerId});
    res.status(202).json({ status: true, data: result });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { createCustomers, customers, removeCustomer };
