const express = require('express');
const router = express.Router();
const {createCustomers,customers,removeCustomer} = require('../controllers/customer');
const {cards,allCards}= require('../controllers/card')


//customers APIs
router.post('/customers', createCustomers);
router.get('/customers', customers);
router.delete('/removeCustomer/:customerId', removeCustomer);

//cards APIs
router.post('/cards', cards);
router.get('/cards', allCards);

module.exports = router;