'use client';

import createCruise from '@/app/actions/createCruise';
import { useCruiseContext } from '@/app/context/cruiseContext';
import months from '@/app/utils/months';
import useBookingStep from '@/app/utils/hooks/useBookingStep';
import validatePaymentPage from '@/app/utils/validate/validPaymentPage';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

const PaymentPage = () => {
  const [error, setError] = useState(false);
  const { push } = useRouter();
  const { cruise } = useCruiseContext() as any;
  const { tipTipHooray, vacationProtection, total, ...rest } = cruise || {};

  useBookingStep(4, rest);

  const handleSubmit = async (values: any) => {
    const paymentAmountToday =
      values.paymentChoice === 'minimumAmount' ? 200 : cruise?.total;

    const payload = {
      ...cruise,
      ...values,
      cardNumber: values.cardNumber.toString(),
      paymentAmountToday,
    };

    const response = await createCruise(payload);

    if (response?.message) {
      setError(response.message);
    } else {
      push(`/cruise/${response.id}`);
      localStorage.clear();
    }
  };

  const years = [] as any;
  for (let year = 2023; year <= 2043; year++) {
    years.push(year.toString());
  }

  return (
    <motion.div
      key="payment"
      initial={{ opacity: 0, translateY: 150 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.75 }}
      className="mb-10"
    >
      <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-9">
        Choose your payment amount
      </h1>
      <div className="text-red-500 font-bold bg-white px-8 py-2 flex items-center justify-center my-3">
        {error}
      </div>
      <Formik
        initialValues={{
          paymentChoice: 'minimumAmount',
          firstName: '',
          lastName: '',
          cardNumber: '',
          cardExpMonth: '',
          cardExpYear: '',
          cardCVV: '',
          agreeToTicketContractAndHealthAcknowledgement: false,
        }}
        validate={validatePaymentPage}
        onSubmit={handleSubmit}
      >
        {({ values, isValid, touched }) => (
          <Form>
            <div className="relative bg-white shadow-lg overflow-hidden p-8 mb-10">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="font-bold text-[#061656]">Room</div>
                  <div className="text-gray-500 text-sm">
                    {cruise?.guests.adults + cruise?.guests.children} Guest
                    {cruise?.guests.adults + cruise?.guests.children === 1
                      ? ''
                      : 's'}
                  </div>
                </div>
                <hr className="border-t border-gray-300 w-full my-5" />
                <div className="flex justify-between w-full px-6 py-8 bg-slate-50 mb-2">
                  <div className="text-blue-950">Pay the minimum deposit</div>
                  <div className="flex items-center">
                    <label className="mr-3 text-blue-950 text-lg font-semibold">
                      $200.00 USD
                    </label>
                    <Field
                      type="radio"
                      name="paymentChoice"
                      value="minimumAmount"
                      checked={values.paymentChoice === 'minimumAmount'}
                    />
                  </div>
                </div>
                <div className="flex justify-between w-full px-6 py-8 bg-slate-50 mb-2">
                  <div className="text-blue-950">Pay the total balance</div>
                  <div className="flex items-center">
                    <label className="mr-3 text-blue-950 text-lg font-semibold">
                      ${cruise?.total} USD
                    </label>
                    <Field
                      type="radio"
                      name="paymentChoice"
                      value="totalAmount"
                      checked={values.paymentChoice === 'totalAmount'}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-white shadow-lg overflow-hidden p-8 mb-[200px]">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="mb-2 text-blue-950">Pay with credit card</div>
                  <div>
                    Add your credit card information below to make a payment.
                  </div>
                </div>
                <hr className="border-t border-gray-300 w-full my-5" />
                <div className="flex flex-col md:flex-row gap-10 mb-8">
                  <div className="flex flex-col w-full md:w-1/3">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-light text-gray-800"
                    >
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="mt-1 w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                      placeholder="Enter your first name"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/3">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-light text-gray-800"
                    >
                      Last Name
                    </label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="mt-1 w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                      placeholder="Enter your last name"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full md:flex-row gap-10">
                  <div className="flex flex-col w-full md:w-1/3">
                    <label
                      htmlFor="cardNumber"
                      className="text-sm font-light text-gray-800"
                    >
                      Card Number
                    </label>
                    <Field
                      type="number"
                      id="cardNumber"
                      name="cardNumber"
                      className="mt-1 pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                      placeholder="**** **** **** ****"
                    />
                    <ErrorMessage
                      name="cardNumber"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="flex flex-col  w-1/3">
                    <label
                      htmlFor="cardExpMonth"
                      className="text-sm font-light text-gray-800"
                    >
                      Expiration Date
                    </label>
                    <div className="flex items-center  w-full gap-3">
                      <div className="w-1/2">
                        <Field
                          as="select"
                          id="cardExpMonth"
                          name="cardExpMonth"
                          className="w-full mt-1 pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                        >
                          <option value="">Month</option>
                          {months.map((month) => (
                            <option key={month} value={month}>
                              {month}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="cardExpMonth"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                      <div className="w-1/2">
                        <Field
                          as="select"
                          id="cardExpYear"
                          name="cardExpYear"
                          className="w-full mt-1 pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                        >
                          <option value="">Year</option>
                          {years.map((year: any) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="cardExpYear"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-24">
                    <div className="text-sm font-light text-gray-800">CVV</div>
                    <Field
                      type="number"
                      id="cardCVV"
                      name="cardCVV"
                      className="mt-1 w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                      placeholder="CVV"
                    />
                    <ErrorMessage
                      name="cardCVV"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <aside className="bg-white px-7 py-5 fixed bottom-0 left-0 right-0 flex flex-col md:flex-row items-left md:items-center justify-between shadow-[0_0_0.5rem_0.0625rem_rgba(6,21,86,0.15)]">
              <div>
                <Field
                  className="mr-3"
                  type="checkbox"
                  name="agreeToTicketContractAndHealthAcknowledgement"
                  id="agreeToTicketContractAndHealthAcknowledgement"
                />
                <label
                  htmlFor="agreeToTicketContractAndHealthAcknowledgement"
                  className="text-sm"
                >
                  Agree to the Cruise Ticket Contract and Health Acknowledgement
                </label>
                <ErrorMessage
                  name="agreeToTicketContractAndHealthAcknowledgement"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex flex-col md:flex-row items-left md:items-center">
                <div className="mr-6">
                  Due today:{' '}
                  <span>
                    $
                    {values.paymentChoice === 'minimumAmount'
                      ? '200.00'
                      : cruise?.total.toFixed(2)}
                  </span>
                </div>
                <button
                  disabled={!isValid || Object.keys(touched).length === 0}
                  className={`bg-blue-500 px-6 py-3 text-white ${
                    !isValid || Object.keys(touched).length === 0
                      ? 'cursor-not-allowed'
                      : ''
                  }`}
                  type="submit"
                >
                  Book this cruise
                </button>
              </div>
            </aside>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default PaymentPage;
