import React from "react";

type Props = {
  className?: string;
  color?: string;
};

const IconHamburguer = ({ className, color = "#D0D6F9" }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="21"
    >
      <g fill={color} fillRule="evenodd">
        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
      </g>
    </svg>
  );
};

export default IconHamburguer;
