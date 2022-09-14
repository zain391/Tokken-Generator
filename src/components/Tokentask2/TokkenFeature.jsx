import React ,{ useState}from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TokkenSupply from "./TokkenSupply";
import TokkenDeploy from "./TokkenDeploy";

const TokkenFeature = () => {
    const [support , setSupport]=useState(false)
  return (
    <Formik
      enableReinitialize
      initialValues={{
        allFunctionality: true,
        mintingBurningsupport: false,
        unlimitedSupply: false,
        decimals: false,
        vestingLock: false,
      }}
      validationSchema
      
      onSubmit={(values, { setSubmitting }) => {
        console.log("selected ===>", values);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          console.log(values, values.mintingBurningsupport);
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
                      All Functionality (BEP-20 / ERC-20 Standard)
                    </label>
                  </div>
                  <div>
                    <label class="inline-flex relative items-center cursor-pointer">
                      <Field
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
                      <Field
                        name="mintingBurningsupport"
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
                      <Field
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
          ;
          <TokkenSupply toggle={values.unlimitedSupply}/>
          <TokkenDeploy/>
          <button type="submit">Submit</button>
        </>
      )}
    </Formik>
  );
};

export default TokkenFeature;
