import React, { FC } from "react";
import DiagonalShape from "@/components/icons/DiagonalShape";

interface Props {
  title: string;
  isLastChild: boolean;
}

const RiderDriverBullet: FC<Props> = ({ title, isLastChild }) => {
  return (
    <div className="flex  w-full h-[60px] ">
      <div
        className={`relative h-full border-dashed border-l border-[#FFBF00] w-[20px] ${
          isLastChild ? "border-none" : ""
        }`}
      >
        <span className="absolute left-0 -translate-x-1/2">
          <DiagonalShape />
        </span>
      </div>
      <div>
        <p className="text-xs font-bold pt-[3px]">{title}</p>
      </div>
    </div>
  );
};

export default RiderDriverBullet;
