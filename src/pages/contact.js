import React from "react";
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
  const blocks = data.datoCmsContact.blocks;
  return (
    <Layout>
      <DatoBlocks blocks={blocks} />
      <section className="contact">
        <div className="content-container">
          <div className="form">
            <form action="">
              <h2 className="title">Hi, there!</h2>
              <div className="select">
                <label htmlFor="">
                  <span>I’m contacting you about</span>
                </label>
                <Select options={options} />
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
              <label htmlFor="">
                <span>It would be great to have a chat about</span>
                <input
                  type="text"
                  placeholder="let us know how we can help you "
                />
              </label>
              <div className="select">
                <label htmlFor="">
                  <span>One last thing</span>
                </label>
                <Select options={response} />
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
