import * as Yup from "yup";
export const Schema = Yup.object().shape({
    tokenName: Yup.string()
      .min(2,"you must enter atleast two letters")
      .max(50)
      .required(""),
    tokenSymbol: Yup.string()
      .max(9)
      .required("The token symbol field is required"),
    initialVesting: Yup.number().min(0).max(99),
  
    utc:Yup.array(),
    allFunctionality: Yup.boolean(),
    mintingBurningsupport: Yup.boolean(),
    unlimitedSupply: Yup.boolean(),
    decimals: Yup.boolean(),
    vestingLock: Yup.boolean(),
    initialSupply: Yup.number().min(1,"The value of initial supply should be greater than or equal to 1").required(),
    maximumSupply: Yup.number().when("mintingBurningsupport",{
      is:true,
      then: Yup.number().min(Yup.ref("initialSupply")).required("The value of initial supply should be greater than or equal to initialSupply")
    }),
    initialVesting: Yup.number().required("you must enter the value in the "),
    decimals:Yup.number().required(),
    date_Time:Yup.date().min(new Date(),"The date cannot be less than today").required("The date cannot be less than today"),
  });

