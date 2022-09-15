import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Schema } from "./schema/Schema";
import MaterialUiDate from "../MaterialUiDate/MaterialUiDate";
const TokkenTask2 = () => {
  return (
    <>
      <Formik
        // enableReinitialize

        initialValues={{
          utc: [
            {
              unlockTime: "",
              vesting: 0,
            },
          ],
          tokenName: "",
          tokenSymbol: "",
          allFunctionality: true,
          mintingBurningsupport: false,
          unlimitedSupply: false,
          decimals: false,
          vestingLock: false,
          initialSupply:0,
          initialVesting:0,
        }}
        validationSchema={Schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form className="text-center">
            <div className="grid gap-4 grid-cols-1 mt-4">
              <div className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
                <div className="text-center">
                  <h1 className="text-black text-3xl font-extrabold leading-5 sm:text-4xl lg:text-5xl lg:leading-none">
                    Token Builder
                  </h1>
                  <p className="mt-3 mx-auto max-w-4xl text-gray-600 text-xl leading-7 sm:mt-5 sm:text-2xl sm:leading-8">
                    Easily deploy Smart Contracts for any Token right from your
                    browser.
                  </p>
                </div>
              </div>
              <div>
                <div className="max-w-3xl mx-auto bg-white overflow-hidden shadow rounded-xl overflow-hidden">
                  <div className="p-2 ">
                    <div className="flex justify-center">
                      <div className="iekbcc0 ju367va ju367v1n">
                        <button
                          className="connect_button mt-0"
                          type="button"
                          id="btn-connect"
                          color="white"
                        >
                          <span className=" whitespace-nowrap  cursor-pointer focus:shadow-outline-blue inline-flex items-center justify-center px-3 py-2 w-full text-blue-700 text-sm font-medium leading-4 bg-blue-100 active:bg-blue-200 hover:bg-blue-50 border focus:border-blue-300 border-transparent rounded-md focus:outline-none transition duration-150 ease-in-out">
                            Wallet Connect
                          </span>
                        </button>
                        <>
                          <div className="p-4 border-b border-gray-200">
                            <div className="flex justify-between align-middle">
                              <div>
                                <h3 className="text-gray-900 text-lg font-medium leading-6">
                                  Token Information
                                </h3>
                                <p className="text-gray-500 text-sm">
                                  Basic details about your token.
                                </p>
                              </div>
                              <div className="flex justify-center align-middle" />
                            </div>
                          </div>

                          <div className="p-4">
                            <div className="grid gap-4 grid-cols-2">
                              <div className="col-span-2 md:col-span-1">
                                <div>
                                  <label
                                    htmlFor="token_name"
                                    className="block text-gray-700 text-sm font-medium"
                                  >
                                    Token Name
                                  </label>
                                  <Field
                                    type="text"
                                    name="tokenName"
                                    placeholder
                                    className="text-black block mt-1 w-full focus:border-blue-500 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 sm:text-sm"
                                    autoComplete="off"
                                  />
                                  <p className="mt-1 text-gray-500 text-sm">
                                    A name for your token.
                                  </p>
                                  <p className="text-red-500 text-xs">
                                    <ErrorMessage
                                      name="tokenName"
                                      component="div"
                                    />
                                  </p>
                                </div>
                              </div>
                              <div className="col-span-2 md:col-span-1">
                                <div>
                                  <label
                                    htmlFor="token_symbol"
                                    className="block text-gray-700 text-sm font-medium"
                                  >
                                    Token Symbol
                                  </label>
                                  <Field
                                    type="text"
                                    name="tokenSymbol"
                                    placeholder
                                    className="text-black block mt-1 w-full focus:border-blue-500 border-gray-300 rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
                                    autoComplete="off"
                                    minLength={3}
                                    maxLength={9}
                                  />
                                  <p className="mt-1 text-gray-500 text-sm">
                                    Symbol for your token, alphanumeric only.
                                  </p>
                                  <p className="text-red-500 text-xs">
                                    <ErrorMessage
                                      name="tokenSymbol"
                                      component="div"
                                    />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* --------------------------------------------------------------------------------------- */}
                          {/* <pre>{JSON.stringify(values.allFunctionality)}</pre> */}
                          <>
                            <div>
                              <div className="p-4 border-b border-gray-200">
                                <div className="flex justify-between align-middle">
                                  <div>
                                    <h3 className="text-gray-900 text-lg font-medium leading-6">
                                      Token Features
                                    </h3>
                                    <p className="text-gray-500 text-sm" />
                                  </div>
                                  <div className="flex justify-center align-middle" />
                                </div>
                              </div>

                              <div class="p-4">
                                <div class="grid gap-4 grid-cols-1">
                                  <div class="flex justify-between">
                                    <div>
                                      <label
                                        for="token_symbol"
                                        class="text-md block text-gray-700 font-medium"
                                      >
                                        All Functionality (BEP-20 / ERC-20
                                        Standard)
                                      </label>
                                    </div>
                                    <div>
                                      <label class="inline-flex relative items-center cursor-pointer">
                                        <input
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          checked={values.allFunctionality}
                                          name="allFunctionality"
                                          type="checkbox"
                                          id="checked-toggle"
                                          class="sr-only peer"
                                        />

                                        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                      </label>
                                    </div>
                                  </div>
                                  <div class="flex justify-between">
                                    <div>
                                      <label
                                        for="token_symbol"
                                        class="text-md block text-gray-700 font-medium"
                                      >
                                        Minting &amp; Burning Support
                                      </label>
                                    </div>
                                    <div>
                                      <label class="inline-flex relative items-center cursor-pointer">
                                        <input
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          checked={
                                            values.unlimitedSupply
                                              ? true
                                              : values.mintingBurningsupport
                                          }
                                          type="checkbox"
                                          name="mintingBurningsupport"
                                          id="checked-toggle"
                                          class="sr-only peer"
                                        />
                                        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                      </label>
                                    </div>
                                  </div>
                                  <div class="flex justify-between">
                                    <div>
                                      <label
                                        for="token_symbol"
                                        class="text-md block text-gray-700 font-medium"
                                      >
                                        Customize Decimals
                                      </label>
                                    </div>
                                    <div>
                                      <label class="inline-flex relative items-center cursor-pointer">
                                        <Field
                                          name="decimals"
                                          type="checkbox"
                                          id="checked-toggle"
                                          class="sr-only peer"
                                        />
                                        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                      </label>
                                    </div>
                                  </div>
                                  <div class="flex justify-between border border-gray-100"></div>
                                  <div class="flex justify-between">
                                    <div>
                                      <label
                                        for="token_symbol"
                                        class="text-md block text-gray-700 font-medium"
                                      >
                                        Unlimited Supply
                                      </label>
                                    </div>
                                    <div>
                                      <label class="inline-flex relative items-center cursor-pointer">
                                        <input
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          checked={values.unlimitedSupply}
                                          name="unlimitedSupply"
                                          type="checkbox"
                                          id="checked-toggle"
                                          class="sr-only peer"
                                        />
                                        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white  after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                      </label>
                                    </div>
                                  </div>
                                  <div class="flex justify-between">
                                    <div>
                                      <label
                                        for="token_symbol"
                                        class="text-md block text-gray-700 font-medium"
                                      >
                                        Vesting Lock
                                      </label>
                                    </div>
                                    <div>
                                      <label class="inline-flex relative items-center cursor-pointer">
                                        <Field
                                          name="vestingLock"
                                          type="checkbox"
                                          id="checked-toggle"
                                          class="sr-only peer"
                                        />
                                        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white  after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                          </>

                          {/* --------------------------------------------------------------------------------------- */}
                          <>
                            <div className="p-4 border-b border-gray-200">
                              <div className="flex justify-between align-middle">
                                <div>
                                  <h3 className="text-gray-900 text-lg font-medium leading-6">
                                    Token Supply
                                  </h3>
                                  <p className="text-gray-500 text-sm">
                                    Let's set the supply options for your token.
                                  </p>
                                </div>
                                <div className="flex justify-center align-middle" />
                              </div>
                            </div>

                            <div className="p-4">
                              <div className="grid gap-4 grid-cols-2">
                                <div className="col-span-2">
                                  <div>
                                    <label
                                      htmlFor="supply_initial"
                                      className="block text-gray-700 text-sm font-medium"
                                    >
                                      Initial Supply
                                    </label>
                                    <Field
                                      type="number"
                                      name="initialSupply"
                                      className="block mt-1 w-full text-black focus:border-blue-500 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 sm:text-sm "
                                      defaultValue={0}
                                    />
                                    <p className="text-red-500 text-xs">
                                    <ErrorMessage
                                      name="initialSupply"
                                      component="div"
                                    />
                                  </p>
                                    <p className="mt-1 text-gray-500 text-sm">
                                      Starting number of supply of your token,
                                      will be placed in your wallet.
                                    </p>
                                    <p className="text-red-500 text-xs" />
                                  </div>
                                  {values.mintingBurningsupport ? (
                                    <div className="pt-3">
                                      <label
                                        htmlFor="supply_initial"
                                        className="block text-gray-700 text-sm font-medium"
                                      >
                                        Maximum Supply
                                      </label>
                                      <input
                                        type="number"
                                        className="block mt-1 w-full text-black focus:border-blue-500 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 sm:text-sm "
                                        name="maximumSupply"
                                        defaultValue={0}
                                      />
                                      <p className="mt-1 text-gray-500 text-sm">
                                        Maximum number of supply of your token,
                                        will be placed in your wallet.
                                      </p>
                                      <p className="text-red-500 text-xs" />
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </div>
                            </div>
                          </>
                          {/* -----------------uuu----------------------------------- */}
                          {values.decimals ? (
                            <>
                              <div className="max-w-3xl mx-auto bg-white overflow-hidden shadow rounded-xl overflow-hidden">
                                <div className="p-4 border-b border-gray-200">
                                  <div className="flex justify-between align-middle">
                                    <div>
                                      <h3 className="text-gray-900 text-lg font-medium leading-6">
                                        Decimals
                                      </h3>
                                      <p className="text-gray-500 text-sm">
                                        Configure the decimals in your token
                                      </p>
                                    </div>
                                    <div className="flex justify-center align-middle" />
                                  </div>
                                </div>
                                <div className="p-4">
                                  <div className="grid gap-4 grid-cols-2">
                                    <div className="col-span-2">
                                      <div>
                                        <label
                                          htmlFor="liq_p"
                                          className="block text-gray-700 text-sm font-medium"
                                        >
                                          Decimals
                                        </label>
                                        <div className="flex gap-2 mt-1">
                                          <div className="flex-grow flex-shrink-0">
                                            <div
                                              data-baseweb="slider"
                                              className="ae af"
                                            >
                                              <div className="ag ah ai aj ak al am">
                                                <div className="an ao ap aq bz as af at au">
                                                  <span className="MuiSlider-colorSecondary MuiSlider-sizeMedium MuiSlider-root css-1p6279n">
                                                    <span className="MuiSlider-rail css-b04pc9" />
                                                    <span
                                                      className="MuiSlider-track css-1t2bqnt"
                                                      style={{
                                                        left: "0%",
                                                        width: "100%",
                                                      }}
                                                    />
                                                    <span
                                                      data-index={0}
                                                      className="MuiSlider-thumbColorSecondary MuiSlider-thumbSizeMedium MuiSlider-thumb css-by71oc"
                                                      style={{ left: "100%" }}
                                                    >
                                                      <input
                                                        aria-orientation="horizontal"
                                                        aria-valuemax={18}
                                                        aria-valuemin={6}
                                                        name="decimalsValue"
                                                        type="range"
                                                        min={6}
                                                        max={18}
                                                        step={1}
                                                        data-index={0}
                                                        aria-label="Always visible"
                                                        aria-valuenow={18}
                                                        aria-valuetext="18°C"
                                                        defaultValue={18}
                                                        style={{
                                                          border: "0px",
                                                          clip: "rect(0px, 0px, 0px, 0px)",
                                                          height: "100%",
                                                          margin: "-1px",
                                                          overflow: "hidden",
                                                          padding: "0px",
                                                          position: "absolute",
                                                          whiteSpace: "nowrap",
                                                          width: "100%",
                                                          direction: "ltr",
                                                        }}
                                                      />
                                                      <span
                                                        className="MuiSlider-valueLabelOpen MuiSlider-valueLabel css-zuq5ux"
                                                        aria-hidden="true"
                                                      >
                                                        <span className="MuiSlider-valueLabelCircle">
                                                          <span className="MuiSlider-valueLabelLabel">
                                                            18
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="ak b6 b2 ai aj b7">
                                                <div className="b8 b9 ba bb bc">
                                                  6
                                                </div>
                                                <div className="b8 b9 ba bb bc">
                                                  18
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="grid items-center justify-center w-8 h-8">
                                            10
                                          </div>
                                        </div>
                                        <p className="mt-1 text-gray-500 text-sm">
                                          The decimal units for your token. If
                                          you are not sure, use 18.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <></>
                          )}

                          <>
                            {
                              values.vestingLock ? (
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
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.initialVesting}
                                        className="block mt-1 w-full text-black focus:border-blue-500 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 sm:text-sm "
                                        max="100"
                                        defaultValue={0}
                                      />
                                      <p className="text-black font-bold  absolute left-12 top-[20%]">
                                        %
                                      </p>
                                    </div>
                                    <p className="mt-1 text-gray-500 text-sm">
                                      Percentage of tokens which will be
                                      unlocked by the time of creation.
                                    </p>
                                    <p className="text-red-500 text-xs" />
                                  </div>
                                  <div>
                                    {/* Field array will start here  */}
                                    <FieldArray
                                      name="utc"
                                      // render function starts here
                                      render={(arrayHelpers) => (
                                        <div className="md:mr-3  whitespace-nowrap  items-center md:space-x-3  MuiBox-root css-1k88e4i">
                                          {/* now we are going to apply condtion on the utc array 
        also utc terniray operator will start here 
        */}

                                          {
                                            values.utc && values.utc.length > 0
                                              ? // here we will map the array
                                                values.utc.map(
                                                  (utcitems, index) => (
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
                                                                {/* {setutc(index)} */}
                                                                <MaterialUiDate/>
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
                                                                <p className="text-black font-bold ml-2">
                                                                  UTC
                                                                </p>
                                                              </div>
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
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.utc.vesting}
                                                                      name={`utc.[${index}].vesting`}
                                                                      type="number"
                                                                      placeholder="Vesting"
                                                                      className="text-black block mt-1 w-full focus:border-blue-500 border-gray-300 rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
                                                                      defaultValue={
                                                                        0
                                                                      }
                                                                    />
                                                                    <p className="text-black font-bold  absolute left-12 top-[25%]">
                                                                      %
                                                                    </p>
                                                                  </div>
                                                                  <button
                                                                    className="text-red-600 cursor-pointer ml-2"
                                                                    onClick={() =>
                                                                      arrayHelpers.remove(
                                                                        index
                                                                      )
                                                                    }
                                                                  >
                                                                    🗑
                                                                  </button>
                                                                </div>
                                                                
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  )
                                                )
                                              : null
                                            // here we have ended map the array
                                          }
                                            
                                          <div className="flex justify-center">
                                            <div className="bg-blue-500 text-center border rounded-md p-2 font-bold mt-4 hover:scale-105">
                                              <button
                                                type="button"
                                                onClick={() =>
                                                  arrayHelpers.push({
                                                    unlockTime: "",
                                                    vesting: "",
                                                  })
                                                }
                                              >
                                                Add Vesting
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      // render function ends here
                                    />
                                    {/* Field array will end here here  */}
                                    {
                                                                    (values.initialVesting+values.utc[0].vesting !== 100) ?(
                                                                      <p className="text-red-500 text-xs pt-2">The Sum of TGE and Vestings should be equal to
                                                                      100%</p>):
                                                                      (null)
                                                                    
                                                                    

                                                                  }
                                  </div>
                                </div>
                              ) : (
                                // the else part of vesting lock if user has not checked out the button nothing to show
                                <></>
                              )
                              // so that is why i put the epmty tag
                            }
                          </>

                          <>
                            <div className="p-4 border-b border-gray-200">
                              <div className="flex justify-between align-middle">
                                <div>
                                  <h3 className="text-gray-900 text-lg font-medium leading-6">
                                    🚀 Ready to deploy?
                                  </h3>
                                  <p className="text-gray-500 text-sm" />
                                </div>
                                <div className="flex justify-center align-middle" />
                              </div>
                            </div>

                            <div className="p-4">
                              <div className="grid gap-4 grid-cols-2">
                                <div className="flex flex-col col-span-2 justify-center text-center">
                                  <span className="text-red-500 font-bold">
                                    Connect Metamask to show pricing.
                                  </span>
                                </div>
                                <div className="flex col-span-2">
                                  <div className="flex-grow flex-shrink-0">
                                    <button
                                      className="focus:shadow-outline-blue inline-flex items-center justify-center px-3 py-2 w-full text-blue-700 text-sm cursor-pointer font-medium leading-4 bg-blue-100 active:bg-blue-200 hover:bg-blue-50 border focus:border-blue-300 border-transparent rounded-md focus:outline-none transition duration-150 ease-in-out disabled:opacity-50"
                                      aria-label="Login"
                                    > 
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 16 16"
                                        className="mr-2 w-6 h-6"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M14.491 1c-3.598.004-6.654 1.983-8.835 4H1.5l-.5.5v3l.147.354.991.991.001.009 4 4 .009.001.999.999L7.5 15h3l.5-.5v-4.154c2.019-2.178 3.996-5.233 3.992-8.846l-.501-.5zM2 6h2.643a23.828 23.828 0 0 0-2.225 2.71L2 8.294V6zm5.7 8l-.42-.423a23.59 23.59 0 0 0 2.715-2.216V14H7.7zm-1.143-1.144L3.136 9.437C4.128 8 8.379 2.355 13.978 2.016c-.326 5.612-5.987 9.853-7.421 10.84zM4 15v-1H2v-2H1v3h3zm6.748-7.667a1.5 1.5 0 1 0-2.496-1.666 1.5 1.5 0 0 0 2.495 1.666z"
                                        />
                                      </svg>
                                    </button>
                                    <button
                                      type="submit"
                                      className="cursor-pointer disabled:opacity-70"
                                    >
                                      Deploy Token
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TokkenTask2;
