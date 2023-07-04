import Card from "@/components/common/Card";
import React, { FC } from "react";

import CoreStrengthItem from "./CoreStrengthItem";

interface Props {
  data: { title: string; body: string }[];
  title: string;
}

const CoreStrengthContainer: FC<Props> = ({ data, title }) => {
  return (
    <div className="px-8">
      <Card bg="#FDE5F0" margin="20px 0">
        <div className="px-4">
          <p className="text-center text-3xl font-bold mb-12">{title}</p>
          <div className="grid grid-cols-3 gap-24 max-lg:grid-cols-2 max-md:grid-cols-1">
            {data.map((item, idx) => {
              return <CoreStrengthItem {...item} key={idx} />;
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CoreStrengthContainer;
