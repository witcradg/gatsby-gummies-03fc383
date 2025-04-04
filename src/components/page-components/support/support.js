import React from "react"
import { SupportRadioButtons } from "./support-radio-buttons"

//Based on https://formsubmit.co/live-demo

export const Support = () => {
  return (
    <div className="text-white font-sans w-[90%] m-auto">
      <div className="xl:mt-32">
        <div className="lg:flex lg:items-center">
          <div className="w-full md:m-auto">
            <div className="text-center lg:text-xl">
              <h1 className="mt-2 text-lg">REQUEST SUPPORT</h1>
              <p className="my-2 font-normal text-xs text-black md:text-sm xl:text-base m-auto">
                We appreciate your patience while our customer support team
                reviews your inquiry.
              </p>
            </div>
            <form
              target="_blank"
              action="https://formsubmit.co/33219e88aa8363e622aa350c9c6d8365"
              method="POST"
            >
              <input type="hidden" name="_url" value="https://delta8gummies.com/support/" />
              <div className="text-black flex flex-col lg:flex-row justify-center md:m-auto">
                <input
                  type="text"
                  name="name"
                  className="form-control h-10"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  className="form-control h-10"
                  placeholder="Email Address"
                  required
                />

                <input
                  type="phone"
                  name="phone"
                  className="form-control h-10"
                  placeholder="Phone number"
                  required
                />

                <input
                  type="text"
                  name="order"
                  className="form-control h-10"
                  placeholder="Order number"
                  required
                />
              </div>
              <SupportRadioButtons />
              <div className="text-black flex justify-center mb-2">
                <textarea
                  placeholder="Please describe the issue in some detail."
                  className="form-control lg:w-[80%]"
                  name="message"
                  rows="4"
                  cols="78"
                  required
                ></textarea>
              </div>

              <div className="mb-8 text-center">
                <button
                    type="submit"
                    className="submit-button text-center btn btn-info text-white">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
