import React from "react";
import { Formik, Form } from "formik";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import TokenDecimal from "../TokenDecimal/TokenDecimal";
import TokenFeature from "../TokenFeature/TokenFeature";
import TokenInformation from "../TokenInformation/TokenInformation";
import TokenSupply from "../TokenSupply/TokenSupply";
import TokenDeployButton from "../TokenDeployButton/TokenDeployButton";
import { Schema } from "../Tokentask2/schema/Schema";
import TokenTge from "../TokenTge/TokenTge";

const TokkenTask2 = () => (
  <>
    <Formik
      initialValues={{
        utc: [
          {
            unlockTime: "",
            vesting: 0,
          },
        ],
        tokenName: "",
        tokenSymbol: "",
        allFunctionality: true,
        mintingBurningsupport: false,
        unlimitedSupply: false,
        Customdecimals: false,
        vestingLock: false,
        initialSupply: 0,
        maximumSupply: 0,
        initialVesting: 0,
        decimals: 18,
        date_Time: "",
      }}
      validationSchema={Schema}
      onSubmit={(values, { setSubmitting }) =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          console.log("i am working well");
          setSubmitting(false);
        }, 500)
      }
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        
      }) => (
        <Form>
          <div className="z-0 flex flex-col items-center w-full min-h-screen pb-16 lg:pb-0 ">
            <Header />
            <main
              className="flex flex-col items-center justify-start flex-grow w-full h-full text-white "
              style={{ height: "max-content" }}
            >
              <>
                <div className="grid gap-4 grid-cols-1 mt-4">
                  <div className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
                    <div className="text-center">
                      <h1 className="text-black text-3xl font-extrabold leading-5 sm:text-4xl lg:text-5xl lg:leading-none">
                        Token Builder
                      </h1>
                      <p className="mt-3 mx-auto max-w-4xl text-gray-600 text-xl leading-7 sm:mt-5 sm:text-2xl sm:leading-8">
                        Easily deploy Smart Contracts for any Token right from
                        your browser.
                      </p>
                    </div>
                  </div>
                  <ConnectWallet />
                  <TokenInformation value={values.tokenName} />

                  <TokenFeature
                    change={handleChange}
                    blur={handleBlur}
                    mintingBurningsupport={values.mintingBurningsupport}
                    unlimitedSupply={values.unlimitedSupply}
                    decimals={values.decimals}
                    Customdecimals={values.Customdecimals}
                  />

                  <TokenSupply
                    mintingBurningsupport={values.mintingBurningsupport}
                    maximumSupply={values.maximumSupply}
                    initialSupply={values.initialSupply}
                  />

                  <TokenDecimal
                    Customdecimals={values.Customdecimals}
                    decimals={values.decimals}
                    change={handleChange}
                    blur={handleBlur}
                  />
                  <TokenTge
                    vestingLock={values.vestingLock}
                    setField={setFieldValue}
                    date_Time={values.date_Time}
                    values={values}
                  />
                  <TokenDeployButton/>
                  
                </div>
              </>
            </main>
            <span />
            <Footer />
          </div>
        </Form>
      )}
    />
  </>
);

export default TokkenTask2;
