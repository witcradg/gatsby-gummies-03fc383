import React, { useState } from "react"
import { TermsCheckbox } from "./terms-checkbox"

export const AddToCart = ({ children, onChange, outOfStock }) => {
  const [numberOrdered, setNumberOrdered] = useState(1)

  function addOne(event) {
    const n = numberOrdered
    setNumberOrdered(n + 1)
    onChange(n + 1)
  }

  function subtractOne(event) {
    const n = numberOrdered
    const newValue = n === 1 ? 1 : n - 1
    setNumberOrdered(newValue)
    onChange(newValue)
  }

  return (
    <div>
      {outOfStock === "true" ? (
        <button className="btn btn-lg text-lg bg-black text-white w-full">
          SOLD OUT
        </button>
      ) : (
        <div>
          <div className="plus-minus-container">
            <div className="bg-gray-200 btn-lg plus-minus text-center">
              <button
                className="inline-block cursor-pointer"
                onClick={subtractOne}
              >
                -
              </button>
              <div className="inline-block w-1/2">{numberOrdered}</div>
              <button
                className="inline-block cursor-pointer text-lg"
                onClick={addOne}
              >
                +
              </button>
            </div>
            <div className="bg-black text-white text-lg atc-btn">
              {children}
            </div>
          </div>
          <TermsCheckbox />
        </div>
      )}
    </div>
  )
}
