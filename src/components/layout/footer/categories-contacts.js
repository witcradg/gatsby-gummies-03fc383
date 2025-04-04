import React from "react"
import { Link } from 'gatsby';

export const CategoriesContacts = () => {
  return (
    <div>
      <div>
        <p>
          <Link to='/support/' className="inline-block font-bold" style={{ color: "#179fc0" }}>
            Request Support
          </Link>
        </p>
      </div>
      <div>
        <p className="inline-block font-bold" style={{ color: "#179fc0" }}>
          Address:
        </p>
        <span className="color9999a0 inline-block pl-2"> 651 N Broad St </span>
        <span className="color9999a0 inline-block pl-2">Middletown, Deleware 19709</span>
      </div>
      <div>
        <p className="inline-block font-bold" style={{ color: "#179fc0" }}>
          Hours:
        </p>
        <span className="color9999a0 inline-block"> M-F 11 am to 4pm</span>
      </div>
      <div>
        <p className="inline-block font-bold" style={{ color: "#179fc0" }}>
          Phone:
        </p>
        <span className="color9999a0 inline-block">833-358-2899</span>
      </div>
      <div>
        <p className="inline-block font-bold" style={{ color: "#179fc0" }}>
          Email:
        </p>
        <span className="color9999a0 inline-block">support@delta8gummies.com</span>
      </div>
    </div>
  )
}
