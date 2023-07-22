import days from '@/app/utils/days';
import guestGenderSelectYears from '@/app/utils/guestGenderSelectYears';
import months from '@/app/utils/months';
import { ErrorMessage, Field } from 'formik';

const GuestBirthDateSelect = () => {
  return (
    <div className="w-1/2">
      <label htmlFor="birthMonth" className="text-sm font-light text-gray-800">
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
          <ErrorMessage
            name="birthMonth"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
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
          <ErrorMessage
            name="birthDay"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div className="w-1/3">
          <Field
            as="select"
            id="birthYear"
            name="birthYear"
            className="w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
          >
            <option value="">Year</option>
            {guestGenderSelectYears().map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="birthYear"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default GuestBirthDateSelect;
