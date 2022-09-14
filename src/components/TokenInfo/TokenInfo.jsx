import { Formik, Form, Field, ErrorMessage } from "formik";
import { Schema } from "../TokenInfo/Schema";
import { useState } from "react";

const TokenInfo = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div>
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
          <>
          <Form>
            <div class="mt-5 md:col-span-2 md:mt-0 w-5"></div>
              <div class="overflow-hidden shadow sm:rounded-md ">
                <div class="bg-white px-4 py-5 sm:p-4">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label class="block text-sm font-medium text-gray-700">
                        Token Name
                      </label>
                      <Field
                        type="text"
                        name="tokenName"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <ErrorMessage
                        name="tokenName"
                        className="text-red-400"
                        component="div"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label class="block text-sm font-medium text-gray-700">
                        Token Symbol
                      </label>
                      <Field
                        style={{ "text-transform": "uppercase" }}
                        maxlength="8"
                        type="text"
                        name="tokenSymbol"
                        autocomplete="address-level1"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <ErrorMessage
                        name="tokenSymbol"
                        className="text-red-400"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <table>
                <tr>
                  <td>
                    <h1>All Functionality (BEP-20 / ERC-20 Standard)</h1>
                  </td>
                  <td>
                    <div class="form-check">
                      <Field
                        name="allFunctionality"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h1>Minting & Burning Support</h1>
                  </td>
                  <td>
                    <Field
                      name="Support"
                      id="same"
                      // value={JSON.stringify(flag)}
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <h1>Customize Decimals</h1>
                  </td>
                  <td>
                    <Field
                      name="Decimals"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                  </td>
                </tr>
                <hr />
                <tr>
                  <td>
                    <h1>Unlimited Supply</h1>
                  </td>
                  <td>
                    <Field
                      name="Supply"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="same"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <h1>Vesting Lock</h1>
                  </td>
                  <td>
                    <Field
                      name="Lock"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                  </td>
                </tr>
              </table>

              <table>
                <tr>
                  <button type="submit">submit</button>
                </tr>
              </table>

              <pre>
                {values.Support ? (
                  <>
                    <section class="text-gray-600 body-font">
                      <div class="container px-5 py-24 mx-auto">
                        <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                          <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                            Slow-carb next level shoindxgoitch ethical
                            authentic, scenester sriracha forage.
                          </h1>
                          <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
                            Button
                          </button>
                        </div>
                      </div>
                    </section>
                  </>
                ) : (
                  <></>
                )}
              </pre>


              <pre>
                {values.Decimals ? (
                  <>
                    <section class="text-gray-600 body-font">
                      <div class="container px-5 py-24 mx-auto">
                        <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                         <input type="range" />
                          <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
                            Button
                          </button>
                        </div>
                      </div>
                    </section>
                  </>
                ) : (
                  <></>
                )}
              </pre>
              <pre>Supply{JSON.stringify(values.Supply)}</pre>
              
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default TokenInfo;
