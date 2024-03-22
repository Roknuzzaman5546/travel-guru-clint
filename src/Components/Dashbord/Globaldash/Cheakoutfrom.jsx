import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useChoicelist from "../../Hooks/useChoicelist";
import { AuthContext } from "../../Authprovider/Authprovider";
import Swal from "sweetalert2";
import UseaxiosPublic from "../../Hooks/UseAxiospublic";
// import { useNavigate } from "react-router-dom";

const Cheakoutfrom = () => {
    const [error, setError] = useState('');
    // const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [clientSecret, SetclientSecret] = useState();
    const [transictionid, setTransictionid] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = UseaxiosPublic();
    const [choice] = useChoicelist();

    const totalprice = choice.reduce((total, item) => total + item.cost, 0)
    // console.log(totalprice)
    const total = parseInt(totalprice)

    useEffect(() => {
        axiosPublic.post('/create-payment-intent', { cost: total })
            .then(res => {
                // console.log(res.data.clientSecret)
                SetclientSecret(res.data.clientSecret)
            })
    }, [axiosPublic, total])

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

        // Confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || 'anonymous',
                },
            }
        })
        if (confirmError) {
            console.log("confirm eroor")
        }
        else {
            console.log("payment intent", paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log("transiction id", paymentIntent.id)
                setTransictionid(paymentIntent.id)
                const payment = {
                    name: user?.displayName,
                    email: user?.email,
                    transictionid: paymentIntent.id,
                    price: totalprice,
                    date: new Date().toLocaleDateString("en-GB"),
                    choicelistIds: choice.map(item => item._id),
                    status: "pending"
                }
                const res = await axiosPublic.post("/payment", payment)
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    //   navigate("/")
                }
            }
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
                    {transictionid && <p className=" text-green-500 font-bold">Your transiction id: {transictionid}</p>}
                </div>
            </form>
        </div>
    );
};

export default Cheakoutfrom;