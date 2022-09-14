import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const TokkenSupply = ({toggle}) => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          tokenName: "",
          tokenSymbol: "",
          allFunctionality: true,
          Support: false,
          Supply:  false,
          Decimals: false,
          Lock: false,
        }}
        validationSchema
        onSubmit={(values, { setSubmitting }) => {
          console.log("selected ===>", values);

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            console.log(values);
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
                    <input
                      type="number"
                      name="initialSupply"
                      className="block mt-1 w-full text-black focus:border-blue-500 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 sm:text-sm "
                      defaultValue={0}
                    />
                    <p className="mt-1 text-gray-500 text-sm">
                      Starting number of supply of your token, will be placed in
                      your wallet.
                    </p>
                    <p className="text-red-500 text-xs" />
                  </div>
                  {
                    toggle ? 
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
                      Maximum number of supply of your token, will be placed in
                      your wallet.
                    </p>
                    <p className="text-red-500 text-xs" />
                  </div>:
                  <></>
                  }
                </div>
              </div>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default TokkenSupply;
