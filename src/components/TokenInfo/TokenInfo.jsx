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
          allFunctionality: true,
          Support: flag,
          Supply: flag ? true : false,
          Decimals: false,
          Lock: false,
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
            <div class="mt-5 md:col-span-2 md:mt-0 w-5"></div>
            <Form>
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
                        autocomplete="address-level2"
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

              <div><div className="max-w-3xl mx-auto bg-white overflow-hidden shadow rounded-xl overflow-hidden"><div className="p-4 border-b border-gray-200"><div className="flex justify-between align-middle"><div><h3 className="text-gray-900 text-lg font-medium leading-6">Token Information</h3><p className="text-gray-500 text-sm">Basic details about your token.</p></div><div className="flex justify-center align-middle" /></div></div><div className="p-4"><div className="grid gap-4 grid-cols-2"><div className="col-span-2 md:col-span-1"><div><label htmlFor="token_name" className="block text-gray-700 text-sm font-medium">Token Name</label><input type="text" name="tokenName" placeholder className="text-black block mt-1 w-full focus:border-blue-500 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 sm:text-sm" autoComplete="off" defaultValue /><p className="mt-1 text-gray-500 text-sm">A name for your token.</p><p className="text-red-500 text-xs" /></div></div><div className="col-span-2 md:col-span-1"><div><label htmlFor="token_symbol" className="block text-gray-700 text-sm font-medium">Token Symbol</label><input type="text" name="tokenSymbol" placeholder className="text-black block mt-1 w-full focus:border-blue-500 border-gray-300 rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm" autoComplete="off" minLength={3} maxLength={9} defaultValue /><p className="mt-1 text-gray-500 text-sm">Symbol for your token, alphanumeric only.</p><p className="text-red-500 text-xs" /></div></div></div></div></div></div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default TokenInfo;
