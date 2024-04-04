import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51NnvnTSHy3suZfykzZe4ALmznxj2NWzWiaAAEYZzUa3E09y8Lu28Khuwjwlh73aowbbzYKtH4fUuZmhvNgBOz3Ql00WHiO1kD9"
);

function Payment({ obj }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    axios
      .post("http://localhost:3000/create-checkout-session", obj)
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });

  }, []);

  // console.log(clientSecret)
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="style">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <div className="bg-gray-200 p-5">
            <CheckoutForm />
          </div>
        </Elements>
      )}
    </div>
  );
}



export default Payment