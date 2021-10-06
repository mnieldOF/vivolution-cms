import React from "react";
import { useFormik } from "formik";
import CustomSelect from "../components/custom-select";

const options = [
  { value: "vivo-connect", label: "VivoConnect" },
  { value: "vivo-inovate", label: "VivoInovate" },
  { value: "vivo-studios", label: "VivoStudios" },
  { value: "vivo-tech", label: "VivoTech" },
  { value: "vivo-ventures", label: "VivoVentures" },
  { value: "vivo-global", label: "VivoGlobal" },
];

const sectors = [
  { value: "corporate", label: "Corporate" },
  { value: "academia", label: "Academia" },
  { value: "government", label: "Government" },
  { value: "start-up-scale-up", label: "Start-up / Scale-up" },
  { value: "0ther", label: "Other" },
];

const ContactNew = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      department: [],
      sector: [],
      subject: "",
      website: "",
      linkedin: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleDepartment = (e) => {
    let selection = "";
    e.map((e) => {
      selection += e.label + ", ";
    });

    selection = selection.replace(/,(\s+)?$/, "");

    formik.setFieldValue("department", selection);
  };

  const handleSector = (e) => {
    let selection = "";
    e.map((e) => {
      selection += e.label + ", ";
    });

    selection = selection.replace(/,(\s+)?$/, "");

    formik.setFieldValue("sector", selection);
  };

  return (
    <section className="contact-new">
      <form onSubmit={formik.handleSubmit}>
        <CustomSelect
          isMulti
          options={options}
          id="department"
          label={"Which Vivolution services do you want to know more about?"}
          value={formik.values.department}
          onChange={(value) => {
            handleDepartment(value);
          }}
        />
        <CustomSelect
          isMulti
          options={sectors}
          id="sector"
          label={"What Sector are you from?"}
          value={formik.values.department}
          onChange={(value) => {
            handleSector(value);
          }}
        />
        <label htmlFor="email">You can reply to me at</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="your email address"
        />
        <label htmlFor="subject">It would be great to have a chat about</label>
        <input
          id="subject"
          name="subject"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.subject}
          placeholder="let us know how we can help you"
        />
        <label htmlFor="website">You can reply to me at</label>
        <input
          id="website"
          name="website"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.website}
          placeholder="Add you company website here"
          required
        />
        <label htmlFor="linkedin">LinkedIn profile</label>
        <input
          id="linkedin"
          name="linkedin"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.linkedin}
          placeholder="LinkedIn profile"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactNew;
