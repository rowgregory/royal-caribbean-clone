import countries from '@/app/utils/countries';
import { ErrorMessage, Field } from 'formik';

const GuestCitizenshipSelect = () => {
  return (
    <div className="w-1/2">
      <label htmlFor="citizenship" className="text-sm font-light text-gray-800">
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
  );
};

export default GuestCitizenshipSelect;
