import Card from "@/components/common/Card";
import Image from "next/image";
import React, { FC } from "react";

const WhyKabukabu: FC = () => {
  return (
    <div className="px-8 mt-[20px]">
      <Card bg="#FFF1FE" padding="0">
        <div className="flex gap-4 max-md:flex-col p-4 pr-0 max-md:pr-4">
          <div style={{ flex: 1 }} className="pt-10 p-4">
            <p className="mb-4 text-2xl font-bold">Why Kabukabu</p>
            <p className="text-base font-medium leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              harum, neque nostrum ipsum vitae facilis facere nam, saepe quas
              nulla corporis modi perspiciatis eaque labore, dicta magnam
              mollitia. Ut nisi eius saepe harum libero quidem nobis deserunt
              aliquid, placeat vel?
            </p>
          </div>
          <div
            style={{ flex: 1 }}
            className="relative min-h-[450px] overflow-hidden rounded-md"
          >
            <Image
              fill={true}
              alt={"Kabukabu Driver"}
              src={
                "https://res.cloudinary.com/dt0wfaxft/image/upload/v1684176745/driver_axq1iz.png"
              }
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WhyKabukabu;
