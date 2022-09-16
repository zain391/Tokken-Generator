import React from "react";

function ConnectWallet() {
  return (
    <>
      <div>
        <div className="max-w-3xl mx-auto bg-white overflow-hidden shadow rounded-xl overflow-hidden">
          <div className="p-2 ">
            <div className="flex justify-center">
              <div className="iekbcc0 ju367va ju367v1n">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectWallet;
