import React from 'react';

export default function CV(props) {
  const form = props.formData
  return (
    <>
      <h2>General Information</h2>
      <p>Name: {form.firstName} {form.lastName}</p>
      <p>Email: {form.email}</p>
      <p>Phone Number: {form.phone}</p>

      <h2>Educational Experience</h2>
      <p>School Name: {form.schoolName}</p>
      <p>Title of Study: {form.studyTitle}</p>
      <p>Date of Study: {form.studyDate}</p>

      <h2>Practical Experience</h2>
      <p>Company Name: {form.companyName}</p>
      <p>Position Title: {form.positionTitle}</p>
      <p>Main Responsibilities: {form.responsibilities}</p>
      <p>First Day of Work: {form.workBegin}</p>
      <p>Last Day of Work: {form.workEnd}</p>
    </>
  )
}