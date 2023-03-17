import {
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const cardElement: any = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement, {
      name: "",
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Get the stripe token
      console.log(result.token);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="cardContainer">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <CardElement />
            </div>
            <div className="px-6 pt-3 pb-3 payBtn text-center">
              <button disabled={!stripe}>Pay now</button>
            </div>
          </div>
        </div>
      </form>
    </>

  );
};

export default CheckoutForm;
