import * as Yup from "yup";
export const Schema = Yup.object().shape({
    tokenName: Yup.string()
      .min(2)
      .max(50)
      .required("The token name field is required"),
    tokenSymbol: Yup.string()
      .required()
      .max(9)
      .required("The token symbol field is required"),
    initialVesting: Yup.number().min(0).max(99),
  
    utc:Yup.array(),
    allFunctionality: Yup.boolean(),
    mintingBurningsupport: Yup.boolean(),
    unlimitedSupply: Yup.boolean(),
    decimals: Yup.boolean(),
    vestingLock: Yup.boolean(),
    initialSupply: Yup.number().min(1).required("The token initial supply field is required"),
    maximumSupply: Yup.number().when("mintingBurningsupport",{
      is:true,
      then: Yup.number().min(Yup.ref("initialSupply")).required()
    }),
    initialVesting: Yup.number(),
    decimals:Yup.number(),
    date_Time:Yup.date(),
  });

