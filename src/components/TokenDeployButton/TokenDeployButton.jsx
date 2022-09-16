import React from "react";

function TokenDeployButton({submit}) {
  return (
    <>
      <div>
        <div className="max-w-3xl mx-auto bg-white overflow-hidden shadow rounded-xl overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between align-middle">
              <div>
                <h3 className="text-gray-900 text-lg font-medium leading-6">
                  🚀 Ready to deploy?
                </h3>
                <p className="text-gray-500 text-sm" />
              </div>
              <div className="flex justify-center align-middle" />
            </div>
          </div>
          <div className="p-4">
            <div className="grid gap-4 grid-cols-2">
              <div className="flex flex-col col-span-2 justify-center text-center">
                <span className="text-red-500 font-bold">
                  Connect Metamask to show pricing.
                </span>
              </div>
              <div className="flex col-span-2">
                <div className="flex-grow flex-shrink-0">
                  <button
                  onSubmit={submit}
                  type="submit"
                    className="focus:shadow-outline-blue inline-flex items-center justify-center px-3 py-2 w-full text-blue-700 text-sm cursor-pointer font-medium leading-4 bg-blue-100 active:bg-blue-200 hover:bg-blue-50 border focus:border-blue-300 border-transparent rounded-md focus:outline-none transition duration-150 ease-in-out disabled:opacity-50"
                    aria-label="Login"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      className="mr-2 w-6 h-6"
                      height="1em"
                      width="1em"
                      // xmlns="http://www.w3.org/2000/svg"
                    >
                    </svg>
                    deploy token
                  </button>
                  <button
                    type="submit"
                    className="cursor-pointer disabled:opacity-70"
                  >
                    {" "}
                    Deploy Token
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TokenDeployButton;
