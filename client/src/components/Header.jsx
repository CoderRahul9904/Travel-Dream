import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AuthGoogle from "./authDropDown"
const Header = ({ className = "", bgColor,textColor }) => {

  if( bgColor== " "){
    bgColor="transparent"
  }else{
    bgColor="bg-white h-[77px]"
  }
  const navigate = useNavigate();

  const handleProfileNavigation =useCallback(()=>{
    navigate("/profile");
  }, [navigate])

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <header
      className={`self-stretch  flex flex-row ${bgColor} items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] text-left text-sm text-darkslategray-200 font-roboto lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border ${className}`}
    >
      <div className="flex flex-row items-center justify-between">
        <div
          className="relative w-[174px] h-[33px] overflow-hidden cursor-pointer"
          onClick={onFickleflightLogoContainerClick}
        >
          <div className="absolute h-[96.97%] w-[99.83%] top-[1.59%] right-[0.17%] bottom-[1.44%] left-[0%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
              alt=""
              src="/webscreen.svg"
              onClick={onFickleflightLogoContainerClick}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
          <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
            <div 
              className= {` relative cursor-pointer text-${textColor}`}
              onClick={onFickleflightLogoContainerClick}
            >
              Explore
            </div>
            <div
              className= {` relative cursor-pointer text-${textColor}`}
              onClick={onSearchTextClick}
            >
              Search
            </div>
            <button className={ `cursor-pointer [border:none] p-0 bg-[transparent] relative text-${textColor} text-sm font-roboto text-cornflowerblue-200 text  text-left inline-block`}>
              Hotels
            </button>
            <button className={`cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-${textColor} text-darkslategray-200 text-left inline-block`}>
              Offers
            </button>
          </div>
          <div className="flex flex-row items-center justify-center gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden"
              alt=""
              src="/notification1.svg"
            />
            <div className=" flex gap-5 sm:gap-0 rounded-xl sm:border-none justify-center items-center"> 
              <button onClick={handleProfileNavigation} className=" bg-transparent cursor-pointer">
                  <img
                     className="rounded-19xl w-9 h-9 object-cover overflow-hidden"
                     alt=""
                     src="/top_avatar@2x.png"
                  />
              </button>
            </div>
            <div className=" absolute right-28 ">
                <AuthGoogle />
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden hidden md:flex"
              alt=""
              src="/notification.svg"
            />
          </div>
          
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
