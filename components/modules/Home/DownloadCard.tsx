import AppStoreButton from "@/components/common/AppStoreButton";
import Image from "next/image";
import React, { FC, useState, useEffect } from "react";

interface Props {
  image: string;
  title: string;
  body: string;
  bgColor: string;
}

const DownloadCard: FC<Props> = ({ image, title, body, bgColor }) => {
  const [innerWidth, setInnerWidth] = useState<number>(0);

  const handleWindowResize = (): void => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      className={`flex-col w-full max-w-[650px] h-[550px] max-md:rounded-lg max-md:overflow-hidden`}
    >
      <div
        className={`w-full relative h-[350px] max-md:!bg-[#FFBF00]`}
        style={{ backgroundColor: innerWidth >= 768 ? bgColor : "#FFBF00" }}
      >
        <Image
          src={image}
          alt="Download the Kabukabu app"
          style={{ objectFit: "contain", objectPosition: "50% 100%" }}
          fill={true}
        />
      </div>
      <div className="w-full bg-[#FFFFFF] h-[200px] px-4 max-sm:px-2 max-md:rounded-b-lg flex items-center justify-center">
        <div>
          <div className="w-full max-w-[280px] mx-auto">
            <p className="text-center font-extrabold">{title}</p>
            <p className="py-3 text-center text-sm font-bold">{body}</p>
          </div>
          <div className="flex items-center justify-center gap-4 max-sm:gap-2">
            <AppStoreButton store="android" variant="dark" />
            <AppStoreButton store="apple" variant="dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
