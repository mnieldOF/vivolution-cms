import React from "react";
import { graphql, navigate } from "gatsby";
import Layout from "../components/layout";
import DatoBlocks from "../components/dato-blocks";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomSelect from "../components/custom-select";
import MyTextInput from "../components/form/text-input";
import MyTextArea from "../components/form/teaxtarea";
import MapBlock from "../components/map-block";

const options = [
  { value: "vivo-connect", label: "VivoConnect" },
  { value: "vivo-innovate", label: "VivoInnovate" },
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
  { value: "other", label: "Other" },
];

const validationSchema = Yup.object().shape({
  sector: Yup.string().required("Please select an option"),
  name: Yup.string().required("Please enter your name"),
  linkedin: Yup.string().matches(
    /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/,
    "Enter valid Linkedin URL"
  ),
  email: Yup.string().email("Invalid email").required("Required"),
  help: Yup.string().required("Required"),
  website: Yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
});

const Contact = ({ data, location }) => {
  const blocks = data.datoCmsContact.blocks;

  const handleSubmit = async (values) => {
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
        navigate("/form-complete");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Layout location={location}>
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
                      label={"What sector are you from?"}
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
                      required
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
                    <span className="ex">
                      ex: https://www.vivolution.co.uk/
                    </span>
                  </div>
                  <div className="form-field">
                    <MyTextInput
                      label="LinkedIn profile"
                      name="linkedin"
                      type="url"
                      placeholder="LinkedIn Profile"
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
        <MapBlock info={data.datoCmsContact.contactInformation} />
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
      contactInformation {
        addressNode {
          childMarkdownRemark {
            html
          }
        }
        mapImage {
          gatsbyImageData
          title
        }
        title
      }
    }
  }
`;
