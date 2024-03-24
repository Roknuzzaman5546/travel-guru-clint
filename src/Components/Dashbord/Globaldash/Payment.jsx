import { loadStripe } from '@stripe/stripe-js';
import Cheakoutfrom from './Cheakoutfrom';
import { Elements } from '@stripe/react-stripe-js';
import { useSearchParams } from 'react-router-dom';


const stripePromis = loadStripe(import.meta.env.VITE_PAYMENT)

const Payment = ({ enrollclass }) => {
    const [params] = useSearchParams();
    const queryParams = {
        cost: params.get("cost"),
        name: params.get("name"),
        img: params.get("img"),
        choiceId: params.get("choiceId"),
    }
    // console.log(queryParams);
    return (
        <div className=" mt-10 w-4/5 mx-auto">
            <h2 className=' my-16 text-4xl font-bold font-mono text-center'>Payment & do confirm your booking</h2>
            <div>
                <Elements stripe={stripePromis}>
                    <Cheakoutfrom queryParams={queryParams} enrollclass={enrollclass} ></Cheakoutfrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;