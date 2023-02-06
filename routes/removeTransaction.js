const router = require('express').Router();
const Transaction = require('../controllers/Transaction');
const verifyToken = require('../middlewares/verifyToken');


router.post('/api-remove-transaction', verifyToken, Transaction.removeTransaction, (req, res) => {

});

module.exports = router;