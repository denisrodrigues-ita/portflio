import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ value }) => {
  return (
    <VisibilitySensor>
      {({ isVisible }) => {
        const percentage = isVisible ? value : 0;
        return (
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
        );
      }}
    </VisibilitySensor>
  );
};

export default CircularProgressBar;
