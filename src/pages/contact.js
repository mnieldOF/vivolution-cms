import React, { useState } from "react";
import Select from "react-select";
// import CreatableSelect from "react-select/creatable";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import DatoBlocks from "../components/dato-blocks";
import Button from '../components/atoms/buttons/default-button';

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
            <label htmlFor="email">
              <span>You can reply to me at</span>
              <input
                name="email"
                type="email"
                placeholder="your email address"
                required
              />
            </label>
            <label htmlFor="subject">
              <span>It would be great to have a chat about</span>
              <input
                name="subject"
                type="text"
                placeholder="let us know how we can help you "
              />
            </label>
            <label htmlFor="company-website">
              <span>Company website</span>
              <input
                name="company-website"
                type="text"
                placeholder="Add you company website here"
              />
            </label>
            <label htmlFor="linkedin">
              <span>Linkedin profile</span>
              <input
                name="linkedin"
                type="text"
                placeholder="Linkedin profile"
                required
              />
            </label>
            {/* <button type="submit">Lets Go!</button> */}
            <Button>Let's Go!</Button>
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
