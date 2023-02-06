const User = require('../models/UserSchema');

const postTransaction = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(result => {
            // console.log(result);
            // res.json({ message: result });
            const existTransaction = result.transactions.find(t => t.description === req.body.description);

            if (existTransaction) {
                return res.json({ message: 'Esta transação já existe.' });
            } else {
                result.transactions.push(req.body);
                result.save((saveerr, saveresult) => {
                    if (!saveerr) {
                        res.json({ message: 'A transação foi adicionada!', result: saveresult });
                    } else {
                        res.json({ message: saveerr });
                    }
                })
            }

        })
        .catch(err => {
            console.log(err)
            res.json({ message: err });
        });
}

const removeTransaction = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(result => {
            // res.json({ message: result });
            const existTransaction = result.transactions.find(t => t.description === req.body.description);

            if (existTransaction) {
                result.transactions.remove(req.body);
                result.save((removeerr, removeresult) => {
                    if (!removeerr) {
                        res.json({ message: 'A transação foi removida.', result: removeresult });
                    } else {
                        res.json({ message: removeerr });
                    }
                })
            } else {
                res.json({ message: 'Esta transação não existe' });
            }
        });
}


const getTransactions = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(result => {
            res.json({ message: result.transactions });
        });
}


module.exports = {
    postTransaction,
    removeTransaction,
    getTransactions
};