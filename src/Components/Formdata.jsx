import React from "react";
import { useFormik } from "formik";
import "./Form.css";

const Formdata = () => {
  const initialValues = {
    business_name: "",
    business_pan: "",
    business_age: "",
    business_gst: "",
    business_category: "",
    Business_Constitution: "",

    confirm: false,
  };

  const onSubmit = (values) => {
    console.log(values);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  // const { values, handleSubmit } = formik; insted of this destructuring , i wrote below only

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Business Data
      </h2>

      <form onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="business_name">Business Name:</label>
            <input
              type="text"
              id="business_name"
              name="business_name"
              placeholder="Ram pvt ltd"
              value={formik.values.business_name}
              onChange={formik.handleChange}
              required
            />
          </div>

          <div className="form-group box">
            <label htmlFor="business_pan">Business PAN:</label>
            <input
              type="text"
              id="business_pan"
              name="business_pan"
              placeholder="OLCPS14554"
              value={formik.values.business_pan}
              onChange={formik.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="business_age">Business Age:</label>
            <input
              type="text"
              id="business_age"
              name="business_age"
              placeholder="0-1 year"
              value={formik.values.business_age}
              onChange={formik.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="business_gst">Business GST:</label>
            <input
              type="text"
              id="business_gst"
              name="business_gst"
              placeholder="2354355HGRE"
              value={formik.values.business_gst}
              onChange={formik.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="business_category">Business Category:</label>
            <input
              type="text"
              id="business_category"
              name="business_category"
              placeholder="Automobiles"
              value={formik.values.business_category}
              onChange={formik.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Business_Constitution">
              Business Constitution:
            </label>
            <input
              type="text"
              id="Business_Constitution"
              name="Business_Constitution"
              placeholder="P- Individual/Sole Proprietor"
              value={formik.values.Business_Constitution}
              onChange={formik.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="CIN_LLPIN">CIN / LLPIN:</label>
            <input
              type="number"
              id="CIN_LLPIN"
              name="CIN_LLPIN"
              placeholder="34543433"
              value={formik.values.CIN_LLPIN}
              onChange={formik.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Business_Address">Business Address:</label>
            <input
              type="text"
              id="Business_Address"
              name="Business_Address"
              placeholder="JP nagar 2nd phase"
              value={formik.values.Business_Address}
              onChange={formik.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Date_Of_Incorporation">
              Date Of Incorporation:
            </label>
            <input
              type="date"
              id="Date_Of_Incorporation"
              name="Date_Of_Incorporation"
              placeholder="12/08/2003"
              value={formik.values.Date_Of_Incorporation}
              onChange={formik.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Pincode">Pincode:</label>
            <input
              type="number"
              id="Pincode"
              name="Pincode"
              placeholder="560078"
              value={formik.values.Pincode}
              onChange={formik.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Business_Turnover">Business Turnover:</label>
            <input
              type="text"
              id="Business_Turnover"
              name="Business_Turnover"
              placeholder="0-10 lacs"
              value={formik.values.Business_Turnover}
              onChange={formik.handleChange}
              required
            />
          </div>
        </div>

        <div className="form-checkbox">
          <input
            type="checkbox"
            id="confirm"
            name="confirm"
            checked={formik.values.confirm}
            onChange={formik.handleChange}
            required
          />
          <label htmlFor="confirm">
            {" "}
            <span>
              By clicking on "Confirm", I agree to Kredmani{" "}
              <span>
                <a href="#" style={{ color: "#5d3587" }}>
                  Privacy Policy
                </a>
              </span>
              , (including the ‘purpose’ of collection of my information); and
              T&C (collectively the “Terms”). Subject to applicable laws, I also
              give my consent (and consent on behalf of any persons).
            </span>
          </label>
        </div>

        <div className="form-group">
          <button type="button" id="bd-Previous">
            Previous
          </button>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default Formdata;
