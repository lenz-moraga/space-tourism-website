import React from "react";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <span
      className={`${className} logo-container`}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 2 Copy">
          <circle id="Oval" cx="20" cy="20" r="20" fill="white" />
          <path
            id="Path"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 0C20 0 20 20 0 20C19.648 20.1428 20 40 20 40C20 40 20 20 39.9999 20C20 20 20 0 20 0Z"
            fill="#0B0D17"
          />
        </g>
      </svg>
    </span>
  );
};

export default Logo;
