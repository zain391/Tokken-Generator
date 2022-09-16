import React from 'react'
import MaterialUiRange from '../MaterialUiRange/MaterialUiRange'

function TokenDecimal() {
  return (
    <>
       <div>
              <div className="max-w-3xl mx-auto bg-white overflow-hidden shadow rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex ">
                    <br />
                    <h3 className="text-gray-900 text-lg font-medium " style={{ position: "absolute", left: "320px" }}>
                      Decimals 
                      <span className="text-gray-400 text-xs pb-8" style={{ position: "absolute", 
                       top:"20px",right:"-155px", width:"250px" }}>
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
                          <div className="flex-grow ">
                            <div data-baseweb="slider" className="ae af">
                              <MaterialUiRange/>
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
    </>
  )
}

export default TokenDecimal