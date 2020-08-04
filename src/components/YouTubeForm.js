import React from "react";

function YouTubeForm() {
  return (
    <div>
    <h1>Formik</h1>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' />

        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />

        <label htmlFor='channel'>Channel</label>
        <input type='text' name='channel' id='channel' />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default YouTubeForm;
