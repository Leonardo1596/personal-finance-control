const router = require('express').Router();
const Transaction = require('../controllers/Transaction');
const verifyToken = require('../middlewares/verifyToken');


// Post a new transaction
router.post('/api-post-transactions', verifyToken, Transaction.postTransaction, (req, res) => {
});

module.exports = router;