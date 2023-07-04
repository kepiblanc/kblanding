import Card from "@/components/common/Card";
import React, { FC } from "react";

interface Props {
  bg: string;
  title: string;
  body: string;
}

const MissionVisionCard: FC<Props> = ({ bg, title, body }) => {
  return (
    <Card bg={bg}>
      <div className="px-4">
        <p className="text-center text-2xl font-bold mb-4">{title}</p>
        <p className="text-base leading-10 text-center">{body}</p>
      </div>
    </Card>
  );
};

export default MissionVisionCard;
