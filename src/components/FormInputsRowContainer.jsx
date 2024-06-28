import { useState, useMemo, useCallback } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FormInputsRowContainer = ({
  className = "",
  propBorderRadius,
  propBackgroundColor,
  propPadding,
  onSearchTextClick,
}) => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  const formInputsRowStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBorderRadius, propBackgroundColor, propPadding]);

  const navigate = useNavigate();

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className={`self-stretch flex flex-row items-start justify-start md:flex-col ${className}`}
        style={formInputsRowStyle}
      >
        <div className="flex flex-row items-start justify-start md:w-full sm:flex-col">
          <div className="flex-1 flex flex-col items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
            <Autocomplete
              className="self-stretch"
              size="medium"
              disablePortal
              options={[
                "Singapore (SIN)",
                "Sydney (SYD)",
                "Siem Reap (REP)",
                "Shanghai (PVG)",
                "Sanya (SYX)",
              ]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Departure"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              defaultValue="Singapore -  Changi (SIN)"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
            <Autocomplete
              className="self-stretch"
              size="medium"
              sx={{ width: "100%" }}
              disablePortal
              options={[
                "Clark (CRK)",
                "Launceston (LST)",
                "Kalibo (KLO)",
                "Colombo CMB",
                "Melbourne (AVV)",
                "Los Angeles (LA)",
              ]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Arrival"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              defaultValue="Los Angeles (LA)"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch">
              <DatePicker
                label="Date"
                value={selectOutlinedDateTimePickerValue}
                onChange={(newValue) => {
                  setSelectOutlinedDateTimePickerValue(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    color: "primary",
                    placeholder: "Date",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-[5px] md:w-full md:text-left">
          <button
            className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 overflow-hidden flex flex-col items-center justify-center [transition:0.3s] hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]"
            onClick={onSearchTextClick}
          >
            <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white text-center inline-block w-[147px]">
              Search flights
            </div>
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

FormInputsRowContainer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propPadding: PropTypes.any,

  /** Action props */
  onSearchTextClick: PropTypes.func,
};

export default FormInputsRowContainer;
