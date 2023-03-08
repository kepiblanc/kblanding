import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import Container from "./Container";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Footer: FC<Props> = (props) => {
  const year = new Date().getFullYear();

  return (
    <div {...props} className="bg-[#FFFFFF] mt-8">
      <Container>
        <div className="px-8 max-md:px-2">
          <div className="flex justify-between py-6 border-b border-b-[#A6A6A6] max-md:flex-col max-md:gap-4">
            <div className="flex items-center gap-4">
              <Link href="">
                <p className="text-sm">About Kabukabu</p>
              </Link>
              <Link href="">
                <p className="text-sm">Talk To Us</p>
              </Link>
              <Link href="">
                <p className="text-sm">Our Hubs</p>
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link href={""}>
                <FacebookIcon />
              </Link>

              <Link href={""}>
                <TwitterIcon />
              </Link>

              <Link href={""}>
                <YoutubeIcon />
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-center py-6 pb-20 max-md:pb-6 max-md:flex-col max-md:gap-4 max-md:items-start">
            <p className="text-xs order-1">
              &copy; {year} Kabukaby. All rights reserved
            </p>
            <Link href={"/"} className="order-2 max-md:order-3">
              <p className="font-bold text-xl">Kabukabu</p>
            </Link>
            <div className="flex items-center gap-6 order-3 max-md:order-2">
              <Link href={""}>
                <p className="text-xs">Terms of Service</p>
              </Link>
              <Link href={""}>
                <p className="text-xs">Privacy Policy</p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
