import { loadStripe } from '@stripe/stripe-js';
import Cheakoutfrom from './Cheakoutfrom';
import { Elements } from '@stripe/react-stripe-js';


const stripePromis = loadStripe(import.meta.env.VITE_PAYMENT)

const Payment = ({ enrollclass }) => {
    return (
        <div className=" mt-10 w-4/5 mx-auto">
            <h2 className=' my-16 text-4xl font-bold font-mono text-center'>Payment & do confirm your booking</h2>
            <div>
                <Elements stripe={stripePromis}>
                    <Cheakoutfrom enrollclass={enrollclass} ></Cheakoutfrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;