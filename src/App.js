import React from "react";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
// import YouTubeForm from "./components/YouTubeForm";
import { Styles } from "./components/Styles";
import "./App.css";

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");
  return (
    <>
      <label htmlFor='checkbox'>
        <input type='checkbox' {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

function App() {
  return (
    <Styles>
      <Formik
        initialValues={{
          name: "",
          email: "",
          acceptedTerms: false,
          specialPower: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(15, "Must not be more than 15 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email format")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and the conditions!"),

          specialPower: Yup.string()
            .oneOf(
              ["flight", "invisibility", "wealthy bad guy", "others"],
              "Invalid special power"
            )
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <Form>
            <h1>Sign up</h1>
            <CustomTextInput
              label='Name'
              name='name'
              type='text'
              placeholder='Adewale'
            />
            <CustomTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='Adewale@gmail.com'
            />
            <CustomSelect label='Special Power' name='specialPower'>
              <option value=''>Select a special power</option>
              <option value='flight'>Flight</option>
              <option value='invisibility'>Invisibility</option>
              <option value='wealthy bad guy'>Wealthy bad guy</option>
              <option value='other'>Other</option>
            </CustomSelect>
            <CustomCheckbox name='acceptedTerms'>
              I accept the terms and conditions
            </CustomCheckbox>
            <button type='submit'>
              {props.isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </Styles>
  );
}

export default App;
