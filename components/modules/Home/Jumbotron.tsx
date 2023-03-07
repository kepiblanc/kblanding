import AppStoreButton from "@/components/common/AppStoreButton";
import Container from "@/components/common/Container";
import React, { FC } from "react";
import Image from "next/image";

const Jumbotron: FC = () => {
  return (
    <div className="min-h-[500px] bg-[url('/home/jumbo-bg.png')] bg-cover bg-center">
      <img src="/home/jumbo-bg.png" style={{ display: "none" }} />
      <Container>
        <div className="flex-col pt-20 h-[100vh] min-h-[500px] px-2">
          <div className="h-[40%]">
            <p className="text-center font-bold mb-3 text-lg">Kabukabu</p>
            <p className="text-center font-bold text-4xl">
              Get Rides to anywhere, fast!
            </p>
            <div className="flex justify-center gap-6 mt-6 max-sm:gap-2">
              <AppStoreButton store="android" />
              <AppStoreButton store="apple" />
            </div>
          </div>

          <div className="relative w-full max-w-[400px] mx-auto h-[60%] max-md:max-w-[200px]">
            <Image
              fill={true}
              alt="Download Kabukabu app"
              src={"/home/taxi.png"}
              style={{ objectFit: "contain", objectPosition: "50% 60%" }}
              priority
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Jumbotron;
