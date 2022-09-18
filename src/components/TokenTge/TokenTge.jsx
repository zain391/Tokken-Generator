import React from "react";
import MaterialUiDate from "../MaterialUiDate/MaterialUiDate";
import { Formik, Form, Field, FieldArray } from "formik";
const stylePara="text-[#7E88C3] pt-4 font-medium text-base leading-6 font-sans";
function TokenTge({ vestingLock ,values}) {
  return (
    <>
      <div className="max-w-3xl w-full mx-auto bg-white mt-10 shadow rounded-xl overflow-hidden p-3">
        {vestingLock ? (
          <>
            <div>
              <label
                htmlFor="supply_initial"
                className="block text-gray-700 text-sm font-medium"
              >
                TGE
              </label>
              <div className="relative">
                <Field
                  type="number"
                  name="initialVesting"
                  className="text-black block mt-3  border-[#DFE3FA] border-solid border-2 w-full p-3 focus:border-blue-500  outline-none rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
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
            <FieldArray name="utc">
              {({ insert, remove, push }) => (
                <div>
                  {values.utc.length > 0 &&
                    values.utc.map((utcItems, index) => (
                      <div
                        className="grid grid-cols-5 mt-2  gap-3 "
                        key={index}
                      >
                        <div className="flex flex-col col-span-2 justify-center items-center">
                          <p className={`${stylePara}  mr-4`}>Unlock Time</p>
                          <MaterialUiDate />
                        </div>
                        <div className="col-span-2">
                          <p className={`${stylePara}  ml-4 w-12`}>Vesting</p>
                          <Field
                            name={`utc.${index}.vesting`}
                            className="text-black block  h-14 border-[blue-500] border-solid border-1 w-full p-3 focus:border-blue-500  outline-none rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
                            type="number"
                          />
                        </div>
                        <div className="flex justify-center items-cente pt-12">
                          <button
                            type="button"
                            className="secondary text-red-600"
                            onClick={() => remove(index)}
                          >
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  <div className="flex flex-col">
                    {values.initialVesting +
                      values.utc.reduce((accumulator, object, index) => {
                        return accumulator + object.vesting;
                      }, 0) ===
                    100 ? (
                      ""
                    ) : (
                      <div className="py-5 pl=2 text-red-500 flex justify-start w-94 text-xs">
                        The Sum of TGE and Vestings should be equal to 100%
                        Currently it is exceding 100%
                      </div>
                    )}
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="bg-blue-500 text-white text-center border rounded-md p-2 font-bold mt-4 hover:scale-105"
                        onClick={() => push({ date: "", vesting: "" })}
                      >
                        Add Vesting
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </FieldArray>
          </>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}

export default TokenTge;
