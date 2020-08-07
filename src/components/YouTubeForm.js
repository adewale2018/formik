import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "Saheed",
  email: "saheed@gmail.com",
  channel: "devpro",
  comments: "This channel is mad gan!!!",
  social: {
    facebook: "devpro@facebook",
    twitter: "devpro@twitter",
  },
  phoneNumbers: ["123", "456"],
  phNumbers: ["123456789"],
};

const onSubmit = (values) => {
  console.log("**VALUES**", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!!!"),
  email: Yup.string().email("Invalid email format ooo").required("Required!!!"),
  channel: Yup.string().required("Required!!!"),
  // comments: Yup.string().required("Required!!!"),
});

function YouTubeForm() {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={ formValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      enableReinitialize
      // validateOnMount
    >
      {(formik) => {
        console.log("FORMIK::", formik);
        return (
          <Form>
            <div className='form-control'>
              <label htmlFor='name'>Name</label>
              <Field type='text' name='name' id='name' />
              <ErrorMessage name='name' component={TextError} />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>Email</label>
              <Field type='email' name='email' id='email' />
              <ErrorMessage name='email'>
                {(errorMsg) => <div className='error'>{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className='form-control'>
              <label htmlFor='channel'>Channel</label>
              <Field type='text' name='channel' id='channel' />
              <ErrorMessage name='channel' />
            </div>
            <div className='form-control'>
              <label htmlFor='comments'>Comments</label>
              <Field name='comments' id='comments' as='textarea' />
              <ErrorMessage name='comments' />
            </div>
            <div className='form-control'>
              <label htmlFor='facebook'>Facebook profile</label>
              <Field type='text' id='facebook' name='social.facebook' />
            </div>
            <div className='form-control'>
              <label htmlFor='twitter'>Twitter profile</label>
              <Field type='text' id='twitter' name='social.twitter' />
            </div>
            <div className='form-control'>
              <label htmlFor='primaryPh'>Primary Phone Number</label>
              <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
            </div>
            <div className='form-control'>
              <label htmlFor='secondaryPh'>Secondary Phone Number</label>
              <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
            </div>
            <div className='form-control'>
              <label>List of phone numbers</label>
              <FieldArray name='phNumbers'>
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumber[${index}]`} />
                          {index > 0 && (
                            <button type='button' onClick={() => remove(index)}>
                              {" "}
                              -{" "}
                            </button>
                          )}

                          <button type='button' onClick={() => push("")}>
                            {" "}
                            +{" "}
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            {/* <button
              type='button'
              onClick={() => formik.validateField("comments")}
            >
              Validate comments
            </button>
            <button type='button' onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button
              type='button'
              onClick={() => formik.setFieldTouched("comments")}
            >
              Visit comments
            </button>
            <button
              type='button'
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              Visit fields
            </button> */}
            {/* <button type='button' disabled={!formik.isValid}>
              Submit
            </button> */}
            <button onClick={setFormValues(savedValues)}>Load Data</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YouTubeForm;
