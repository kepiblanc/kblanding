import AppStoreButton from "@/components/common/AppStoreButton";
import Container from "@/components/common/Container";
import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css"

const Jumbotron: FC = () => {
  return (
    <div className={`min-h-[100vh] ${styles.jumboContainer}`}>
      <img src="/home/jumbo-bg.png" style={{ display: "none" }} />
      <Container>
        <div className="flex-col pt-20 h-[100vh] min-h-[500px] px-2">
          <motion.div
            initial={{ translateY: 185, opacity: 0 }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="h-[40%]"
          >
            <p className="text-center font-bold mb-3 text-lg">Kabukabu</p>
            <p className="text-center font-bold text-4xl">
              Get Rides to anywhere, fast!
            </p>
            <div className="flex justify-center gap-6 mt-6 max-sm:gap-2">
              <AppStoreButton store="android" />
              <AppStoreButton store="apple" />
            </div>
          </motion.div>

          <motion.div
            initial={{ translateX: '-100%', opacity: 0 }}
            whileInView={{
              translateX: 0,
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="relative w-full max-w-[400px] mx-auto h-[60%] max-md:max-w-[200px]"
          >
            <Image
              fill={true}
              alt="Download Kabukabu app"
              src={"/home/taxi.png"}
              style={{ objectFit: "contain", objectPosition: "50% 98%" }}
              priority
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Jumbotron;
