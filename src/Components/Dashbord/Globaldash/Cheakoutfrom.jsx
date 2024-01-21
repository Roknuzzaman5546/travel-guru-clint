import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiospublic from "../../Hooks/useaxiospublic";
import useChoicelist from "../../Hooks/useChoicelist";

const Cheakoutfrom = () => {
    const [error, setError] = useState('');
    const [clientSecret, SetclientSecret] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const axiospublic = UseAxiospublic();
    const [choice] = useChoicelist();

    const totalprice = choice.reduce((total, item) => total + item.cost, 0)
    console.log(totalprice)
    const total = parseInt(totalprice)

    useEffect(() => {
        axiospublic.post('/create-payment-intent', { cost: total })
            .then(res => {
                console.log(res.data.clientSecret)
                SetclientSecret(res.data.clientSecret)
            })
    }, [axiospublic, total])

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
                <div className=" flex flex-col justify-center items-center">
                    <button type="submit" className=" btn btn-warning mt-4" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                    <p className=" text-red-400 ">{error}</p>
                </div>
            </form>
        </div>
    );
};

export default Cheakoutfrom;