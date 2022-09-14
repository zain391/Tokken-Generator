import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Schema } from "./schema/Schema";
import TokkenFeature from "./TokkenFeature";
const TokkenInfo = () => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          tokenName: "",
          tokenSymbol: "",
        }}
        validationSchema={Schema}
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
          <Form>
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
                        name="tokenName"
                        component="div"
                      />  
                    </p>
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

export default TokkenInfo;
