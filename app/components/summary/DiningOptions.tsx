import { Field } from 'formik';
import React from 'react';

const DiningOptions = ({ values }: any) => {
  return (
    <section>
      <div className="text-lg text-blue-950 font-semibold">
        Traditional Dining
      </div>
      <div className="flex justify-between w-full mb-10">
        <div>
          Enjoy reserved seating at the same time every day. Select the time you
          want.
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
            checked={values.traditionalDiningTime !== 'MY_TIME_DINING'}
          />
        </div>
      </div>
      <div className="text-lg text-blue-950 font-semibold">My Time Dining</div>
      <div className="flex justify-between w-full">
        <div>Forget schedules. Dine any time you like during dining hours.</div>
        <div className="flex">
          <Field
            type="radio"
            name="traditionalDiningTime"
            value="MY_TIME_DINING"
            checked={values.traditionalDiningTime === 'MY_TIME_DINING'}
          />
        </div>
      </div>
    </section>
  );
};

export default DiningOptions;
