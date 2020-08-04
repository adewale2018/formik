import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
};

const onSubmit = (values) => {
  console.log("**VALUES**", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!!!"),
  email: Yup.string().email("Invalid email format ooo").required("Required!!!"),
  channel: Yup.string().required("Required!!!"),
  comments: Yup.string().required("Required!!!"),
});

function YouTubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
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
            {errorMsg => <div className='error'>{errorMsg}</div>}
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
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default YouTubeForm;
