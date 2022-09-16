import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import TokenDecimal from "../TokenDecimal/TokenDecimal";
import TokenFeature from "../TokenFeature/TokenFeature";
import TokenInformation from "../TokenInformation/TokenInformation";
import TokenSupply from "../TokenSupply/TokenSupply";
import TokenDeployButton from "../TokenDeployButton/TokenDeployButton";
import { Schema } from "../Tokentask2/schema/Schema";
const TokkenTask2 = () => (
  <>
    <Formik
      initialValues={{ utc: [
        {
          unlockTime: "",
          vesting: 0,
        },
      ] ,
      tokenName:"",
      tokenSymbol: "",
      allFunctionality: true,
      mintingBurningsupport: false,
      unlimitedSupply: false,
      decimals: false,
      vestingLock: false,
      initialSupply: 0,
      maximumSupply: 0,
      initialVesting: 0,
    }}
    validationSchema={Schema}
      onSubmit={(values) =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting, }) => (
        <Form>
          <div className="z-0 flex flex-col items-center w-full min-h-screen pb-16 lg:pb-0 ">
            <Header />
            <main
              className="flex flex-col items-center justify-start flex-grow w-full h-full text-white "
              style={{ height: "max-content" }}
            >
              <form noValidate className="my-5">
                <div className="grid gap-4 grid-cols-1 mt-4">
                  <div className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
                    <div className="text-center">
                      <h1 className="text-black text-3xl font-extrabold leading-5 sm:text-4xl lg:text-5xl lg:leading-none">
                        Token Builder
                      </h1>
                      <p className="mt-3 mx-auto max-w-4xl text-gray-600 text-xl leading-7 sm:mt-5 sm:text-2xl sm:leading-8">
                        Easily deploy Smart Contracts for any Token right from
                        your browser.
                      </p>
                    </div>
                  </div>
                  <ConnectWallet />
                  <TokenInformation value={values.tokenName}/>

                  <TokenFeature change={handleChange} blur={handleBlur} mintingBurningsupport={values.mintingBurningsupport} unlimitedSupply={values.unlimitedSupply}/>
                  <TokenSupply />
                  <TokenDecimal />
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
                        Percentage of tokens which will be unlocked by the time
                        of creation.
                      </p>
                      <p className="text-red-500 text-xs" />
                    </div>
                    <div className>
                      <div className="   ">
                        <div className="md:mr-3  whitespace-nowrap  items-center md:space-x-3  MuiBox-root css-1k88e4i">
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
                                      <p className="text-black font-bold ml-2">
                                        UTC
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full md:mr-3  mt-2  ">
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
                                <p className="text-red-600 cursor-pointer ml-2">
                                  🗑
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="   ">
                        <div className="md:mr-3  whitespace-nowrap  items-center md:space-x-3  MuiBox-root css-1k88e4i">
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
                                        name="vestings.1.time"
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
                                      <p className="text-black font-bold ml-2">
                                        UTC
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full md:mr-3  mt-2  ">
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
                                    name="vestings.1.vesting"
                                    type="number"
                                    placeholder="Vesting"
                                    className="text-black block mt-1 w-full focus:border-blue-500 border-gray-300 rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
                                    defaultValue
                                  />
                                  <p className="text-black font-bold  absolute left-12 top-[25%]">
                                    %
                                  </p>
                                </div>
                                <p className="text-red-600 cursor-pointer ml-2">
                                  🗑
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-red-500 text-xs pt-2">
                        The Sum of TGE and Vestings should be equal to 100%
                        <br />
                        Currently it is bellow than 100%
                      </p>
                      <div className="flex justify-center">
                        <div className="bg-blue-500 text-center border rounded-md p-2 font-bold mt-4 hover:scale-105">
                          <button type="button">Add Vesting</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <TokenDeployButton/>
                </div>
              </form>
            </main>
            <span />
            <Footer />
          </div>
        </Form>
      )}
    />
  </>
);

export default TokkenTask2;
