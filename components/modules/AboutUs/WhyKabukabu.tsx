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
              Kabukabu is a great choice in times of high demand, there is
              always a driver nearby when you need a low- cost ride fast. If you
              need a ride that looks good, Kabukabu has a great selection of
              vehicles. The customer service is great and the in-app user
              interface is seamless making it easy to use. The wallet feature
              helps you budget for your rides ahead of time easily.
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
