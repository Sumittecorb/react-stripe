
const PayCard = () => {
    return (
        <>
            <div className="flex justify-center my-28">
                <div class="rounded overflow-hidden shadow-lg PaymainCard">
                    <div className="headerSection mb-5 mt-5">
                        <div className="imgSection ">
                            <img class="w-full" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Sunset in the mountains" />
                        </div>
                        <h1 className=" text-center mt-5">Wildlife Expedition</h1>
                        <div className="mt-3">
                            <ul className="flex justify-center">
                                <li className="flex items-center">
                                    <a>SELECT TICKET</a>
                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <a>TICKET INFORMATION</a>
                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                    </svg>
                                </li>
                                <li>
                                    <a className="active">PAYMENT INFORMATION</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="gridSystem">
                        <div class="flex items-center justify-center">
                            <div class="col-span-2 bg-white p-5 rounded leftColumd">
                                <div class="max-w-lg rounded overflow-hidden innerCard">
                                    <div class=" py-4">
                                        <div class="font-bold text-xl mb-2 px-5 flex justify-between">
                                            <h6>SEPA Debit</h6>
                                            <div className="flex iconArea">
                                                <img src='/icon/discovercard.svg' />
                                                <img src='/icon/maestrocard.svg' />
                                                <img src='/icon/visa.svg' />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="dataContainer">
                                            <div className="mt-4 inputArea">
                                                <label for="confirm_password" class="block text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                                                <input type="text" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jane Smith" required />
                                            </div>
                                            <div className="mt-4 inputArea">
                                                <label for="confirm_password" class="block text-sm font-medium text-gray-900 dark:text-white">Card Details</label>
                                                <input type="text" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jane Smith" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-6 pt-3 pb-3 payBtn text-center">
                                    <button>Pay now</button>
                                </div>
                            </div>
                            {/* <div class="bg-white p-5 rounded rightColumn">
                                <h4>Your Order</h4>
                                <hr />
                                <p>Monday 8 june, 10:00 AM</p>
                                <div className="flex justify-between">
                                    <h5>1 * Ticket</h5>
                                    <h5>C108.25</h5>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <p>Subtotal</p>
                                    <p>C108.25</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Service charge</p>
                                    <p>C108.25</p>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <h3>Total</h3>
                                    <h3>119.25</h3>
                                </div>
                                <h2 className="text-right">universe</h2>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PayCard;
