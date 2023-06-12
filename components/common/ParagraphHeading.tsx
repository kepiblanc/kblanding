import React, { FC } from "react";

interface Props {
  className?: string;
  content?: string;
}

const ParagraphHeading: FC<Props> = ({ className, content }) => {
  return <p className={`text-lg font-bold pl-[5px] ${className}`}>{content}</p>;
};

export default ParagraphHeading;
