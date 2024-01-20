import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiospublic from "../../Hooks/useaxiospublic";

const Cheakoutfrom = () => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiospublic = UseAxiospublic();

    useEffect(() => {
        axiospublic.post('create-payment-intent', )
    }, [axiospublic])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error)
            setError(error?.message)
        }
        if (paymentMethod) {
            console.log('payment method', paymentMethod)
            setError('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className=" bg-gray-400 p-4 flex flex-col text-4xl rounded font-bold"
                    options={{
                        style: {
                            base: {
                                fontSize: '24px',
                                color: 'black',
                                '::placeholder': {
                                    color: 'blue',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className=" btn btn-warning mt-4" disabled={!stripe}>
                    Pay
                </button>
                <p className=" text-red-400 ">{error}</p>
            </form>
        </div>
    );
};

export default Cheakoutfrom;