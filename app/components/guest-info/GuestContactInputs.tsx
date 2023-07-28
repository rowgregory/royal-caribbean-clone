import { ErrorMessage, Field } from 'formik';

const GuestContactInputs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-10">
      <div className="w-full md:w-1/2">
        <label htmlFor="email" className="text-sm font-light text-gray-800">
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
      <div className="w-full md:w-1/2">
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
  );
};

export default GuestContactInputs;
