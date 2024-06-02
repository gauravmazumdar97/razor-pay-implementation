const Razorpay = require('razorpay');
require('dotenv').config();
const Request = require('./request')



// Initialize your Razorpay Account
let razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});


class Controller {



    // Order by passing Amount and Currenct in the Razor Order API
    async orderCreate(req, res) {
        const input = req.body;

        try {

            const { error, value } = await Request.razorModel().validate(input);
            if (error && error.details[0]) {
                return res.status(500).send("Error :", error.details[0].message);
            }

            // Create an order with specified amount, currency, and receipt
            const order = await razorpay.orders.create({
                amount: input.amount * 100, // amount in the smallest currency unit (paise)
                currency: input.currency || "INR",
                receipt: 'receipt#1',
            });



            // Send the order details in the response
            console.log(order);
            res.status(200).send(order);


        } catch (error) {
            // If there's an error, send the error in the response
            console.log(error);
            res.status(500).send(error);
        }
    }




    // Fetch Order by passing orderId in the Razor Fetch API
    async fetchOrderById(req, res) {
        const input = req.body;

        try {

            const { error, value } = await Request.razorModel().validate(input);
            if (error && error.details[0]) {
                return res.status(500).send("Error :", error.details[0].message);
            }

            // Fetch function will find out the order according to your orderId 
            const order = await razorpay.orders.fetch(input);

            // Send the order details in the response
            if (!order) {
                res.status(500).send(order);
            } else {
                res.status(200).send(order);
            }


        } catch (error) {
            // If there's an error, send the error in the response
            console.log(error);
            res.status(500).send(error);
        }
    }





}

module.exports = new Controller();
