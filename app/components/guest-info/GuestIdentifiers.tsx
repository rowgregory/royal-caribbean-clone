import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const FaUser = dynamic(() =>
  import('react-icons/fa').then((module) => module.FaUser)
);

const GuestIdentifiers = ({ cruise, currentGuest }: any) => {
  const memoizedGuestOptions = useMemo(
    () => [
      ...Array.from({ length: cruise?.guests?.adults }).map(
        (_: any, i: number) => {
          let guestType = '';
          if (i === 0) {
            guestType = 'Primary Guest';
          } else if (i === 1) {
            guestType = 'Guest 2';
          } else if (i === 2) {
            guestType = 'Guest 3';
          } else {
            guestType = 'Guest 4';
          }

          return {
            icon: <FaUser />,
            guestType,
          };
        }
      ),
    ],
    [cruise?.guests?.adults]
  );

  return (
    <div className="flex px-10 mb-10">
      {memoizedGuestOptions.map((opt: any, i: number) => (
        <div key={i} className="flex items-center mr-20">
          <FaUser
            className={`mr-3 ${
              currentGuest === opt.guestType ? 'text-blue-500' : ''
            }`}
          />
          <div
            className={`${
              currentGuest === opt.guestType ? 'text-blue-500' : ''
            }`}
          >
            {opt.guestType}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestIdentifiers;
