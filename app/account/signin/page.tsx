'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import LogoSmall from '../../assets/logo-sm.svg';
import { signIn } from 'next-auth/react';

const SignInPage = () => {
  const handleSubmit = async (values: any) => {
    await signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: '/account',
    });
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
  return (
    <div className='bg-fixed min-h-screen bg-cover bg-center bg-[url("./assets/signin-bg.jpeg")]'>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md'>
          <Image
            src={LogoSmall}
            alt='Royal Caribbean Sign In'
            className='mx-auto mb-4'
          />
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
            Sign In
          </h2>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            validate={validateForm}
          >
            <Form>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  Email
                </label>
                <Field
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                  placeholder='Enter your email'
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='password'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  Password
                </label>
                <Field
                  type='password'
                  id='password'
                  name='password'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                  placeholder='Enter your password'
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors'
              >
                Sign In
              </button>
            </Form>
          </Formik>
          <Link
            className='text-blue-400 flex justify-center mt-6 mx-auto w-full'
            href='/account/create'
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
