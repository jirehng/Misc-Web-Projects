import React from "react";

export default function General(props) {
  return (
    <>
      <h2>General Information</h2>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={props.formData.firstName}
        onChange={props.handleChange}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={props.formData.lastName}
        onChange={props.handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={props.formData.email}
        onChange={props.handleChange}
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={props.formData.phone}
        onChange={props.handleChange}
      />
    </>
  );
}
