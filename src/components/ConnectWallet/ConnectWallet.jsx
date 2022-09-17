import React from "react";
import TokkenModal from "../TokkenModal/TokkenModal";

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
                    <TokkenModal/>
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
