import { ErrorMessage, Field } from 'formik';

const GuestGenderSelect = () => {
  return (
    <div className="w-1/2">
      <label htmlFor="gender" className="text-sm font-light text-gray-800">
        Gender
      </label>
      <Field
        as="select"
        id="gender"
        name="gender"
        className="w-full pl-0 px-3 py-2 border border-gray-300 border-1.5 rounded-sm bg-transparent focus:outline-none placeholder-gray-400 pl-5 py-3 font-light text-sm"
      >
        <option value="">Select</option>
        {['Male', 'Female'].map((gender) => (
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
  );
};

export default GuestGenderSelect;
