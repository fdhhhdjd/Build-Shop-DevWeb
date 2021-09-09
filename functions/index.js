const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JXQenIBbq837XS8c5mB0ryx9NYJ1lSQvWBylQaDveUk8nvvwKe46K9KEDBF14hlDM1kMn5g5j3s9t8BEs2ay1xZ00h5yXVH03"
);
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) =>
  response.status(200).send("Hello Tai Heo Fa")
);
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//http://localhost:5001/demoweb-41d86/us-central1/api
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.api = functions.https.onRequest(app);
