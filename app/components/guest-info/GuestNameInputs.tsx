import { ErrorMessage, Field } from 'formik';

const GuestNameInputs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-10">
      <div className="w-full md:w-1/2">
        <label htmlFor="firstName" className="text-sm font-light text-gray-800">
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
      <div className="w-full md:w-1/2">
        <label htmlFor="lastName" className="text-sm font-light text-gray-800">
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
  );
};

export default GuestNameInputs;
