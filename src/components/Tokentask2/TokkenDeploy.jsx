import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const TokkenDeploy = () => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          tokenName: "",
          tokenSymbol: "",
          allFunctionality: true,
          Support: false,
          Supply: false,
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
                    {/* <button
                      type="submited "
                      className="cursor-pointer disabled:opacity-70"
                    >
                      
                      Deploy Token
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default TokkenDeploy;
