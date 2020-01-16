import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_ikjIpwudRs84UJYxNf0EOBHc00PkX76vsB";

  const onToken = token => {
    console.log(token);
    alert("Payment Successfull!");
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Rainbow Store'
      billdingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
