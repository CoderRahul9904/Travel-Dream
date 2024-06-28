import { useCallback } from "react";
import { Radio, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormInputsRowContainer from "./FormInputsRowContainer";
import PropTypes from "prop-types";

const HeroContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start text-center text-42xl text-white font-baloo-bhai ${className}`}
    >
      <header className="self-stretch bg-white h-[77px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] text-left text-sm text-darkslategray-200 font-roboto lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
        <div className="flex flex-row items-center justify-between">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[174px] h-[33px] overflow-hidden">
            <img
              className="absolute h-[96.97%] w-[99.83%] top-[1.59%] right-[0.17%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/symbols.svg"
            />
          </button>
          <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
            <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-cornflowerblue-200 text-left inline-block">
                Explore
              </button>
              <div
                className="relative cursor-pointer"
                onClick={onSearchFlightsButtonClick}
              >
                Search
              </div>
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
      <div className="self-stretch relative h-[640px]">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[639.9px]" />
        <img
          className="absolute w-full top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden h-[640px] object-cover"
          alt=""
          src="/banner--background@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col items-center justify-center py-0 px-[140px] box-border gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
            <div className="self-stretch relative leading-[67px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
            <div className="self-stretch relative text-5xl leading-[32px] font-roboto">
              Find the best destinations and the most popular stays!
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start p-5 gap-[4px] text-left text-xl text-darkslategray-300 font-roboto md:flex-col sm:mt-5">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-[5px] gap-[5px] sm:flex-col sm:items-start">
              <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke sm:flex-[unset] sm:self-stretch">
                Search flights
              </b>
              <div className="flex flex-row items-center justify-start sm:w-full">
                <div className="relative w-[216.5px] h-[38px] sm:w-[100%!important]">
                  <FormControlLabel
                    className="absolute top-[0px] left-[0px]"
                    label="Return"
                    labelPlacement="end"
                    control={<Radio size="medium" />}
                  />
                  <FormControlLabel
                    className="absolute top-[0px] left-[106px]"
                    label="One-way"
                    labelPlacement="end"
                    control={<Radio color="primary" checked size="medium" />}
                  />
                </div>
              </div>
            </div>
            <FormInputsRowContainer
              onSearchTextClick={onSearchFlightsButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

HeroContainer.propTypes = {
  className: PropTypes.string,
};

export default HeroContainer;
