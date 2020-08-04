import React from "react";
import { useFormik } from "formik";

function YouTubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });
  console.log("Here are the DATA::", formik.values);
  return (
    <div>
      <h1>Formik</h1>
      <form>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor='channel'>Channel</label>
        <input
          type='text'
          name='channel'
          id='channel'
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default YouTubeForm;
