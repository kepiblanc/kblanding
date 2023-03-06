import React, { FC } from "react";

const DiagonalShape:FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="15"
        y="0.859375"
        width="20"
        height="20"
        transform="rotate(45 15 0.859375)"
        fill="#FFBF00"
      />
    </svg>
  );
};

export default DiagonalShape;
