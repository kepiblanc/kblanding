import Image from "next/image";
import React, { FC } from "react";
import InstructionItem from "./InstructionItem";
import Container from "@/components/common/Container";

const instructions = [
  {
    title: "Set Destination",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste asperiores vitae tenetur culpa, molestias voluptatum repellat natus nostrum deleniti iure.",
    image: "/home/setdestination.png",
  },
  {
    title: "Get Ride",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste asperiores vitae tenetur culpa, molestias voluptatum repellat natus nostrum deleniti iure.",
    image: "/home/getride.png",
  },
  {
    title: "Track Trip",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste asperiores vitae tenetur culpa, molestias voluptatum repellat natus nostrum deleniti iure.",
    image: "/home/tracktrip.png",
  },
  {
    title: "Easy Payment",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste asperiores vitae tenetur culpa, molestias voluptatum repellat natus nostrum deleniti iure.",
    image: "/home/easypayment.png",
  },
];

const InstructionContainer: FC = () => {
  return (
    <Container>
      <div className="flex min-h-screen max-md:flex-col max-md:items-center gap-3 p-2 px-8 max-md:px-2">
        <div className="relative flex-1 max-lg:w-full lg:-translate-x-[70px] min-h-[400px]">
          <Image
            src={"/home/phones.png"}
            alt="Kabukabu app"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex-1 grid grid-cols-2 content-center gap-4 gap-y-10 max-md:grid-cols-1">
          {instructions.map((item, idx) => {
            return <InstructionItem {...item} key={idx} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default InstructionContainer;
