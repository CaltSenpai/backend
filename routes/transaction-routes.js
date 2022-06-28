const express = require("express");
const transactionrouter = express.Router();
const Transaction = require("../model/Transaction")
const transactionController = require("../controllers/transaction-controller");


transactionrouter.post("/",transactionController.insertTransaction,transactionController.checkIn);
transactionrouter.get("/",transactionController.getAllTransactions);

module.exports = transactionrouter;