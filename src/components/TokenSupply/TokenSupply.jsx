import React from "react";
import { ErrorMessage, Field } from "formik";
function TokenSupply({ mintingBurningsupport }) {
  return (
    <>
      <div>
        <div className="max-w-3xl mx-auto bg-white overflow-hidden shadow rounded-xl overflow-hidden">
          <div className="flex ">
            <br />
            <h3
              className="text-gray-900 text-lg font-medium "
              style={{ position: "absolute", left: "320px" }}
            >
              Token Supply
              <span
                className="text-gray-400 text-xs pb-8"
                style={{
                  position: "absolute",
                  top: "29px",
                  left: "-12px",
                  width: "250px",
                }}
              >
                Let's set the supply options for your token
              </span>
            </h3>

            <div className="flex justify-center align-middle" />
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
                  <p className="mt-1 text-gray-500 text-sm">
                    Starting number of supply of your token, will be placed in
                    your wallet.
                  </p>
                  <p className="text-red-500 text-xs">
                    <ErrorMessage name="initialSupply" component="div" />
                  </p>
                  <p className="text-red-500 text-xs" />
                </div>
              </div>
            </div>
          </div>
          {mintingBurningsupport ? (
            <div>
              <div className="max-w-3xl mx-auto bg-white overflow-hidden shadow rounded-xl overflow-hidden">
                <div className="flex ">
                  <br />
                  <h3
                    className="text-gray-900 text-lg font-medium "
                    style={{ position: "absolute", left: "320px" }}
                  >
                    Maximum Supply
                  </h3>

                  <div className="flex justify-center align-middle" />
                </div>

                <div className="p-4">
                  <div className="grid gap-4 grid-cols-2">
                    <div className="col-span-2">
                      <div>
                        <Field
                          type="number"
                          name="maximumSupply"
                          className="block mt-1 w-full text-black focus:border-blue-500 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 sm:text-sm "
                          defaultValue={0}
                        />
                        <p className="mt-1 text-gray-500 text-sm">
                          Maximum number of supply of your token, will be placed
                          in your wallet.
                        </p>
                        <p className="text-red-500 text-xs">
                          <ErrorMessage name="maximumSupply" component="div" />
                        </p>
                        <p className="text-red-500 text-xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default TokenSupply;
