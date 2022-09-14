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
          </>
        )}
      </Formik>
    </>
  );
};

export default TokkenSupply;
