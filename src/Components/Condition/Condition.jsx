/* eslint-disable react/no-unescaped-entities */

const Condition = () => {
    return (
        <div>
            {/* Header part */}
            <div className=" mt-12 ml-10 mb-16">
                <h2 className=" text-3xl font-bold font-serif mb-3">Travel guru Terms & Condition</h2>
                <p className=" text-xl font-thin">By accessing our website, you agree to adhere to our terms and conditions for responsible travel exploration with Travel Guru.</p>
            </div>
            {/* body */}
            <div className=" w-11/12 mx-auto mb-20 mt-28">
                <div className=" flex gap-10">
                    <div className=" md:w-[63%] w-full">
                        {/* payment part */}
                        <div>
                            <h2 className=" text-3xl font-bold font-serif mb-7 text-center">Payment</h2>
                            <div className="join join-vertical w-full">
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" defaultChecked />
                                    <div className="collapse-title text-xl font-medium">
                                        Are there any extra fees that I will have to pay on top of the listed price?
                                    </div>
                                    <div className="collapse-content">
                                        <p>The presence of extra fees on top of the listed price can vary greatly depending on what you're purchasing and where you're purchasing it from. Here are some common extra fees you might encounter.Always review the terms and conditions, as well as any fine print, when making a purchase to understand all potential fees that may apply. Additionally, if you're unsure about any fees, it's a good idea to ask the seller or service provider for clarification before completing the transaction.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                        Should I print a receipt to show the hotel reception?
                                    </div>
                                    <div className="collapse-content">
                                        <p>Whether you should print a receipt to show the hotel reception depends on the specific circumstances and policies of the hotel. Here are some factors to consider.Ultimately, it's a personal choice based on your preferences and the policies of the specific hotel you're staying at. If in doubt, it's always a good idea to reach out to the hotel directly to clarify their requirements.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                        How much does it cost to do a private company group?
                                    </div>
                                    <div className="collapse-content">
                                        <p>
                                            The cost of forming a private company group can vary widely depending on several factors, including the jurisdiction in which you're forming the group, legal fees, administrative costs, and any additional expenses associated with the specific requirements of the group structure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Reservation part */}
                        <div className=" mt-12">
                            <h2 className=" text-3xl font-bold font-serif mb-7 text-center">Reservation</h2>
                            <div className="join join-vertical w-full">
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" defaultChecked />
                                    <div className="collapse-title text-xl font-medium">
                                        What is your refund policy?
                                    </div>
                                    <div className="collapse-content">
                                        <p>
                                            The cost of forming a private company group can vary widely depending on several factors, including the jurisdiction in which you're forming the group, legal fees, administrative costs, and any additional expenses associated with the specific requirements of the group structure.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                        Do you offer 30 days money back guarantee?
                                    </div>
                                    <div className="collapse-content">
                                        <p>As an AI language model developed by OpenAI, I don't offer products or services directly, so I don't have the ability to provide a 30-day money-back guarantee myself. However, many companies and service providers do offer such guarantees on their products or services.If you're considering purchasing a product or service and are interested in knowing whether it comes with a 30-day money-back guarantee, I recommend checking the terms and conditions provided by the seller or contacting their customer service directly to inquire about their refund policy.Keep in mind that refund policies can vary between companies and even between different products or services offered by the same company, so it's always a good idea to review the specific terms before making a purchase.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                        Which currency do you accept?
                                    </div>
                                    <div className="collapse-content">
                                        <p>As an AI developed by OpenAI, I don't accept payments or transactions, so currency is not applicable in the context of interacting with me. However, if you're referring to a specific service or platform that utilizes AI technology, such as a subscription service or software product, you would typically need to refer to the payment options provided by that service or platform.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" md:w-[35%] w-full">
                        <h2 className=" text-3xl font-bold font-serif mb-5">Can’t Find Answer? Ask us</h2>
                        <div>
                            <form>
                                <div>
                                    <p className=" text-xl">Name</p>
                                    <input className=" border-b-2 w-full py-4" type="text" name="" id="" />
                                </div>
                                <div className="mt-4">
                                    <p className=" text-xl">Email*</p>
                                    <input className=" border-b-2 w-full py-4" type="text" name="" id="" />
                                </div>
                                <div className="mt-4">
                                    <p className=" text-xl">Phone*</p>
                                    <input className=" border-b-2 w-full py-4" type="text" name="" id="" />
                                </div>
                                <div className="mt-4">
                                    <p className=" text-xl">Message*</p>
                                    <input className=" border-b-2 w-full py-7" type="text" name="" id="" />
                                </div>
                                <button className=" bg-[#ff9c1c] hover:bg-[#000] text-white px-6 py-3 rounded-md text-xl font-bold font-mono mt-4 text-center">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Condition;