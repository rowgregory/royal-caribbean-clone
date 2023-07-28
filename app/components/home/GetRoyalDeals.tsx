'use client';

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import countries from '@/app/utils/countries';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const GetRoyalDeals = () => {
  const [finished, setFinished] = useState(false);
  const initialValues = {
    firstName: '',
    lastName: '',
    country: 'United States',
    email: '',
  };

  const validateForm = (values: any) => {
    const errors = {} as any;
    if (!values.firstName) {
      errors.firstName = 'Missing First Name';
    }
    if (!values.lastName) {
      errors.lastName = 'Missing Last Name';
    }
    if (!values.email) {
      errors.email = 'Missing Email Address';
    }
    return errors;
  };

  const handleSubmit = (values: any) => {
    setFinished(true);
  };

  return (
    <div className="max-w-[1920px] px-4 md:px-12 xl:px-[190px] relative w-full mx-auto my-20">
      <h1 className="mb-6 w-full flex justify-center font-kapra-condensed text-5xl text-[#15264c] tracking-[2px]">
        GET ROYAL DEALS, SIGN UP TODAY
      </h1>
      {finished ? (
        <div className="flex items-center justify-center">
          <AiOutlineCheckCircle className="text-green-500 text-5xl" />
          <span className="text-gray-600 font-light text-2xl ml-4">
            Thank you for signing up!
          </span>
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          <Form className="flex flex-col lg:justify-between lg:flex-row gap-7">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-y-12 md:gap-x-6 lg:grid-cols-4">
              <div className="w-full relative">
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="border border-gray-300 h-11 px-3 rounded-sm w-full"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-600 text-xs absolute flex justify-end w-full"
                />
              </div>
              <div className="w-full relative">
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="border border-gray-300 h-11 px-3 rounded-sm w-full"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-600 text-xs absolute flex justify-end w-full"
                />
              </div>

              <div className="w-full relative">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="border border-gray-300 h-11 px-3 rounded-sm w-full"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-xs absolute flex justify-end w-full"
                />
              </div>
              <div className="w-full relative">
                <label className="text-xs absolute top-[-15px] text-gray-400">
                  Country/Location
                </label>
                <Field
                  as="select"
                  id="country"
                  name="country"
                  className="border border-gray-300 h-11 px-3 rounded-sm w-full text-slate-400"
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-600 text-xs absolute flex justify-end w-full"
                />
              </div>
            </div>
            <button
              className="text-sm tracking-[1px] bg-blue-600 h-11 w-full max-w-[129px] text-white rounded-sm mx-auto"
              type="submit"
            >
              SIGN UP
            </button>
          </Form>
        </Formik>
      )}
      <div className="text-xs mt-10 mb-20 italic font-extralight">
        Sign up to receive information about our special offers and deals. You
        can unsubscribe at any time. For more details about how we use your
        information, view our Privacy Policy.
      </div>
      <hr className="border-t border-gray-300 w-full" />
    </div>
  );
};

export default GetRoyalDeals;
