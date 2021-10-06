import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import DatoBlocks from "../components/dato-blocks";
import { useFormik } from "formik";
import * as Yup from "yup";
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

const validationSchema = Yup.object().shape({
  sector: Yup.array()
    .min(1, "Select at least 1 option")
    .of(
      Yup.object()
        .shape({ label: Yup.string(), value: Yup.string() })
        .nullable()
    )
    .nullable(),
  name: Yup.string().required("Please enter your name"),
  linkedin: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  help: Yup.string().required("Required"),
});

const Contact = ({ data }) => {
  const {
    handleSubmit,
    setFieldValue,
    handleChange,
    values,
    errors,
  } = useFormik({
    initialValues: {
      name: "",
      department: [],
      sector: [],
      email: "",
      subject: "",
      website: "",
      linkedin: "",
      help: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const blocks = data.datoCmsContact.blocks;

  const handleDepartment = (e) => {
    let selection = "";
    e.map((e) => {
      selection += e.label + ", ";
    });

    selection = selection.replace(/,(\s+)?$/, "");

    setFieldValue("department", selection);
  };

  const handleSector = (e) => {
    let selection = "";
    e.map((e) => {
      selection += e.label + ", ";
    });

    selection = selection.replace(/,(\s+)?$/, "");

    setFieldValue("sector", selection);
  };

  return (
    <Layout>
      <DatoBlocks blocks={blocks} />
      <section className="contact">
        <div className="content-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="inner">
              <div className="form-field">
                <CustomSelect
                  isMulti
                  options={options}
                  id="department"
                  label={
                    "Which Vivolution services do you want to know more about?"
                  }
                  value={values.department}
                  onChange={(value) => {
                    handleDepartment(value);
                  }}
                />
              </div>
              <div className="form-field">
                <CustomSelect
                  isMulti
                  options={sectors}
                  id="sector"
                  label={"What Sector are you from?"}
                  value={values.sector}
                  onChange={(value) => {
                    handleSector(value);
                  }}
                />
                {errors.sector ? <span>{errors.sector}</span> : null}
              </div>
              <h3>Please tell us more about yourself and your organisation:</h3>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Your name"
                />
                {errors.name ? <span>{errors.name}</span> : null}
              </div>
              <div className="form-field">
                <label htmlFor="email">You can reply to me at</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Your email address"
                />
                {errors.email ? <span>{errors.email}</span> : null}
              </div>
              <div className="form-field">
                <label htmlFor="subject">
                  It would be great to have a chat about
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  onChange={handleChange}
                  value={values.subject}
                  placeholder="Let us know how we can help you"
                />
              </div>
              <div className="form-field">
                <label htmlFor="website">You can reply to me at</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  onChange={handleChange}
                  value={values.website}
                  placeholder="Add you company website here"
                />
              </div>
              <div className="form-field">
                <label htmlFor="linkedin">LinkedIn profile</label>
                <input
                  id="linkedin"
                  name="linkedin"
                  type="text"
                  onChange={handleChange}
                  value={values.linkedin}
                  placeholder="LinkedIn profile"
                />
                {errors.linkedin ? <span>{errors.linkedin}</span> : null}
              </div>
              <div className="form-field">
                <label htmlFor="help">How can we help?</label>
                <textarea
                  id="help"
                  name="help"
                  onChange={handleChange}
                  value={values.help}
                />
                {errors.help ? <span>{errors.help}</span> : null}
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  {
    datoCmsContact {
      blocks {
        background {
          gatsbyImageData
        }
        title
        model {
          name
        }
      }
    }
  }
`;
