import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const NewsletterForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Düzgün email formatı daxil edin").required("Email yazılmalıdır"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Göndərilən dəyərlər:", values);
      
      axios.post("https://northwind.vercel.app/api/categories", values)
        .then(response => {
          console.log("Uğurlu cavab:", response);
          formik.resetForm();
        })
        .catch(error => {
          console.error("Xəta baş verdi:", error);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ display: "flex", gap: "20px" }}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          {...formik.getFieldProps("email")}
          style={inputStyle}
        />
      </div>
      
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red", marginTop: "5px" }}>{formik.errors.email}</div>
      ) : null}

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
        <button
          type="submit"
          style={buttonStyle}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const inputStyle = {
  width: "100%",
  padding: "20px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#82ae46",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
};

export default NewsletterForm;
