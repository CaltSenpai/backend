const res = require("express/lib/response");
const Transaction = require("../model/Transaction");
const Book = require("../model/Book");

const insertTransaction = async (req, res, next) => {
    console.log("ivde ond");
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



const checkIn = async(req, res,next) => {


    try {
        const {isbn} = req.body;
        const book = await Book.findOne({isbn})
        if (!book){
                return res.status(404).json({message:'Unable to update by this id'});
        }
         let new_data = book.no_of_copies;
         new_data ++ ;
         console.log(new_data)
        await Book.updateOne({isbn},{no_of_copies: new_data})
        return res.status(201).json({book});
    }
    catch(err) {
        console.log(err);
    }


};

const checkOut = async(req, res,next) => {


    try {
        const {isbn} = req.body;
        const book = await Book.findOne({isbn})
        if (!book){
                return res.status(404).json({message:'Unable to update by this id'});
        }
         let new_data = book.no_of_copies;
         new_data -- ;
         console.log(new_data)
        await Book.updateOne({isbn},{no_of_copies: new_data})
        return res.status(201).json({book});
    }
    catch(err) {
        console.log(err);
    }


};



exports.insertTransaction = insertTransaction;
exports.getAllTransactions = getAllTransactions;
exports.checkIn = checkIn;
exports.checkOut = checkOut;