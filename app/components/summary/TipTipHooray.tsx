import { Field } from 'formik';

const TipTipHooray = () => {
  return (
    <>
      <div className="text-lg text-blue-950 font-semibold">Tip-tip hooray!</div>
      <div className="flex justify-between w-full">
        <div className="w-full max-w-[240px] xl:max-w-lg text-sm text-gray-700">
          You can pre-pay gratuities now to show your appreciation for 24/7
          service from your room attendants, culinary and service staff. Or
          assign gratuities once onboard through your SeaPass account.
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center">
            <label htmlFor="tipTipHooray flex items-center">
              <div className="text-sm text-gray-700">$96.00 USD/Room</div>
            </label>
            <div className="flex">
              <Field className="ml-3" type="checkbox" name="tipTipHooray" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TipTipHooray;
