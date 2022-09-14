import * as Yup from "yup"
import { useState } from "react";
export const Schema= Yup.object().shape({
    tokenName: Yup.string().min(2).max(50).required("The token name field is required"),
      
    tokenSymbol: Yup.string().max(8).required("The token symbol field is required"),
    Support:Yup.boolean(),  
  });