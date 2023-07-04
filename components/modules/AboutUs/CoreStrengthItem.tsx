import React, { FC } from "react";

import RocketIcon from "@/components/icons/RocketIcon";

interface Props {
  title: string;
  body: string;
}

const CoreStrengthItem: FC<Props> = ({ title, body }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 text-center">
      <div className="w-[75px] h-[75px] rounded-full bg-[#CC3379] flex justify-center items-center">
        <RocketIcon />
      </div>

      <p className="text-xl font-bold">{title}</p>

      <p className="text-base font-medium leading-10">{body}</p>
    </div>
  );
};

export default CoreStrengthItem;
