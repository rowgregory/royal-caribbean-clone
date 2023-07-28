'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { useRouter } from 'next/navigation';

const SignInPage = ({ searchParams }: any) => {
  const { push } = useRouter();
  const [error, setError] = useState('') as any;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
      // callbackUrl: '/account',
      redirect: false,
    });

    if (response?.error) {
      setError(response.error);
      setLoading(false);
    } else {
      push('/account');
    }
  };

  const validateForm = (values: any) => {
    const errors = {} as any;

    if (!values.email) {
      errors.email = 'Email is required';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const ifAccountWasJustCreated = searchParams.account_created;

  return (
    <>
      {loading && <LoadingSpinner />}
      <div className="bg-fixed min-h-screen bg-cover bg-center bg-signin">
        <div
          className={`fixed z-0 inset-0 flex items-end bottom-6 justify-center transition-opacity duration-300 ${
            error ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="h-fit w-fit shadow-xl bg-white px-7 py-2 text-red-500 rounded-md">
            {error}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
          {ifAccountWasJustCreated && (
            <div className="text-center text-green-500 font-semibold bg-white w-full max-w-md py-3 border-b border-solid border-gray-200 rounded-tl-lg rounded-tr-lg">
              Account Created
            </div>
          )}
          <div
            className={`${
              ifAccountWasJustCreated
                ? 'rounded-bl-lg rounded-br-lg '
                : 'rounded-lg'
            } max-w-md w-full px-6 py-8 bg-white shadow-md`}
          >
            <Link href="/" className="cursor-pointer">
              <Image
                src="/logo-sm.svg"
                alt="Royal Caribbean Sign In"
                className="mx-auto mb-4 w-10 h-auto"
                width="0"
                height="0"
                sizes="100vw"
                priority={true}
              />
            </Link>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Sign In
            </h2>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={handleSubmit}
              validate={validateForm}
            >
              <Form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Sign In
                </button>
              </Form>
            </Formik>
            <Link
              className="text-blue-400 flex justify-center mt-6 mx-auto w-full"
              href="/create"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
