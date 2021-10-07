import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import DatoBlocks from "../components/dato-blocks";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomSelect from "../components/custom-select";
import MyTextInput from "../components/form/text-input";
import MyTextArea from "../components/form/teaxtarea";

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
  sector: Yup.string().required("Please select an option"),
  name: Yup.string().required("Please enter your name"),
  linkedin: Yup.string().url("Invalid Linkedin URL").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  help: Yup.string().required("Required"),
  website: Yup.string().url("Invalid URL"),
});

const Contact = ({ data }) => {
  const blocks = data.datoCmsContact.blocks;

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const res = await fetch("https://rake.red/api/vivo-contact/vivo", {
        method: "POST",
        body: JSON.stringify({
          ...values,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        // const { errorCode } = await res.json();
        // if (errorCode === 1) {
        //   navigate("/");
        // }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Layout>
      <DatoBlocks blocks={blocks} />
      <section className="contact">
        <div className="content-container">
          <Formik
            initialValues={{
              name: "",
              department: "",
              sector: "",
              email: "",
              website: "",
              linkedin: "",
              help: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({
              setFieldValue,
              values,
              touched,
              setFieldTouched,
              errors,
              isSubmitting,
              dirty,
              isValid,
            }) => (
              <Form className="form">
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
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      touched={touched.department}
                    />
                  </div>
                  <div className="form-field">
                    <CustomSelect
                      isMulti
                      options={sectors}
                      id="sector"
                      label={"What Sector are you from?"}
                      value={values.sector}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      error={errors.sector}
                      touched={touched.sector}
                      required
                    />
                  </div>
                  <h3>
                    Please tell us more about yourself and your organisation:
                  </h3>
                  <div className="form-field">
                    <MyTextInput
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-field">
                    <MyTextInput
                      label="You can reply to me at"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <MyTextInput
                      label="Company website"
                      name="website"
                      type="url"
                      placeholder="Add you company website here"
                    />
                  </div>
                  <div className="form-field">
                    <MyTextInput
                      label="LinkedIn Profile"
                      name="linkedin"
                      type="url"
                      placeholder="LinkedIn Profile"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <MyTextArea label="How can we help?" name="help" required />
                  </div>
                  <button
                    type="submit"
                    disabled={!dirty || isSubmitting || !isValid}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
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
