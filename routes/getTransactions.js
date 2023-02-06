const router = require('express').Router();
const Transactions = require('../controllers/Transaction')
const verifyToken = require('../middlewares/verifyToken');


router.get('/api-transactions', verifyToken, Transactions.getTransactions, (req, res) => {
});

module.exports = router;