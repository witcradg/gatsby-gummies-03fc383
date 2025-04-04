import React from "react"
import { FollowUs } from "../../follow-us"

export const OrderTracking = () => {
  return (
    <React.Fragment>
      <div className="popular-product text-center mb-3">
        <h1>Order Tracking</h1>
        <p>Orders are shipped via UPS</p>
        <p>
          Please navigate to the
          <a href="https://delta8gummies.aftership.com/">
            Delta 8 Gummies Aftership
          </a>
          <a href="https://delta8gummies.aftership.com/">
            delta8gummies.aftership.com
          </a>
          and enter your tracking number.
        </p>

        <div id="as-root"></div>
        <div className="flex justify-center m-8">
          <div
            className="as-track-button m-8"
            data-size="medium"
            data-domain="delta8gummies.aftership.com"
            data-look-up-option="both"
            data-btn-label="Track"
          ></div>
        </div>
      </div>
      <FollowUs />
    </React.Fragment>
  )
}
