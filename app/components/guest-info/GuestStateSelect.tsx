import usStatesAndProvinces from '@/app/utils/usStatesAndProvinces';
import { ErrorMessage, Field } from 'formik';

const GuestStateSelect = () => {
  return (
    <div className="w-full md:w-1/2">
      <label htmlFor="state" className="text-sm font-light text-gray-800">
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
        name="state"
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default GuestStateSelect;
