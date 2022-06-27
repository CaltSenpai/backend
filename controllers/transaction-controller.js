const res = require("express/lib/response");
const Transaction = require("../model/Transaction");

const insertTransaction = async (req, res, next) => {
    const{isbn, pid, date, type} = req.body;
    let transaction;
    try {
        transaction = new Transaction({
            isbn,
            pid,
            date,
            type
        });
        await transaction.save();
        console.log(transaction);
    } catch (err) {
        console.log(err);
    }
    if (!transaction) {
        return res.status(500).json({message:'Unable to Add'});
    }
    return res.status(201).json({transaction});
    console.log(req.body)
};

const getAllTransactions = async(req, res ,next) => {
    let transaction;
    try {
        transaction = await Transaction.find();
    } catch (err) {
        console.log(err);
     }

    if(!transaction) {
         return res.status(404).json({message:"No products found"});
     }
     return res.status(200).json({transaction});
};

exports.insertTransaction = insertTransaction;
exports.getAllTransactions = getAllTransactions;