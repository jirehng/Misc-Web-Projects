import React from "react";

export default function Education(props) {
  return (
    <>
      <h2>Practical Experience</h2>
      <label htmlFor="companyName">Company Name</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        value={props.formData.companyName}
        onChange={props.handleChange}
      />

      <label htmlFor="positionTitle">Position Title</label>
      <input
        type="text"
        id="positionTitle"
        name="positionTitle"
        value={props.formData.positionTitle}
        onChange={props.handleChange}
      />

      <label htmlFor="responsibilities">Main Responsibilities</label>
      <input
        type="text"
        id="responsibilities"
        name="responsibilities"
        value={props.formData.resonsibilities}
        onChange={props.handleChange}
      />

      <label htmlFor="workBegin">First day of work</label>
      <input
        type="date"
        id="workBegin"
        name="workBegin"
        value={props.formData.workBegin}
        onChange={props.handleChange}
      />

      <label htmlFor="workEnd">Last day of work</label>
      <input
        type="date"
        id="workEnd"
        name="workEnd"
        value={props.formData.workEnd}
        onChange={props.handleChange}
      />
    </>
  );
}
