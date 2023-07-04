import React, { FC } from "react";

import Card from "@/components/common/Card";

const Intro: FC = () => {
  return (
    <div className="px-8 mt-[20px]">
      <Card bg="#FFF5D8">
        <div className="px-4">
          <p className="leading-10 text-base text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            minima perferendis nesciunt explicabo, laboriosam debitis
            accusantium excepturi dolore libero facilis voluptatibus eveniet
            error architecto repellat obcaecati quos impedit, iste, itaque
            delectus accusamus cum minus! Nobis, rem libero voluptatum eaque
            facilis natus quia sint voluptate, possimus suscipit optio nam
            inventore veritatis dolores ipsam illo. Nesciunt commodi a
            praesentium incidunt voluptate sequi, iusto distinctio velit cumque
            nihil temporibus aliquam cum, quos provident?
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Intro;
