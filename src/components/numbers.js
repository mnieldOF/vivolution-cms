import * as React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Numbers = () => {
  return (
    <motion.div className="numbers">
      <div className="content-container column">
        <CountUp end={100} redraw={true} duration={1} prefix="£" suffix="m">
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span className="number" ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
    </motion.div>
  );
};

export default Numbers;
