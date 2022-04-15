import React from "react";

const IconArrow = (props) => {
  return (
    <svg
      width={24}
      height={24}
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 10"
      {...props}
    >
      <path
        d="M1 9L5 5L1 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconArrow;
