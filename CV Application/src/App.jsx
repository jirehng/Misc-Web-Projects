import React from "react";
import "./App.css";
import Education from "./Components/Education";
import General from "./Components/General";
import Work from "./Components/Work";
import CV from "./Components/CV";

export default function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    schoolName: "",
    studyTitle: "",
    studyDate: "",
    companyName: "",
    positionTitle: "",
    resonsibilities: "",
    workBegin: "",
    workEnd: "",
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  const [form, setForm] = React.useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setForm(prevForm => !prevForm);
  }

  function edit() {
    setForm(prevForm => !prevForm)
  }

  if (form) {
    return (
      <>
        <h1>CV Generator</h1>
        <form onSubmit={handleSubmit}>
          <General handleChange={handleChange} formData={formData} />
          <Education handleChange={handleChange} formData={formData} />
          <Work handleChange={handleChange} formData={formData} />
          <button>Submit</button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <CV formData={formData} />
        <button onClick={edit}>Edit</button>
      </>
    );
  }
}
