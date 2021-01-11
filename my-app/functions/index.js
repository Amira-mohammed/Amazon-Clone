const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I0EWcF5P2rvaUraEkJowaj9aYtisQMqW0hWYrywloIhiJztJRiYCRMonhAbsTkoHtQdMHRFkSOLCgcL2bh9ZTIn00AvL27ozh"
);

//API
//APP CONFIG
const app = express();
//MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());
//API ROUTES
app.get("*/", (request, response) => response.status(200).send("hello world"));
app.post("*/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received  boom", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunities of currency
    currency: "usd",
  });
  // ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//LISTEN command

exports.api = functions.https.onRequest(app);

// ex endpoint
// http://localhost:5001/my-app-591f3/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
