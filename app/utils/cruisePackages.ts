import Cruise1 from '../assets/cruises/cruise_1.webp';
import Cruise2 from '../assets/cruises/cruise_2.webp';
import Interior from '../assets/interior.jpeg';
import OceanView from '../assets/ocean_view.jpeg';
import Balcony from '../assets/balcony.jpeg';
import Suites from '../assets/suites.jpeg';

const cruisesPackages = [
  {
    id: 'RCNKCQJDNUII9ZIY6G3G69',
    image: Cruise1,
    like: '',
    share: '',
    pill: 'Includes Holiday Cruises',
    amountOfNights: 5,
    packageTitle: 'Western Caribbean Cruise',
    shipName: 'Independence of the Seas',
    direction: 'ROUNDTRIP FROM',
    directionCities: 'Miami, FL',
    countriesVisiting: [
      'Miami, Florida',
      'Falmouth, Jamaica',
      'Nassau, Bahamas',
      'Miami, Florida',
    ],
    price: 400,
    perPerson: 'AVG PER PESON',
    cruiseOptions: 2,
    terms: 'Terms and conditions apply',
    availableDates: [
      {
        id: 'RCQNFUNGQXLLC3M1AK7J9C',
        date: 'Mon, Jan 29, 2024',
        departDate: 'Jan 29, 2024',
        arrivalDate: 'Feb 4, 2024',
        rooms: [
          {
            id: 'RCNKCQJDMUIH9ZIX6G3F68',
            type: 'Interior',
            originalPrice: 571,
            price: 400,
            description: `Our interior staterooms include a wide array of amenities for your whole family to enjoy.`,
            image: Interior,
          },
          {
            id: 'RCQIGCPN2IZ308ALZ07EAV',
            type: 'Outside View',
            originalPrice: 647,
            price: 453,
            description: `Spectacular sights and amazing views from the comfort of your stateroom.`,
            image: OceanView,
          },
          {
            id: 'RC5IWA6YKRRQTJEJ4DCOQS',
            type: 'Balcony',
            originalPrice: 763,
            price: 534,
            description: `Breathtaking views to take in all the wonder and excitement of your destination.`,
            image: Balcony,
          },
          {
            id: 'RCM4E9YLN1LOY5KTKBT98R',
            type: 'Suite',
            originalPrice: 1157,
            price: 810,
            description: `Priority boarding and departure, dedicated entertainment seating, and more.`,
            image: Suites,
          },
        ],
      },
      {
        id: 'RCQNFUNGQXLLC3M1AK7J9C',
        date: 'Sat, Oct 28, 2023',
        departDate: 'Oct 28, 2024',
        arrivalDate: 'Nov 3, 2024',
        rooms: [
          {
            id: 'RCFRHK2KSO0YETA52AMWB2',
            type: 'Interior',
            price: 453,
            description: `Our interior staterooms include a wide array of amenities for your whole family to enjoy.`,
            image: Interior,
          },
          {
            id: 'RC9PM67U8BHAW2215LPUFO',
            type: 'Outside View',
            price: 653,
            description: `Spectacular sights and amazing views from the comfort of your stateroom.`,
            image: OceanView,
          },
          {
            id: 'RCOZ24YFQK9XZDW097V4MM',
            type: 'Balcony',
            price: 781,
            description: `Breathtaking views to take in all the wonder and excitement of your destination.`,
            image: Balcony,
          },
          {
            id: 'RC5BJ3G2JVDV3ZC0G4CGDL',
            type: 'Suite',
            price: 1211,
            description: `Priority boarding and departure, dedicated entertainment seating, and more.`,
            image: Suites,
          },
        ],
      },
    ],
  },
  {
   id: 'RCRIHCPN3IZ308BL017EAV',
    image: Cruise2,
    like: '',
    share: '',
    pill: '',
    amountOfNights: 14,
    packageTitle: 'Transatlantic Cruise',
    shipName: 'Oasis of the Seas',
    direction: 'ONEWAY FROM',
    directionCities: 'Miami, Florida to Barcelona, Spain',
    countriesVisiting: [
      ' Miami',
      'FloridaMálaga',
      'SpainAlicante',
      'SpainValencia',
      'SpainPalma De Mallorca',
      'SpainBarcelona',
      'Spain',
    ],
    price: 696,
    perPerson: 'AVG PER PESON',
    cruiseOptions: 1,
    terms: 'Limited availability',
  },
];

export default cruisesPackages;
