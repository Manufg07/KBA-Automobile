"use strict";

const CarContract = require("./lib/car-contract");
const OrderContract = require("./lib/order-contract");

module.exports.CarContract = CarContract;
module.exports.OrderContract = OrderContract;

module.exports.contracts = [CarContract, OrderContract];
