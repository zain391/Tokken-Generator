import React,{useState} from "react";
import { Formik, ErrorMessage,Field, Form } from "formik";
import {schema} from "../Forms/Schema"


const FormikForm = () => {
  const userInfo=JSON.parse(localStorage.getItem("userInfo"));
  const [data, setData]=useState([])

  return (
    <div>
      <div>
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        streetaddress: "",
        city: "",
        region: "",
        postalcode: "",
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          
            let obj={
          firstname:values.firstname,
          lastname:values.lastname,
          email:values.email,
          password:values.password,
          confirmpassword:values.confirmpassword,
          streetaddress:values.streetaddress,
          city:values.city,
          region:values.region,
          postalcode:values.postalcode,
          
          }
          setData([...data,obj])
          localStorage.setItem("userInfo",JSON.stringify(data))
          values.firstname=""
          values.lastname=""
          values.email=""
          values.password=""
          values.confirmpassword=""
          values.streetaddress=""
          values.city=""
          values.region=""
          values.postalcode=""
          console.log(data,"obj");
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
        <Form >
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="mt-5 md:col-span-2 md:mt-0">
                <>
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            for="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First Name
                          </label>
                          {/* first Input */}
                          <Field
                            type="text"
                            name="firstname"
                            autocomplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <ErrorMessage name="firstname"component="div" className="text-red-500" />
                        <hr />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          {/* second input */}
                          <Field
                            type="text"
                            name="lastname"
                            id="last-name"
                            autocomplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <ErrorMessage name="lastname"component="div" className="text-red-500" />
                        <hr />
                        </div>
                        
                        <div className="col-span-6 sm:col-span-4">
                          <label
                            for="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          {/* third input */}
                          <Field
                            type="email"
                            name="email"
                            id="email-address"
                            autocomplete="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <ErrorMessage name="email"component="div" className="text-red-500" />
                          
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            for="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            password
                          </label>
                          {/* third input */}
                          <Field
                            type="password"
                            name="password"
                            id="email-address"
                            autocomplete="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <ErrorMessage name="password"component="div" className="text-red-500" />
                          
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            for="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                           Confirm  password
                          </label>
                          {/* third input */}
                          <Field
                            type="password"
                            name="confirmpassword"
                            id="email-address"
                            autocomplete="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <ErrorMessage name="confirmpassword"component="div" className="text-red-500" />
                          
                        </div>
                        
                        <div className="col-span-6">
                          <label
                            for="street-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Street address
                          </label>
                          {/* forth input */}
                          <Field
                            type="text"
                            name="streetaddress"
                            id="street-address"
                            autocomplete="street-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <ErrorMessage name="streetaddress"component="div" className="text-red-500" />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            for="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          {/* fifth input */}
                          <Field
                            type="text"
                            name="city"
                            id="city"
                            autocomplete="address-level2"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <ErrorMessage name="city"component="div" className="text-red-500"/>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            for="region"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State / Province
                          </label>
                          {/* sixth input */}
                          <Field
                            type="text"
                            name="region"
                            id="region"
                            autocomplete="address-level1"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <ErrorMessage name="region"component="div" className="text-red-500" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            for="postal-code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ZIP / Postal code
                          </label>
                          {/* seventh input
                           */}
                          <Field
                            type="text"
                            name="postalcode"
                            id="postal-code"
                            autocomplete="postal-code"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <ErrorMessage name="postalcode"component="div" className="text-red-500" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
    </div>
  )
}

export default FormikForm
