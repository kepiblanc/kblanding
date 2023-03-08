import Image from "next/image";
import React, { FC } from "react";

interface Props {
  title: string;
  image: string;
  body: string;
}

const InstructionItem: FC<Props> = ({ title, image, body }) => {
  return (
    <div className="w-full max-w-[250px]">
      <div className="w-full h-[60px] relative max-md:mx-auto">
        <Image
          src={image}
          alt="kabukabu app"
          fill={true}
          style={{ objectFit: "contain" }}
          className="object-left max-md:object-center"
        />
      </div>
      <div>
        <p className="text-sm font-bold py-2 max-md:text-center">{title}</p>
        <p className="text-sm font-medium max-md:text-center">{body}</p>
      </div>

    </div>
  );
};

export default InstructionItem;
