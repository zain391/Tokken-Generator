import React from 'react'
import MaterialUiRange from '../MaterialUiRange/MaterialUiRange'

function TokenDecimal({Customdecimals,change ,blur,decimals}) {
  return (
    <>
       {Customdecimals ?(
          <div>
              <div className="max-w-3xl mx-auto bg-white overflow-hidden shadow rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex ">
                    <br />
                    <h3 className="text-gray-900 text-lg font-medium text-gray-900 text-lg font-medium ml-0">
                      Decimals 
                      <span className="text-gray-400 text-xs pb-8 text-gray-400 text-xs pb-8 mt-8 w-94 ml-0 mt-8" >
                        <br />
                    Configure the decimals in your token
                  </span>
                    </h3>
                     
                    <div className="flex justify-center align-middle" />
                  </div>
                </div>
                <div className="p-2">
                  <div className="grid gap-1 grid-cols-2">
                    <div className="col-span-2">
                      <div>
                        <label
                          htmlFor="liq_p"
                          className="text-gray-700 text-sm font-medium"
                        >
                          Decimals
                        </label>
                        <div className="flex gap-2 mt-1">
                              <MaterialUiRange decimals={decimals} change={change} blur={blur}/>
                          <div className="flex-grow ">
                            <div data-baseweb="slider" className="ae af">
                            </div>
                          </div>
                        </div>
                        <p className="mt-1 text-gray-500 text-sm">
                          The decimal units for your token. If you are not sure,
                          use 18.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
        ):
        <></>
       }
    </>
  )
}

export default TokenDecimal