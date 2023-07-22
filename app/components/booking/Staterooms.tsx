import { BiBed } from 'react-icons/bi';


const Staterooms = ({ cruise, step }: any) => {
  return (
    <section>
    <div
      className={`${
        step >= 2 && step < 3 ? 'border-l-4 inset-0 border-cyan-600' : ''
      } flex items-center h-12 pl-8`}
    >
      <div className={`w-8 ${step >= 2 ? '-mx-[4px]' : ''}`}>
        <BiBed />
      </div>
      <div className={`font-light ${step >= 2 ? '-mx-[4px]' : ''}`}>
        Staterooms
      </div>
    </div>
    {step >= 2.1 && (
      <div className="pb-4">
        <div className=" flex w-full justify-between px-8">
          {step >= 2.1 && (
            <div className="text-blue-950 font-semibold">Room</div>
          )}
          {step >= 2.4 && (
            <div className="text-blue-950 font-semibold">
              ${cruise?.subtotal}
            </div>
          )}
        </div>
        {step >= 2.2 && (
          <div className="pl-8 text-sm text-gray-500 mt-1">
            {cruise?.guests?.adults + cruise?.guests?.children} Guests{' '}
            {step >= 2.4 &&
            cruise?.roomPreferenceType === 'We pick your room'
              ? `| ${cruise?.roomType} Guarantee`
              : step >= 2.4 &&
                cruise?.roomPreferenceType === 'You pick your room' &&
                `| ${cruise?.roomType}`}
          </div>
        )}
        {step >= 2.5 && cruise?.shipSection && (
          <div className="flex pl-8 text-sm text-gray-500 mt-1">
            {cruise?.shipSection}
            {step >= 2.6 && (
              <>&nbsp;&nbsp;|&nbsp;&nbsp;Deck {cruise?.shipDeck}</>
            )}

            {step >= 3 && (
              <>&nbsp;&nbsp;|&nbsp;&nbsp;#{cruise?.shipRoomNumber}</>
            )}
          </div>
        )}
      </div>
    )}
  </section>
  )
}

export default Staterooms;