import React, { FC } from "react";
import RiderDriverBullet from "./RiderDriverBullet";

interface Props {
  data: string[];
}

const RiderDriverBulletContainer: FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map((item, idx) => {
        return (
          <RiderDriverBullet
            title={item}
            isLastChild={idx === data.length - 1}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default RiderDriverBulletContainer;
