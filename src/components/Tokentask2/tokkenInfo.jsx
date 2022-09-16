import React from "react";

function Working() {
  return (
    <>
      <div>
        <div className="max-w-3xl mx-auto bg-white overflow-hidden shadow rounded-xl overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <div>
              <br />
              <h3
                className="text-gray-900 text-lg font-medium leading-6"
                style={{ position: "absolute", left: "320px" }}
              >
                Token Supply
              </h3>
              <br />
              <p
                className="text-gray-500 text-sm"
                style={{ position: "absolute", left: "320px" }}
              >
                Let's set the supply options for your token.
              </p>
              <br />
            </div>

            <div className="flex justify-center align-middle" />
          </div>
          <div className="p-4">
            <div className="grid gap-4 grid-cols-1">
              <div className="flex justify-between">
                <div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <div></div>
                <div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                      name="mintingBurning"
                      type="checkbox"
                      id="checked-toggle"
                      className="sr-only peer"
                      defaultValue
                    />

                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <div></div>
                <div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                  </label>
                </div>
              </div>
              <div className="flex justify-between border border-gray-100" />
              <div className="flex justify-between">
                <div></div>
                <div>
                  <label className="inline-flex relative items-center cursor-pointer"></label>
                </div>
              </div>
              <div className="flex justify-between">
                <div></div>
                <div>
                  <label className="inline-flex relative items-center cursor-pointer"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Working;
