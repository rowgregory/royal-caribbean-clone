'use client';

import { useState } from 'react';
import { useCruiseContext } from '@/app/context/cruiseContext';
import useBookingStep from '@/app/utils/hooks/useBookingStep';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import DiningOptions from '@/app/components/summary/DiningOptions';
import TipTipHooray from '@/app/components/summary/TipTipHooray';
import VacationProtection from '@/app/components/summary/VactionProtection';
import { motion } from 'framer-motion';

const SummaryPage = () => {
  const router = useRouter();
  const { updateCruise, setBookingStep, cruise } = useCruiseContext() as any;
  const [vacationProtection, setVacationProtection] = useState(-1);

  useBookingStep(3);

  const handleSubmit = (values: any) => {
    const vacationProtection = Number(values.vacationProtection);
    const tipTipHooray = values.tipTipHooray ? 96 : 0;
    const total =
      cruise?.subtotal + cruise?.taxes + vacationProtection + tipTipHooray;
    const cruiseValues = {
      vacationProtection,
      tipTipHooray,
      diningTime: values.traditionalDiningTime,
      summaryExtras: vacationProtection + tipTipHooray,
      total,
    };

    updateCruise(cruiseValues);
    setBookingStep(5);
    router.push('/booking/payment');
  };

  return (
    <motion.div
      key="summary"
      initial={{ opacity: 0, translateY: 150 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.75 }}
      className="mb-10"
    >
      <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-9">
        Hang in there, just a few more details
      </h1>
      <div className="relative bg-white shadow-lg overflow-hidden">
        <Formik
          initialValues={{
            traditionalDiningTime: '5:30',
            tipTipHooray: false,
            vacationProtection: 0,
          }}
          onSubmit={handleSubmit}
          validate={() => {}}
        >
          {({ values }) => (
            <Form>
              <section className="p-8">
                <div className="text-lg text-blue-950 font-semibold">
                  Dining & Options
                </div>
                <hr className="border-t border-gray-300 w-full my-5" />
                <DiningOptions values={values} />
                <hr className="border-t border-gray-300 w-full my-5" />
                <TipTipHooray />
                <hr className="border-t border-gray-300 w-full my-5" />
                <VacationProtection
                  values={values}
                  setVacationProtection={setVacationProtection}
                  vacationProtection={vacationProtection}
                />
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
    </motion.div>
  );
};

export default SummaryPage;
