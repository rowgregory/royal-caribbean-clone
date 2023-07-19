'use client';

import { useState, useMemo } from 'react';
import { useCruiseContext } from '@/app/context/cruiseContext';
import useBookingStep from '@/app/utils/useBookingStep';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';

const SummaryPage = () => {
  const [vacationProtection, setVacationProtection] = useState(-1);
  const router = useRouter();
  const { updateCruise, setBookingStep } = useCruiseContext();
  useBookingStep(3);

  const handleSubmit = useMemo(
    () => (values: any) => {
      const cruiseValues = {
        vacationProtection: Number(values.vacationProtection),
        tipTipHooray: Number(values.tipTipHooray[0]),
        diningTime: values.traditionalDiningTime,
        summaryExtras:
          Number(values.vacationProtection) + Number(values.tipTipHooray[0]),
      };

      updateCruise(cruiseValues);
      setBookingStep(5);
      router.push('/booking/payment');
    },
    [updateCruise, setBookingStep, router]
  );

  const validate = (values: any) => {
    console.log('validate: ', values);
  };

  const formikConfig = useMemo(
    () => ({
      initialValues: {
        traditionalDiningTime: '5:30',
        tipTipHooray: ['0'],
        vacationProtection: 0,
      },
      onSubmit: handleSubmit,
      validate,
    }),
    [handleSubmit]
  );

  return (
    <div className="mx-16 pt-5 mb-10">
      <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-9">
        Hang in there, just a few more details
      </h1>
      <div className="relative bg-white shadow-lg overflow-hidden">
        <Formik { ...formikConfig }
        >
          {({ values }) => (
            <Form>
              <section className="p-8">
                <div className="text-lg text-blue-950 font-semibold">
                  Dining & Options
                </div>
                <hr className="border-t border-gray-300 w-full my-5" />
                <div className="text-lg text-blue-950 font-semibold">
                  Traditional Dining
                </div>
                <div className="flex justify-between w-full mb-10">
                  <div>
                    Enjoy reserved seating at the same time every day. Select
                    the time you want.
                  </div>
                  <div className="flex">
                    <Field as="select" name="traditionalDiningTime">
                      {['5:30', '8:30'].map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </Field>
                    <Field
                      type="radio"
                      name="traditionalDiningTime"
                      value={values.traditionalDiningTime}
                      checked={
                        values.traditionalDiningTime !== 'MY_TIME_DINING'
                      }
                    />
                  </div>
                </div>
                <div className="text-lg text-blue-950 font-semibold">
                  My Time Dining
                </div>
                <div className="flex justify-between w-full">
                  <div>
                    Forget schedules. Dine any time you like during dining
                    hours.
                  </div>
                  <div className="flex">
                    <Field
                      type="radio"
                      name="traditionalDiningTime"
                      value="MY_TIME_DINING"
                      checked={
                        values.traditionalDiningTime === 'MY_TIME_DINING'
                      }
                    />
                  </div>
                </div>
                <hr className="border-t border-gray-300 w-full my-5" />
                <div className="text-lg text-blue-950 font-semibold">
                  Tip-tip hooray!
                </div>
                <div className="flex justify-between w-full">
                  <div className="w-full max-w-lg">
                    You can pre-pay gratuities now to show your appreciation for
                    24/7 service from your room attendants, culinary and service
                    staff. Or assign gratuities once onboard through your
                    SeaPass account.
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center">
                      <label htmlFor="tipTipHooray flex items-center">
                        $96.00 USD/Room
                      </label>
                      <div className="flex">
                        <Field
                          className="ml-3"
                          type="checkbox"
                          name="tipTipHooray"
                          value={96}
                          checked={Number(values.tipTipHooray[0]) === 96}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-t border-gray-300 w-full my-5" />
                <div className="text-lg text-blue-950 font-semibold">
                  Purchase Vacation Protection
                </div>
                <div className="flex justify-between w-full">
                  <div>View terms, conditions and plan sponsors</div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center">
                      <label htmlFor="vacationProtection flex items-center">
                        $98.00 USD/Room
                      </label>
                      <Field
                        className="ml-3"
                        type="radio"
                        name="vacationProtection"
                        value={98}
                        checked={Number(values.vacationProtection) === 98}
                      />
                    </div>
                    <div className="flex items-center">
                      <label htmlFor="vacationProtection">No Thanks</label>
                      <Field
                        onClick={() => setVacationProtection(0)}
                        className="ml-3"
                        type="radio"
                        name="vacationProtection"
                        value={0}
                        checked={
                          Number(values.vacationProtection) === 0 &&
                          vacationProtection === 0
                        }
                      />
                    </div>
                  </div>
                </div>
              </section>

              <div className="max-w-[932px] bg-gray-100 h-20 flex justify-end items-center pr-7">
                <button
                  type="submit"
                  className="bg-blue-600 rounded-sm w-fit text-white flex items-center justify-center px-8 py-3"
                >
                  Continue
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SummaryPage;
