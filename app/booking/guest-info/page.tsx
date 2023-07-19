'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useCruiseContext } from '@/app/context/cruiseContext';
import Link from 'next/link';
import useBookingStep from '@/app/utils/useBookingStep';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import months from '@/app/utils/months';
import days from '@/app/utils/days';
import countries from '@/app/utils/countries';
import usStatesAndProvinces from '@/app/utils/usStatesAndProvinces';
import { FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const GuestInfoPage = () => {
  const { cruise, setBookingStep, updateCruise } = useCruiseContext() as any;
  const [guests, setGuests] = useState([]) as any;
  const [currentGuest, setCurrentGuest] = useState('Primary Guest');
  const router = useRouter();

  const { shipRoomNumber, ...rest } = cruise || {};

  const adults = cruise?.guests?.adults;

  useBookingStep(
    cruise?.roomPreferenceType === 'We pick your room' ? 2.4 : 2.6,
    rest
  );

  const handleSubmit = useCallback(async (values: any) => {
    setGuests((prev: any) => {
      const updatedGuests = [...prev, values];
      switch (updatedGuests.length) {
        case 1:
          setCurrentGuest('Guest 2');
          break;
        case 2:
          setCurrentGuest('Guest 3');
          break;
        default:
          setCurrentGuest('Guest 4');
      }
      if (adults === updatedGuests.length) {
        updateCruise({ guestForms: updatedGuests });
        router.push('/booking/summary');
        setBookingStep(4);
      }
      return updatedGuests;
    });
  }, [adults, router, setBookingStep, updateCruise]);

  const validateForm = (values: any) => {
    console.log('VALUES: ', values);
    const errors = {} as any;

    // if (!values.firstName) {
    //   errors.firstName = 'First Name is required';
    // }

    // if (!values.lastName) {
    //   errors.lastName = 'Last Name is required';
    // }

    // if (!values.email) {
    //   errors.email = 'Email is required';
    // }

    // if (!values.state) {
    //   errors.state = 'State is required';
    // }

    // if (!values.birthMonth) {
    //   errors.birthMonth = 'Month is required';
    // }

    // if (!values.birthDay) {
    //   errors.birthDay = 'Day is required';
    // }

    // if (!values.birthYear) {
    //   errors.birthYear = 'Year is required';
    // }

    // if (!values.country) {
    //   errors.country = 'Country is required';
    // }

    // if (!values.phoneNumber) {
    //   errors.phoneNumber = 'Phone number is required';
    // }

    return errors;
  };

  const years = useMemo(() => {
    const years = [];
    for (let year = 2023; year >= 1923; year--) {
      years.push(year.toString());
    }
    return years;
  }, []);

  const memoizedGuestOptions = useMemo(() => [
    ...Array.from({ length: cruise?.guests?.adults }).map(
      (_: any, i: number) => {
        let guestType = '';
        if (i === 0) {
          guestType = 'Primary Guest';
        } else if (i === 1) {
          guestType = 'Guest 2';
        } else if (i === 2) {
          guestType = 'Guest 3';
        } else {
          guestType = 'Guest 4';
        }

        return {
          icon: <FaUser />,
          guestType,
        };
      }
    ),
  ], [cruise?.guests?.adults]);

  return (
    <div className="mx-16 pt-5 mb-10">
      <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-2">
        Who’s traveling?
      </h1>
      <div className="text-gray-800 mb-9">
        Time to get personal — tell us a bit more about who is traveling. Please
        make sure the details you provide for all guests match their
        government-issued photo IDs.
      </div>
      <div className="bg-white shadow-lg">
        <div className="text-blue-950 text-2xl px-10 pt-10">
          Guest Information
        </div>
        <hr className="border-t border-gray-300 w-full my-5 mx-10" />
        <div className="flex px-10 mb-10">
          {memoizedGuestOptions.map((opt: any, i: number) => (
            <div key={i} className="flex items-center mr-20">
              <FaUser
                className={`mr-3 ${
                  currentGuest === opt.guestType ? 'text-blue-500' : ''
                }`}
              />
              <div
                className={`${
                  currentGuest === opt.guestType ? 'text-blue-500' : ''
                }`}
              >
                {opt.guestType}
              </div>
            </div>
          ))}
        </div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            gender: '',
            birthMonth: '',
            birthDay: '',
            birthYear: '',
            citizenship: '',
            state: '',
            email: '',
            phoneNumber: '',
            specialOffer: false,
            futureCruiseCredit: false,
          }}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          <Form>
            <div className="flex gap-10 px-10">
              <div className="w-1/2">
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
                  placeholder="First Name"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="w-1/2">
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
                  className="w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                  placeholder="Last Name"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div className="flex gap-10 w-full px-10">
              <div className="w-1/2">
                <label
                  htmlFor="gender"
                  className="text-sm font-light text-gray-800"
                >
                  Gender
                </label>
                <Field
                  as="select"
                  id="gender"
                  name="gender"
                  className="w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                >
                  <option value="">Select</option>
                  {['Male', 'Femail'].map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="birthMonth"
                  className="text-sm font-light text-gray-800"
                >
                  Date of Birth
                </label>
                <div className="flex gap-4">
                  <div className="w-1/3">
                    <Field
                      as="select"
                      id="birthMonth"
                      name="birthMonth"
                      className="w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                    >
                      <option value="">Month</option>
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="w-1/3">
                    <Field
                      as="select"
                      id="birthDay"
                      name="birthDay"
                      className="w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                    >
                      <option value="">Day</option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="w-1/3">
                    <Field
                      as="select"
                      id="birthYear"
                      name="birthYear"
                      className="w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                    >
                      <option value="">Year</option>
                      {years.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 w-full px-10">
              <div className="w-1/2">
                <label
                  htmlFor="citizenship"
                  className="text-sm font-light text-gray-800"
                >
                  Citizenship
                </label>
                <Field
                  as="select"
                  id="citizenship"
                  name="citizenship"
                  className="w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                >
                  <option value="">Select</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="citizenship"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="state"
                  className="text-sm font-light text-gray-800"
                >
                  State/province of residency
                </label>
                <Field
                  as="select"
                  id="state"
                  name="state"
                  className="w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                >
                  <option value="">State of Province</option>
                  {usStatesAndProvinces.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="citizenship"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div className="flex gap-10 px-10">
              <div className="w-1/2">
                <label
                  htmlFor="email"
                  className="text-sm font-light text-gray-800"
                >
                  Email Address
                </label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                  placeholder="Enter an email address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="phoneNumber"
                  className="text-sm font-light text-gray-800"
                >
                  Phone Number
                </label>
                <Field
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                  placeholder="(201) 555-0123"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div className="flex gap-10 px-10">
              <div className="w-1/2">
                <label
                  htmlFor="crownAndAnchorNumber"
                  className="text-sm font-light text-gray-800"
                >
                  Crown & Anchor Number (optional)
                </label>
                <Field
                  type="text"
                  id="crownAndAnchorNumber"
                  name="crownAndAnchorNumber"
                  className="mt-1 w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
                  placeholder="Enter a Crown & Anchor Number"
                />
                <ErrorMessage
                  name="crownAndAnchorNumber"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="w-1/2"></div>
            </div>
            <div className="my-8 px-10">
              <label
                htmlFor="specialOffers"
                className="flex items-center text-sm"
              >
                <Field
                  type="checkbox"
                  id="specialOffers"
                  name="specialOffers"
                  className="mr-2"
                />
                Sign up to receive information about our special offers and
                deals by email or phone. You can unsubscribe at any time. For
                more details about how we use your information, view our Privacy
                Policy below.
              </label>
            </div>
            <div className="mb-8 px-10">
              <label
                htmlFor="futureCruiseCredit"
                className="flex items-center text-sm"
              >
                <Field
                  type="checkbox"
                  id="futureCruiseCredit"
                  name="futureCruiseCredit"
                  className="mr-2"
                />
                I have received a Future Cruise Credit (FCC)
              </label>
            </div>
            <div className="max-w-[932px] bg-gray-100 h-20 flex justify-end items-center pr-7">
              <button
                type="submit"
                className="bg-blue-600 rounded-sm w-fit text-white flex items-center justify-center px-8 py-3"
              >
                Continue
              </button>
              {/* <Link
          href="/booking/occupancy"
          className="bg-blue-600 rounded-sm w-fit text-white flex items-center justify-center px-8 py-3"
        >
          Continue
        </Link> */}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default GuestInfoPage;
