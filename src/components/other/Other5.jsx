
                          {
                            values.vestingLock ?(
                                <div className="max-w-3xl w-full mx-auto bg-white overflow-hidden shadow rounded-xl overflow-hidden p-3">
                                <div>
                                  <label
                                    htmlFor="supply_initial"
                                    className="block text-gray-700 text-sm font-medium"
                                  >
                                    TGE
                                  </label>
                                  <div className="relative">
                                    <input
                                      type="number"
                                      name="initialVesting"
                                      className="block mt-1 w-full text-black focus:border-blue-500 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 sm:text-sm "
                                      max={100}
                                      defaultValue={0}
                                    />
                                    <p className="text-black font-bold  absolute left-12 top-[20%]">
                                      %
                                    </p>
                                  </div>
                                  <p className="mt-1 text-gray-500 text-sm">
                                    Percentage of tokens which will be unlocked
                                    by the time of creation.
                                  </p>
                                  <p className="text-red-500 text-xs" />
                                </div>
                                <div>
                                  {/* Field array will start here  */}
                                  <FieldArray
                                    name="utc"
                                    // render function starts here
                                    render={arrayHelpers => (
                                      <div className="md:mr-3  whitespace-nowrap  items-center md:space-x-3  MuiBox-root css-1k88e4i">
                                        {/* now we are going to apply condtion on the utc array 
        also utc terniray operator will start here 
        */}


                                        {
                                          values.utc && values.utc.length > 0
                                            ?

                                            // here we will map the array
                                            values.utc.map((utcitems, index) => (
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
                                                          <Field
                                                            name={`utc.[${index}].unlockTime`}
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


                                            ))
                                            :
                                            <div className="flex justify-center">
                                              <div className="bg-blue-500 text-center border rounded-md p-2 font-bold mt-4 hover:scale-105">
                                                <button
                                                  type="button"
                                                // onClick={() =>
                                                //   arrayHelpers.push(index, "")
                                                // }
                                                >
                                                  Add Vesting
                                                </button>
                                              </div>
                                            </div>
                                          // here we have ended map the array
                                        }


                                      </div>

                                    )}
                                  // render function ends here 
                                  />
                                  {/* Field array will end here here  */}
                                  <p className="text-red-500 text-xs pt-2">
                                    The Sum of TGE and Vestings should be equal
                                    to 100%
                                    <br />
                                    Currently it is bellow than 100%
                                  </p>
                                </div>
                              </div>
                            )
                              



                              // the else part of vesting lock if user has not checked out the button nothing to show 
                              : <></>
                            // so that is why i put the epmty tag 
                          }