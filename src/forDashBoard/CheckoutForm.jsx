import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from '../myHooks/useAxiosSecure';
import useCart from '../myHooks/useCart';
import useAuth from "../myHooks/useAuth";
import { toast } from "react-toastify";


const CheckoutForm = () => { 
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [cart, refetch] = useCart();
    const {user} = useAuth();
    const price = cart.reduce((accumulator, item) => accumulator + parseFloat(item.price) , 0);
    const axiosSecure = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
      if(price > 1){
       axiosSecure.post('/create-payment-intent', {price: price} )
       .then(res => {
         setClientSecret(res.data.clientSecret);
       })
      }
 
     },[axiosSecure,  price]);
 
    const handleSubmit = async(event) => {
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card == null){
            return ;
        }
        const {error , paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if(error){
            console.log(`[error]`, error);
            setError(error.message)
        }
        else{
            console.log(`[paymentMethod]`, paymentMethod);
            setError('')
        }
        const {paymentIntent, error: cardError} = await stripe.confirmCardPayment(
          clientSecret,{
            payment_method: {
              card: card,
              billing_details: {
                email: user.email,
                name: user.name
              }
            }
          }
          )
          if(cardError){
            console.log("card Error", cardError)
          }
          else{
            console.log("paymentIntent", paymentIntent);
            if(paymentIntent.status === 'succeeded'){
              toast("Payment successful");
              setTransactionId(paymentIntent.id);
              const payment = {
                email: user.email,
                price: price,
                date: new Date(), //utc date convert .use moment js,
                cartIds: cart.map(item => item._id),
                menuIds: cart.map(item => item.menuId),
                status: 'pending',
                transactionId: transactionId

              }
              const res = await axiosSecure.post('/payments', payment);
              console.log(res.data);
              refetch();
            }
          }
    };

   
    return (
<div>
  <p className="text-2xl text-green-500 my-14"> Pay: ${price}</p>
<form onSubmit={handleSubmit}>
             <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe} className="btn btn-primary">
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {
       transactionId && <p className="text-green-500">Your transactionId is:{transactionId}</p>
      }
        </form>
</div>
    );
};

export default CheckoutForm;