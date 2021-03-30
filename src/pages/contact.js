import React, { useState } from "react";
import Select from "react-select";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import DatoBlocks from "../components/dato-blocks";

const options = [
  { value: "vivo-connect", label: "VivoConnect" },
  { value: "vivo-inovate", label: "VivoInovate" },
  { value: "vivo-studios", label: "VivoStudios" },
  { value: "vivo-tech", label: "VivoTech" },
  { value: "vivo-ventures", label: "VivoVentures" },
];
const response = [
  { value: "woo-hoo", label: "WooHoo!" },
  { value: "thanks", label: "Thanks!" },
  {
    value: "looking-forward",
    label: "I’m looking forward to hearing from you",
  },
];

const Contact = ({ data }) => {
  console.log(data);
  const [department, setDepartment] = useState("");
  const [thanks, setThanks] = useState("");
  const blocks = data.datoCmsContact.blocks;

  const handleDepartment = (e) => {
    setDepartment(e.value);
  };
  const handleResponse = (e) => {
    setThanks(e.value);
  };

  return (
    <Layout>
      <DatoBlocks blocks={blocks} />
      <section className="contact">
        <div className="content-container">
          <div className="form">
            <form method="post" action="https://rake.red/api/vivo-contact/vivo">
              <h2 className="title">Hi, there!</h2>
              <div className="select">
                <label htmlFor="department">
                  <span>I’m contacting you about</span>
                </label>
                <Select
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
              <div className="select">
                <label htmlFor="response">
                  <span>One last thing</span>
                </label>
                <Select
                  options={response}
                  onChange={(e) => handleResponse(e)}
                />
                <input name="response" type="text" hidden value={thanks} />
              </div>
              <button type="submit">Lets Go!</button>
            </form>
          </div>
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
