import FlightContainer from "./FlightContainer";
import FlightInfoContainer from "./FlightInfoContainer";
import PropTypes from "prop-types";

const FlightCardsContainer = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[9px] text-left text-base text-dimgray-200 font-roboto ${className}`}
    >
      <FlightContainer
        flightDetails="/turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightNumber="/flighticon.svg"
        flightDuration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        flightPrice="S$ 723"
      />
      <FlightInfoContainer
        flightDetails="/sia.svg"
        airlineName="Singapore Airlines"
        departureTime="8:45 PM"
        flightDuration="15H 10M, 2-stops"
        arrivalTime="7:55 PM"
        flightPrice="S$ 900"
      />
      <FlightContainer
        flightDetails="/japan.svg"
        airlineName="Japan Airlines"
        departureTime="8:20 PM"
        flightNumber="/flighticon1.svg"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 859"
      />
      <FlightContainer
        flightDetails="/ana.svg"
        airlineName="ANA"
        departureTime="6:35 PM"
        flightNumber="/flighticon1.svg"
        flightDuration="19H 15M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 936"
      />
      <FlightContainer
        flightDetails="/americanairlines.svg"
        airlineName="American Airlines"
        departureTime="8:20 PM"
        flightNumber="/flighticon1.svg"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 AM"
        flightPrice="S$ 939"
      />
      <FlightInfoContainer
        flightDetails="/turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 2-stops"
        arrivalTime="4:45 PM"
        flightPrice="S$ 673"
      />
      <FlightContainer
        flightDetails="/japan1.svg"
        airlineName="Japan Airlines"
        departureTime="10:25 PM"
        flightNumber="/flighticon1.svg"
        flightDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
      />
      <FlightContainer
        flightDetails="/americanairlines1.svg"
        airlineName="American Airlines"
        departureTime="10:25 PM"
        flightNumber="/flighticon1.svg"
        flightDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[220px] h-[72px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
        <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_81.5px)] text-lg tracking-[0.04em] font-medium font-roboto text-white text-center">
          Show more results
        </div>
      </button>
    </div>
  );
};

FlightCardsContainer.propTypes = {
  className: PropTypes.string,
};

export default FlightCardsContainer;
