import React from 'react'
import { Formik,useFormik  } from "formik"
// const initialValues={
//   firstName:"",
//   email:"",
//   password:"",
//   range:""
// }
function InvoiceForm() {
 
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      console.log("values",values);
      console.log("typeof values",typeof values);
      // alert(JSON.stringify(values, null, 2));
      // console.log(JSON.stringify(values,null));
    },
  });
  console.log("Formik",formik)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="email">Email Address</label>
       <input className='border-black'
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <br />
       <label htmlFor="password">Email Address</label>
       <input className='border-black'
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
 
       <button type="submit">Submit</button>
     </form>
    </div>
  )
}

export default InvoiceForm;