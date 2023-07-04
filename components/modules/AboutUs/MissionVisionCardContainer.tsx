import React, { FC } from "react";

import MissionVisionCard from "./MissionVisionCard";

interface Props {
  data: { bg: string; title: string; body: string }[];
}

const MissionVisionCardContainer: FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1 px-8 mt-[20px]">
      {data.map((item, idx) => {
        return <MissionVisionCard key={idx} {...item} />;
      })}
    </div>
  );
};

export default MissionVisionCardContainer;
