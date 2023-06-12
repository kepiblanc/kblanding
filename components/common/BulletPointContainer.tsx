import React, { FC } from "react";
import BulletPoint from "./BulletPoint";

interface Props {
  points?: string[];
  className?: string;
}

const BulletPointContainer: FC<Props> = ({ points }) => {
  return (
    <div className="flex flex-col gap-2">
      {points?.map((point, idx) => (
        <BulletPoint content={point} key={idx} />
      ))}
    </div>
  );
};

export default BulletPointContainer;
