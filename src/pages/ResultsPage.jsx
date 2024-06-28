import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchFormContainer from "../components/SearchFormContainer";
import SearchFilterContainer from "../components/SearchFilterContainer";
import FlightCardsContainer from "../components/FlightCardsContainer";
import NewsletterContainer from "../components/NewsletterContainer";

const ResultsPage = () => {
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start">
      <header className="self-stretch bg-white h-[77px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] text-left text-sm text-darkslategray-200 font-roboto lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
        <div className="flex flex-row items-center justify-between">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[174px] h-[33px] overflow-hidden"
            onClick={onFickleflightLogoClick}
          >
            <img
              className="absolute h-[96.97%] w-[99.83%] top-[1.59%] right-[0.17%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/symbols1.svg"
            />
          </button>
          <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
            <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
              <div
                className="relative cursor-pointer"
                onClick={onFickleflightLogoClick}
              >
                Explore
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-cornflowerblue-200 text-left inline-block">
                Search
              </button>
              <div
                className="relative cursor-pointer"
                onClick={onHotelsTextClick}
              >
                Hotels
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-darkslategray-200 text-left inline-block">
                Offers
              </button>
            </div>
            <div className="flex flex-row items-center justify-center gap-[12px]">
              <img
                className="relative w-6 h-6 overflow-hidden hidden md:flex"
                alt=""
                src="/notification.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden"
                alt=""
                src="/notification1.svg"
              />
              <img
                className="rounded-19xl w-9 h-9 object-cover"
                alt=""
                src="/top_avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <SearchFormContainer />
      <div className="self-stretch flex flex-row items-start justify-center py-[50px] px-20 lg:p-10 lg:box-border md:py-5 md:px-6 md:box-border">
        <SearchFilterContainer />
        <FlightCardsContainer />
      </div>
      <NewsletterContainer />
    </div>
  );
};

export default ResultsPage;
