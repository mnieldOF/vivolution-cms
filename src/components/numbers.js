import * as React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Numbers = ({ data }) => {
  return (
    <motion.div className="numbers">
      <div className="content-container column">
        <div className="grid">
          {data.map((item, i) => {
            console.log("here", item);
            return (
              <div className="item">
                <CountUp
                  end={item.number}
                  redraw={true}
                  duration={1}
                  prefix={item.prefix ? item.prefix : ""}
                  suffix={item.suffix ? item.suffix : ""}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span className="number" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className="text">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Numbers;
