import React, { useRef } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { useInView } from "react-intersection-observer";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ value }) => {
  const { ref, inView } = useInView();
  const percentage = inView ? value : 0;

  return (
    <div ref={ref}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          path: {
            stroke: "#0d6efd",
            transition: "stroke-dashoffset 2s ease 0s",
          },
          text: {
            fill: "#000",
          },
        }}
      />
    </div>
  );
};

export default CircularProgressBar;

