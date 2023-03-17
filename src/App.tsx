import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Component/CardElement";
import PayCard from "./Component/WildLife";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("{{Stripe Key  'pk_test_*******************************'}}");

export default function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "",
  };

  return (
    <>
      <Elements stripe={stripePromise}>
        {/* <CheckoutForm /> */}
        <PayCard/>
      </Elements>
    </>
  );
}
