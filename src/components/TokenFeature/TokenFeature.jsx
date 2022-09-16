import { Field } from "formik";
import React from "react";

function TokenFeature({blur,change,unlimitedSupply,mintingBurningsupport,Customdecimals}) {
  return (
    <>
      <div>
        <div className="max-w-3xl mx-auto bg-white overflow-hidden shadow rounded-xl overflow-hidden">
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
          <div className="p-4">
            <div className="grid gap-4 grid-cols-1">
              <div className="flex justify-between">
                <div>
                  <label
                    htmlFor="token_symbol"
                    className="text-md block text-gray-700 font-medium"
                  >
                    All Functionality (BEP-20 / ERC-20 Standard)
                  </label>
                </div>
                <div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <Field
                      name="allFunctionality"
                      type="checkbox"
                      id="checked-toggle"
                      className="sr-only peer"
                     
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <label
                    htmlFor="token_symbol"
                    className="text-md block text-gray-700 font-medium"
                  >
                    Minting &amp; Burning Support
                  </label>
                </div>
                <div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                    onChange={change}
                    onBlur={blur}
                    checked={(unlimitedSupply ? true: mintingBurningsupport)}
                      name="mintingBurningsupport"
                      type="checkbox"
                      id="checked-toggle"
                      className="sr-only peer"
                      defaultValue
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <label
                    htmlFor="token_symbol"
                    className="text-md block text-gray-700 font-medium"
                  >
                    Customize Decimals
                  </label>
                </div>
                <div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                    onChange={change}
                    onBlur={blur}
                    checked={Customdecimals}
                      name="Customdecimals"
                      type="checkbox"
                      id="checked-toggle"
                      className="sr-only peer"
                      // defaultValue
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                  </label>
                </div>
              </div>
              <div className="flex justify-between border border-gray-100" />
              <div className="flex justify-between">
                <div>
                  <label
                    htmlFor="token_symbol"
                    className="text-md block text-gray-700 font-medium"
                  >
                    Unlimited Supply
                  </label>
                </div>
                <div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                    onChange={change}
                    onBlur={blur}
                    value={unlimitedSupply}
                      name="unlimitedSupply"
                      type="checkbox"
                      id="checked-toggle"
                      className="sr-only peer"
                      defaultValue
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white  after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <label
                    htmlFor="token_symbol"
                    className="text-md block text-gray-700 font-medium"
                  >
                    Vesting Lock
                  </label>
                </div>
                <div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <Field
                      name="vestingLock"
                      type="checkbox"
                      id="checked-toggle"
                      className="sr-only peer"
                      defaultValue
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white  after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TokenFeature;
