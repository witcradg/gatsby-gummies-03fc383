import React from "react"

export const SupportRadioButtons = () => {
  return (
    <div>
      <div className="flex items-center my-2 mx-2">
        <label
          for="radio-1"
          className="text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <input
            id="radio-1"
            type="radio"
            value="Address Confirmation"
            name="radio"
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          Address Confirmation
        </label>
      </div>

      <div className="flex items-center my-2 mx-2">
        <label
          for="radio-2"
          className=" text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <input
            id="radio-2"
            type="radio"
            value="Missing or Incorrect Product Received"
            name="radio"
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          Missing or Incorrect Product Received
        </label>
      </div>

      <div className="flex items-center my-2 mx-2">
        <label
          for="radio-3"
          className=" text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <input
            id="radio-3"
            type="radio"
            value="Lost or Delayed Package in Transit"
            name="radio"
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          Lost or Delayed Package in Transit
        </label>
      </div>

      <div className="flex items-center my-2 mx-2">
        <label
          for="radio-4"
          className=" text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <input
            id="radio-4"
            type="radio"
            value="Damaged Product"
            name="radio"
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          Damaged Product
        </label>
      </div>

      <div className="flex items-center my-2 mx-2">
        <label
          for="radio-5"
          className=" text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <input
            id="radio-5"
            type="radio"
            value="CCPA Opt Out"
            name="radio"
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          CCPA Opt Out
        </label>
      </div>

      <div className="flex items-center my-2 mx-2">
        <label
          for="radio-6"
          className=" text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <input
            id="radio-6"
            type="radio"
            value="Cancel My Order"
            name="radio"
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          Cancel My Order
        </label>
      </div>

      <div className="flex items-center my-2 mx-2">
        <label
          for="radio-7"
          className=" text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <input
            id="radio-7"
            type="radio"
            value="Other"
            name="radio"
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          Other
        </label>
      </div>
    </div>
  )
}
