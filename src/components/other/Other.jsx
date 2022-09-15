const Other = () => {
  return (
    <>
      <div className="md:mr-3  whitespace-nowrap  items-center md:space-x-3  MuiBox-root css-1k88e4i">
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <div className="w-full mt-2">
          <div className="w-full">
            <label
              htmlFor="time"
              className="block text-gray-700 text-sm font-medium"
            >
              Unlock Time
            </label>
            <div className="relative">
              <div className="css-ovnx7g">
                <div>
                  <div className="MuiBox-root css-1nmwe9g">
                    <input
                      name="vestings.0.time"
                      placeholder="mm/dd/yyyy hh:mm (a|p)m"
                      type="tel"
                      className="text-black block mt-1 w-full focus:border-blue-500 border-gray-300 rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
                      defaultValue
                    />
                    <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd css-1nvf7g0">
                      <button
                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd MuiIconButton-sizeMedium css-1psvnyp"
                        tabIndex={0}
                        type="button"
                        aria-label="Choose date"
                      >
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-11fo197"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="CalendarIcon"
                        >
                          <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                        </svg>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </button>
                    </div>
                    <p className="text-black font-bold ml-2">UTC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <div className="w-full md:mr-3  mt-2  ">
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <div className>
            <label
              htmlFor="vesting"
              className="block text-gray-700 text-sm font-medium"
            >
              Vesting
            </label>
            <div className="flex items-center">
              <div className="relative w-full">
                <input
                  name="vestings.0.vesting"
                  type="number"
                  placeholder="Vesting"
                  className="text-black block mt-1 w-full focus:border-blue-500 border-gray-300 rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
                  defaultValue={0}
                />
                <p className="text-black font-bold  absolute left-12 top-[25%]">
                  %
                </p>
              </div>
              <p className="text-red-600 cursor-pointer ml-2">🗑</p>
            </div>
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        </div>
      </div>
    </>
  );
};
