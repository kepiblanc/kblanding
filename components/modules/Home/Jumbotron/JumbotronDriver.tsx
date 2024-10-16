import AppStoreButton from "@/components/common/AppStoreButton";
import Container from "@/components/common/Container";
import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button/Button";
import NavbarJumbo from "@/components/common/NavbarJumbo";

//${styles.jumboContainer}

const JumbotronDriver: FC = () => {
  return ( 
    <div className="relative w-full min-h-[85vh] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <NavbarJumbo />
      <div className={`relative z-10 min-h-[85vh]`}>
        <Container>
          <div className="flex-col pt-20 h-[80vh] min-h-[500px] px-2 md:px-[5vw]">
            <motion.div
              initial={{ translateY: 185, opacity: 0 }}
              whileInView={{
                translateY: 0,
                opacity: 1,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="h-[40%] flex flex-col gap-4"
            >
                <p className="text-start text-[#FFF] font-semibold text-sm z-30">
                    Drive with Kabukabu 
                </p>
                <p className="text-start text-[#FFF] font-bold text-4xl z-30">
                    Earn More, Drive Less
                </p>
                <p className="text-start text-[#FFF] font-semibold text-md z-30">
                    Unlock New Earning Opportunities with Kabukabu 
                </p>
                <div className="flex justify-start gap-6 max-sm:gap-2">
                    <a href={"https://kabukabudriver.page.link/app"}>
                    <Button
                        title={'Get The App'}
                        className="!text-[16px] font-semibold"
                        size="large"
                    />
                    </a>
                </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default JumbotronDriver;
