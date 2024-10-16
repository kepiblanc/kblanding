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

const Jumbotron: FC = () => {
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
              <p className="text-start text-[#FFF] font-bold text-4xl z-30">
                Your Premium Ride-Hailing <br /> Experience!
              </p>
              <p className="text-start text-[#FFF] font-semibold text-md z-30">
                Discover the Future of Transportation with Kabukabu 
              </p>
              <div className="flex justify-start gap-6 max-sm:gap-2">
                <a href={"https://kabukaburider.page.link/app"}>
                  <Button
                    title={'Get The App'}
                    className="!text-[16px] font-semibold"
                    size="large"
                  />
                </a>
              </div>
            </motion.div>

            {/*<motion.div
              initial={{ translateX: "-100%", opacity: 0, }}
              whileInView={{
                translateX: 0,
                opacity: 1,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              className={`relative w-full max-w-[400px] mx-auto h-[60%] max-md:max-w-[200px]`}
            >
              <Image
                fill={true}
                alt="Download Kabukabu app"
                src={"https://res.cloudinary.com/kabukabu/image/upload/v1714335044/landing/Group_ryzfbj.png"}
                style={{ objectFit: "contain", objectPosition: "50% 100%" }}
                className={styles.carBox}
                priority
              />
            </motion.div>*/}
          </div>
        </Container>
      </div>
      {/*<div className={`h-[30vh] min-h-[100px] max-sm:h-[100px] ${styles.jumboGradient}`}></div>*/}
    </div>
  );
};

export default Jumbotron;
