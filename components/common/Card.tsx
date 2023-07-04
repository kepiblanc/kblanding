import React, { FC, PropsWithChildren } from "react";

interface Props {
  maxWidth?: string;
  maxHeight?: string;
  height?: string;
  elevation?: boolean;
  bg?: string;
  margin?: string
  padding?: string
}

const Card: FC<PropsWithChildren<Props>> = ({
  maxWidth = "",
  maxHeight = "",
  height = "",
  bg = "",
  margin = "",
  padding = "1rem",
  elevation,
  children,
}) => {
  return (
    <div
      className={`bg-[#FFFFFF] rounded-lg w-full ${
        elevation ? "shadow-md" : ""
      } ${maxHeight ? "overflow-y-auto scrollbar-none" : ""}`}
      style={{ maxWidth, height, maxHeight, backgroundColor: bg, margin, padding }}
    >
      {children}
    </div>
  );
};

export default Card;
