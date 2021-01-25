/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { EXPRESS_API } from "../../constants";
import "./register.css";

const Register = () => (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      country: "",
      termsOfService: false,
    }}
    validationSchema={Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must have at least 8 characters")
        .required("Required"),
      country: Yup.string()
        .oneOf(["LV", "LT", "EE", "SE"])
        .required("Required"),
      termsOfService: Yup.boolean().oneOf(
        [true],
        "You must agree to the Terms and conditions"
      ),
    })}
    onSubmit={async (values, { setSubmitting }) => {
      await axios({
        method: "post",
        url: `${EXPRESS_API}/addForm`,
        data: values,
      });
      setSubmitting(false);
    }}
  >
    <div>
      <h3>Become a member of the Dune club!</h3>

      <Form id="form-id">
        <div id="form-wrapper">
          <div>
            <label htmlFor="firstName" className="reg-label-parent">
              First Name:
            </label>
            <Field name="firstName" type="text" className="reg-field" />
            <ErrorMessage name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName" className="reg-label-parent">
              Last Name:
            </label>
            <Field name="lastName" type="text" className="reg-field" />
            <ErrorMessage name="lastName" />
          </div>
          <div>
            <label htmlFor="email" className="reg-label-parent">
              Email Address:
            </label>
            <Field name="email" type="email" className="reg-field" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="password" className="reg-label-parent">
              Password:
            </label>
            <Field name="password" type="password" className="reg-field" />
            <ErrorMessage name="password" />
          </div>
          <div>
            <label htmlFor="country" className="reg-label-parent">
              Country:
            </label>
            <Field
              name="country"
              as="select"
              type="dropdownlist"
              className="reg-field"
              id="country-input"
              data={["LV", "LT", "EE", "SE"]}
            >
              <option value="">---</option>
              <option value="LV">Latvia</option>
              <option value="LT">Lithuania</option>
              <option value="EE">Estonia</option>
              <option value="SE">Sweden</option>
            </Field>
            <ErrorMessage name="country" />
          </div>
          <div>
            <Field
              name="termsOfService"
              type="checkbox"
              className="reg-field"
            />
            <label htmlFor="termsOfService" id="termsOfService">
              Agree to Terms and Conditions
            </label>
            <ErrorMessage name="termsOfService" />
          </div>
          <button type="submit" id="reg-button">
            Register
          </button>
        </div>
      </Form>
    </div>
  </Formik>
);

export default Register;
