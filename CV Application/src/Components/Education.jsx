import React from "react";

export default function Education(props) {
  return (
    <>
      <h2>Educational Experience</h2>
      <label htmlFor="schoolName">School Name</label>
      <input
        type="text"
        id="schoolName"
        name="schoolName"
        value={props.formData.schoolName}
        onChange={props.handleChange}
      />

      <label htmlFor="studyTitle">Title of Study</label>
      <input
        type="text"
        id="studyTitle"
        name="studyTitle"
        value={props.formData.studyTitle}
        onChange={props.handleChange}
      />

      <label htmlFor="studyDate">Date of Study</label>
      <input
        type="date"
        id="studyDate"
        name="studyDate"
        value={props.formData.studyDate}
        onChange={props.handleChange}
      />
    </>
  );
}
