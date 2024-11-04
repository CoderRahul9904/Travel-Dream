import { useState, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";

const HotelCardContainer = ({
  className = "",
  roomDescription,
  roomType,
  hotelName,
  roomPrice,
  roomReviews,
  hotelReviews,
  roomRating,
  roomImageUrl,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={`flex flex-col items-center justify-start p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
        style={{ width: "300px", maxWidth: "100%", margin: "auto" }}
      >
        <img
          className="w-full h-48 object-cover rounded-lg"
          alt=""
          src={roomDescription}
        />
        <div className="flex flex-col items-start justify-start mt-4 w-full">
          <span className="text-gray-500 text-sm uppercase tracking-wider">
            {roomType}
          </span>
          <h3 className="text-xl font-semibold text-gray-800 mt-1">
            {hotelName}
          </h3>
          <p className="text-lg font-medium text-blue-600 mt-2">{roomPrice}</p>
          <div className="flex items-center mt-3 text-gray-600">
            <div className="flex flex-col gap-5">
              <span className="flex justify-center items-center">
                <img
                  className="w-6 h-6 mr-2 cursor-pointer"
                  alt="Reviews"
                  src={roomReviews}
                  onClick={openMatterhornPopup}
                />
                {hotelReviews}
              </span>
              <span className="mr-2 flex justify-center items-center font-medium text-yellow-500">
                Rating: {roomRating}{" "}
                <img
                  className="w-6 h-6 ml-2 object-contain"
                  alt="Coordinates"
                  src={roomImageUrl}
                />
              </span>
            </div>
          </div>
        </div>
        <button
          className="mt-4 py-2 px-4 w-full text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-medium tracking-wider uppercase"
          onClick={openMatterhornPopup}
        >
          More details
        </button>
      </div>

      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

HotelCardContainer.propTypes = {
  className: PropTypes.string,
  roomDescription: PropTypes.string,
  roomType: PropTypes.string,
  hotelName: PropTypes.string,
  roomPrice: PropTypes.string,
  roomReviews: PropTypes.string,
  hotelReviews: PropTypes.string,
  roomRating: PropTypes.string,
  roomImageUrl: PropTypes.string,
};

export default HotelCardContainer;
