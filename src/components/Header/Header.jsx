import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-lg ">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex cursor-pointer">
                <Link to="/" className=" self-center">
                  <div className="flex flex-shrink-0 items-center">
                    <div className=" w-8 h-8">
                      <div
                        style={{
                          display: "inline-block",
                          maxWidth: "100%",
                          overflow: "hidden",
                          position: "relative",
                          boxSizing: "border-box",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            maxWidth: "100%",
                          }}
                        >
                          
                        </div>
                        
                        <noscript />
                      </div>
                    </div>
                    <span className="ml-2 whitespace-nowrap text-lg">Home</span>
                  </div>
                </Link>
              </div>
              <div className="hidden sm:flex sm:-my-px">
                <Link
                  className="inline-flex items-center ml-6 pt-1 px-1 text-sm font-medium leading-5 border-b-2 transition duration-150 ease-in-out border-blue-500 text-gray-900 focus:outline-none focus:border-blue-700"
                  to="/"
                >
                  Token Generator
                </Link>
              </div>
            </div>
            <div className="flex sm:flex sm:items-center sm:ml-6">
              <div className="flex">
                <span className="flex justify-center items-center">
                  <div className="relative inline-block text-right">
                    <div>
                      
                    </div>
                  </div>
                  <span>
                    <div className="flex items-center rounded bg-dark-900 hover:bg-dark-800  whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto">
                      <div className="grid items-center grid-flow-col md:px-3 py-2 md:space-x-2 text-sm rounded-lg pointer-events-auto auto-cols-max bg-dark-1000 text-secondary">
                        <div className="whitespace-nowrap  cursor-pointer focus:shadow-outline-blue inline-flex items-center justify-center px-3 py-2 w-full text-blue-700 text-sm font-medium leading-4 bg-blue-100 active:bg-blue-200 hover:bg-blue-50 border focus:border-blue-300 border-transparent rounded-md focus:outline-none transition duration-150 ease-in-out">
                          Choose a Network
                        </div>
                      </div>
                    </div>
                  </span>
                  <span>
                    <button
                      className="connect_button mt-0"
                      type="button"
                      id="btn-connect"
                      color="white"
                    >
                      <span className=" whitespace-nowrap  cursor-pointer focus:shadow-outline-blue inline-flex items-center justify-center px-3 py-2 w-full text-blue-700 text-sm font-medium leading-4 bg-blue-100 active:bg-blue-200 hover:bg-blue-50 border focus:border-blue-300 border-transparent rounded-md focus:outline-none transition duration-150 ease-in-out">
                        Wallet Connect
                      </span>
                    </button>
                  </span>
                </span>
              </div>
            </div>
            <div className="flex items-center -mr-2 sm:hidden">
              
            </div>
          </div>
          <div className="block transition-all duration-300 overflow-hidden max-h-0 false sm:hidden">
            <div className="pb-3 pt-2">
              <div className>
                <Link
                  className="block mt-1 pl-3 pr-4 py-2 text-base font-medium border-l-4 transition duration-150 ease-in-out border-blue-500 text-blue-700 bg-blue-50 focus:outline-none focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700"
                  to="/"
                >
                  Token Generator
                </Link>
              </div>
              <div className="flex justify-center items-center ">
                
              </div>
            </div>
          </div>
        </div>
      </nav>  
    </>
  )
}

export default Header