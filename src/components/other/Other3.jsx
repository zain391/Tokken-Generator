<div className="w-full md:mr-3  mt-2  ">
    <div className>
        <label
            htmlFor="vesting"
            className="block text-gray-700 text-sm font-medium"
        >
            Vesting
        </label>
        <div className="flex items-center">
            <div className="relative w-full">
                <Field
                    name={`utc.[${index}].vesting`}
                    type="number"
                    placeholder="Vesting"
                    className="text-black block mt-1 w-full focus:border-blue-500 border-gray-300 rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
                    defaultValue={0}
                />
                <p className="text-black font-bold  absolute left-12 top-[25%]">
                    %
                </p>
            </div>
            <button
                className="text-red-600 cursor-pointer ml-2"
                onClick={() =>
                    arrayHelpers.remove(
                        index
                    )
                }
            >
                🗑
            </button>
        </div>
    </div>
</div>