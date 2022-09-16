import React from "react";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import MaterialUiRange from "../MaterialUiRange/MaterialUiRange";
import TokenDecimal from "../TokenDecimal/TokenDecimal";
import TokenFeature from "../TokenFeature/TokenFeature";
import TokenInformation from "../TokenInformation/TokenInformation";
import TokenSupply from "../TokenSupply/TokenSupply";
const TokkenTask2 = () => {
  return (
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
                  Easily deploy Smart Contracts for any Token right from your
                  browser.
                </p>
              </div>
            </div>
            <ConnectWallet />
            <TokenInformation />

            <TokenFeature />
            <TokenSupply />
            <TokenDecimal/>
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
                  Percentage of tokens which will be unlocked by the time of
                  creation.
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
                                <p className="text-black font-bold ml-2">UTC</p>
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
                          <p className="text-red-600 cursor-pointer ml-2">🗑</p>
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
                                <p className="text-black font-bold ml-2">UTC</p>
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
                          <p className="text-red-600 cursor-pointer ml-2">🗑</p>
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
            <div>
              <div className="max-w-3xl mx-auto bg-white overflow-hidden shadow rounded-xl overflow-hidden">
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
                          className="focus:shadow-outline-blue inline-flex items-center justify-center px-3 py-2 w-full text-blue-700 text-sm cursor-not-allowed font-medium leading-4 bg-blue-100 active:bg-blue-200 hover:bg-blue-50 border focus:border-blue-300 border-transparent rounded-md focus:outline-none transition duration-150 ease-in-out disabled:opacity-50"
                          aria-label="Login"
                          disabled
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
                          {" "}
                          Deploy Token
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
      <span />
      <Footer />
    </div>
  );
};

export default TokkenTask2;
