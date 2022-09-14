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
      <></>
      )}
    </Formik>
  );
};

export default TokkenFeature;
