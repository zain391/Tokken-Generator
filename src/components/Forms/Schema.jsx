import * as yup from 'yup'
export const  schema = yup.object().shape({
    firstname: yup.string().min(2).max(25).required("please enter your First_Name dknvaskndv"),
    lastname:  yup.string().min(2).max(25).required("please enter your Last_Name"),
    email:  yup.string().email().required("please enter email"),
    password:  yup.string().min(6).required("please enter password"),
    confirmpassword:  yup.string().required("please enter password").oneOf([yup.ref("password"), "password must match"]),
    streetaddress:  yup.string().required("please enter your streetaddress"),
    city:  yup.string().min(2).required("please enter your city"),
    region:  yup.string().min(2).required("please enter your region"),
    postalcode:  yup.string().min(2).required("please enter your postalcode"),
    
  });