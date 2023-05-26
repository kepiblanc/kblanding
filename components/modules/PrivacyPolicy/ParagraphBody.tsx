import React, { FC } from "react";

interface Props {
  className?: string;
  content?: string;
}

const ParagraphBody: FC<Props> = ({ className, content }) => {
  return (
    <p className={`font-medium text-base leading-8 ${className}`}>
      {content}
    </p>
  );
};

export default ParagraphBody;
