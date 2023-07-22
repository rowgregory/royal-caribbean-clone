import Header from '../components/Header';
import SecondaryHeader from '../components/SecondaryHeader';
import PromotionBanner from '../components/cruises/PromotionBanner';

const LoadingPage = () => {
  return (
    <div className={`min-h-screen`}>
      <SecondaryHeader />
      <Header />
      <div className={` bg-[#f2f2f2] w-full mx-auto`}>
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center pt-6">
          <PromotionBanner />
          <div className="w-full max-w-[1220px] mt-8">
            {[
              ...Array.from({ length: 2 })?.map((_: any, i: number) => (
                <div
                  key={i}
                  className="h-[300px] h-full flex mb-6 rounded-md w-full bg-white"
                ><div className='w-[350px] h-[300px] bg-gray-200'></div></div>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
