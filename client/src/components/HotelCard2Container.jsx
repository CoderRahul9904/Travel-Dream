import PropTypes from "prop-types";

const HotelCard2Container = ({
  className = "",
  roomDescription,
  roomType,
  roomPrice,
  roomReviews,
  hotelName,
  roomRating,
  roomCoordinates,
}) => {
  return (
    <div
      className={`flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
      style={{ width: "300px", maxWidth: "100%", margin: "auto" }}
    >
      <img
        className="w-full h-48 object-cover rounded-lg"
        alt="Room"
        src={roomDescription}
      />
      <div className="flex flex-col items-start mt-4 w-full">
        <span className="text-gray-500 text-sm uppercase tracking-wider">
          {roomType}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 mt-1">{hotelName}</h3>
        <p className="text-lg font-medium text-blue-600 mt-2">{roomPrice}</p>
        <p className="text-gray-600 mt-2">{roomReviews}</p>
        <div className="flex items-center mt-3 text-gray-600">
          <span className="mr-2 font-medium text-yellow-500">
            Rating: {roomRating}
          </span>
          <img
            className="w-6 h-6 ml-2 object-contain"
            alt="Coordinates"
            src={roomCoordinates}
          />
        </div>
      </div>
      <button
        className="mt-4 py-2 px-4 w-full text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-medium tracking-wider uppercase"
      >
        More details
      </button>
    </div>
  );
};

HotelCard2Container.propTypes = {
  className: PropTypes.string,
  roomDescription: PropTypes.string,
  roomType: PropTypes.string,
  roomPrice: PropTypes.string,
  roomReviews: PropTypes.string,
  hotelName: PropTypes.string,
  roomRating: PropTypes.string,
  roomCoordinates: PropTypes.string,
};

export default HotelCard2Container;
