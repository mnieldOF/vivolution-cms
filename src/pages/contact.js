import React, { useState } from "react";
import Select from "react-select";
// import CreatableSelect from "react-select/creatable";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import DatoBlocks from "../components/dato-blocks";
import Button from '../components/atoms/buttons/default-button';
import FormField from "../components/atoms/forms/form-field";

// const who = [
//   { value: "corporates", label: "Corporates" },
//   { value: "academia", label: "Academia" },
//   { value: "vivo-studios", label: "Government" },
//   { value: "start-up-scale-up", label: "Start-up/Scale-up," },
//   { value: "other", label: "Other" },
// ];

const options = [
  { value: "vivo-connect", label: "VivoConnect" },
  { value: "vivo-inovate", label: "VivoInovate" },
  { value: "vivo-studios", label: "VivoStudios" },
  { value: "vivo-tech", label: "VivoTech" },
  { value: "vivo-ventures", label: "VivoVentures" },
  { value: "vivo-global", label: "VivoGlobal" },
];

// const response = [
//   { value: "woo-hoo", label: "WooHoo!" },
//   { value: "thanks", label: "Thanks!" },
//   {
//     value: "looking-forward",
//     label: "I’m looking forward to hearing from you",
//   },
// ];

const Contact = ({ data }) => {
  console.log(data);

  const isDisabled = false;

  const [department, setDepartment] = useState([]);
  // const [thanks, setThanks] = useState("");
  const blocks = data.datoCmsContact.blocks;

  const handleDepartment = (e) => {
    let selection = "";
    e.map((e) => {
      console.log("here", e);
      selection += e.label + ", ";
    });

    selection = selection.replace(/,(\s+)?$/, "");

    setDepartment(selection);
  };
  // const handleResponse = (e) => {
  //   setThanks(e.value);
  // };

  console.log(department);

  return (
    <Layout>
      <DatoBlocks blocks={blocks} />
      <section className="contact">
        <div className="content-container">
          <form className="form" method="post" action="https://rake.red/api/vivo-contact/vivo">
            <h2 className="title">Hi, there!</h2>
            <div className="select">
              <label htmlFor="department">
                <span>Which Vivolution services do you want to know more about?</span>
              </label>
              <Select
                isMulti
                options={options}
                onChange={(e) => handleDepartment(e)}
              />
              <input
                name="department"
                type="text"
                hidden
                value={department}
              />
            </div>
            <FormField 
              key={'email'} 
              label={'You can reply to me at'}
              required={true}
              type={'text'}
              placeholder={'your email address'}
              disabled={false}
            >
            </FormField>
            <FormField 
              key={'subject'} 
              label={'It would be great to have a chat about'}
              required={false}
              type={'text'}
              placeholder={'let us know how we can help you'}
              disabled={false}
            >
            </FormField>
            <FormField 
              key={'company-website'} 
              label={'Company website'}
              required={false}
              type={'text'}
              placeholder={'Add you company website here'}
              disabled={false}
            >
            </FormField>
            <FormField 
              key={'linkedin'} 
              label={'LinkedIn profile'}
              required={false}
              type={'text'}
              placeholder={'LinkedIn profile'}
              disabled={false}
            >
            </FormField>
            <Button type={'submit'} buttonStyle={'default'} disabled={isDisabled}>Let&apos;s go</Button>
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
