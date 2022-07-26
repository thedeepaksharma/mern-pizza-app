const router = require("express").Router();
const KEY =
  "sk_test_51Jk05iSHjFXv3zpmdbEpnX2BaLEHcEfmh0yOpxhhf2kX1Dzc4CwILHtrLb9QpoWmeWPDZZjOi7JuDsPSwVPs9zE8008vWpXKuE";
// const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
