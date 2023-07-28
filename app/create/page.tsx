'use client';

import countries from '@/app/utils/countries';
import days from '@/app/utils/days';
import months from '@/app/utils/months';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { validateRegisterForm } from '../utils/validate/validateRegisterForm';
import { securityQuestions } from '../utils/securityQuestion';
import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { registerUser } from '../actions/registerUser';

const CreateAccountPage = () => {
  const { push } = useRouter();
  const [error, setError] = useState('') as any;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    const response = await registerUser(values);

    if (response?.message) setError(response.message);
    else {
      push(`/signin?account_created=true`);
    }
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <div
        className={`fixed z-0 inset-0 flex items-end bottom-0 justify-center transition-opacity duration-300 h-fit ${
          error ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-fit w-fit shadow-xl bg-white px-7 py-2 text-red-500 rounded-md">
          {error}
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-createAccount bg-cover bg-no-repeat bg-center z-10">
        <div className="w-full px-6 py-8 max-w-[680px]">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logo-white.png"
              alt="Royal Caribbean"
              className=" mb-7 w-2/12 mx-auto"
              width="0"
              height="0"
              sizes="100vw"
              priority={true}
            />
          </Link>
          <h2 className="text-4xl font-semibold text-center text-white mb-6">
            Let&apos;s get started
          </h2>
          <p className="text-white opacity-50 text-sm mb-4">
            Please enter the information below to exactly match your valid
            government-issued ID.
          </p>
          <Formik
            initialValues={{
              firstName: 'Gregory',
              lastName: 'Row',
              email: 'rowgregory@gmail.com',
              password: '1111',
              birthMonth: 'August',
              birthDay: '16',
              birthYear: '1987',
              country: 'United States',
              securityQuestion: `What is your mother's maiden name`,
              securityAnswer: 'Foman',
              receiveMarketingEmails: false,
              agreeToTerms: false,
            }}
            onSubmit={handleSubmit}
            validate={validateRegisterForm}
          >
            <Form>
              <div className="flex gap-3 mb-8">
                <div className="w-1/2">
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full pl-0 px-3 py-2 border-b border-white border-b-2 bg-transparent focus:outline-none placeholder-white text-white"
                    placeholder="First name/Given name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="w-1/2">
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full pl-0 px-3 py-2 border-b border-white border-b-2 bg-transparent focus:outline-none placeholder-white text-white"
                    placeholder="Last name/Surname"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <div className="mb-8">
                <label
                  htmlFor="birthMonth"
                  className="block text-xs font-bold mb-2 text-white"
                >
                  Date of Birth
                </label>
                <div className="flex">
                  <Field
                    as="select"
                    id="birthMonth"
                    name="birthMonth"
                    className="w-1/3 pl-0 px-3 py-2 border-b border-white border-b-2 bg-transparent focus:outline-none text-white"
                  >
                    <option value="">Month</option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </Field>
                  <Field
                    as="select"
                    id="birthDay"
                    name="birthDay"
                    className="w-1/3 pl-0 px-3 py-2 border-b border-white border-b-2 bg-transparent focus:outline-none mx-3 text-white"
                  >
                    <option value="">Day</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </Field>
                  <Field
                    type="text"
                    id="birthYear"
                    name="birthYear"
                    className="w-1/3 pl-0 px-3 py-2 border-b border-white border-b-2 bg-transparent focus:outline-none placeholder-white text-white"
                    placeholder="Year"
                  />
                </div>
              </div>
              <div className="mb-8">
                <Field
                  as="select"
                  id="country"
                  name="country"
                  className="w-full pl-0 px-3 py-2 border-b border-white border-b-2 bg-transparent focus:outline-none text-white"
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
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-8">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full pl-0 px-3 py-2 border-b border-white border-b-2 bg-transparent focus:outline-none placeholder-white text-white"
                  placeholder="Email address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-8">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full pl-0 px-3 py-2 border-b border-white border-b-2 bg-transparent focus:outline-none placeholder-white text-white"
                  placeholder="Create new password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-8">
                <Field
                  as="select"
                  id="securityQuestion"
                  name="securityQuestion"
                  className="w-full pl-0 px-3 py-2 border-b border-white border-b-2 bg-transparent focus:outline-none text-white"
                >
                  <option value="">Select one security question</option>
                  {securityQuestions.map((question, index) => (
                    <option key={index} value={question}>
                      {question}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="securityQuestion"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-8">
                <Field
                  type="text"
                  id="securityAnswer"
                  name="securityAnswer"
                  className="w-full pl-0 px-3 py-2 border-b border-white border-b-2 bg-transparent focus:outline-none placeholder-white text-white"
                  placeholder="Answer"
                />
                <ErrorMessage
                  name="securityAnswer"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="receiveMarketingEmails"
                  className="flex items-center text-white text-xs"
                >
                  <Field
                    type="checkbox"
                    id="receiveMarketingEmails"
                    name="receiveMarketingEmails"
                    className="mr-2 w-5 h-5"
                  />
                  I would like to receive special offers, travel tips, and
                  insider information by email.
                </label>
              </div>
              <div className="text-white mb-4">
                To create an account, you must agree to the following terms:
              </div>
              <div className="mb-6">
                <label
                  htmlFor="agreeToTerms"
                  className="flex items-center text-white text-xs"
                >
                  <Field
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    className="mr-2 w-5 h-5"
                  />
                  I have read and agree to the Terms of Use and Privacy Policy.
                </label>
                <ErrorMessage
                  name="agreeToTerms"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex flex-col items-center w-full mx-auto">
                <button
                  type="submit"
                  className="hover:bg-[#1f63b1] hover:text-white hover:border-2 hover:border-solid hover:border-white text-[#1f63b1] bg-white py-2 px-4 py-3  transition-colors w-52 rounded-sm mb-4 border-2 border-solid border-transparent font-bold text-lg"
                >
                  Create Account
                </button>
                <Link className="text-white" href="/signin">
                  Sign in
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default CreateAccountPage;
