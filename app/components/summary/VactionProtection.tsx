import { Field } from 'formik';

const VacationProtection = ({
  values,
  setVacationProtection,
  vacationProtection,
}: any) => {
  return (
    <>
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
    </>
  );
};

export default VacationProtection;
