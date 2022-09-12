import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, useFormik } from "formik"

function InvoiceForm() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  }
  const [userData, setuserData] = useState([])
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));;
      const data=(JSON.stringify(values, null, 2))
      const resData=JSON.parse(data);
      console.log(resData);
      setuserData([{ ...resData  }])
      console.log("userData ",userData);
    },
  });
  

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form>


    </div>
  )
}

export default InvoiceForm;