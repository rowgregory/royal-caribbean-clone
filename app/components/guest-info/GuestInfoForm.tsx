import { useCruiseContext } from '@/app/context/cruiseContext';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import validateGuestInfo from '@/app/utils/validate/validateGuestInfo';
import GuestNameInputs from './GuestNameInputs';
import GuestGenderSelect from './GuestGenderSelect';
import GuestBirthDateSelect from './GuestBirthDateSelect';
import GuestCitizenshipSelect from './GuestCitizenshipSelect';
import GuestStateSelect from './GuestStateSelect';
import GuestContactInputs from './GuestContactInputs';

const GuestInfoForm = ({ setCurrentGuest }: any) => {
  const router = useRouter();

  const { cruise, setBookingStep, updateCruise } = useCruiseContext() as any;
  const [_, setGuests] = useState([]) as any;

  const adults = cruise?.guests?.adults;

  const handleSubmit = async (values: any, resetForm: any) => {
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
      resetForm()
      return updatedGuests;
    });
  };

  return (
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
        specialOffers: false,
        futureCruiseCredit: false,
      }}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      validate={validateGuestInfo}
    >
      <Form>
        <GuestNameInputs />
        <div className="flex gap-10 w-full px-10">
          <GuestGenderSelect />
          <GuestBirthDateSelect />
        </div>
        <div className="flex gap-10 w-full px-10">
          <GuestCitizenshipSelect />
          <GuestStateSelect />
        </div>
        <GuestContactInputs />
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
          <label htmlFor="specialOffers" className="flex items-center text-sm">
            <Field
              type="checkbox"
              id="specialOffers"
              name="specialOffers"
              className="mr-2"
            />
            Sign up to receive information about our special offers and deals by
            email or phone. You can unsubscribe at any time. For more details
            about how we use your information, view our Privacy Policy below.
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
        </div>
      </Form>
    </Formik>
  );
};

export default GuestInfoForm;
