import React, { FC, useState } from "react";
import styles from "./styles.module.css";
import Container from "@/components/common/Container";
import Image from "next/image";
import RiderDriverSwitch from "../RiderDriverSwitch";
import RiderDriverBulletContainer from "../RiderDriverBulletContainer";

const bulletPoints = {
  rider: [
    "Get rides quickly",
    "Safe and secured rides",
    "We monitor ride to protect riders",
    "Professionally trained drivers",
  ],
  drivers: [
    "No percentage per trip",
    "Commission based",
    "Full control of your earnings",
    "Instant Ride Requests",
  ],
};

const RiderDriverContainer: FC = () => {
  const [isRider, setIsRider] = useState<boolean>(true);

  return (
    <Container>
      <div className={`${styles.riderDriverContainer} max-w-[1230px] mx-auto w-full`}>
        <div className={styles.imageBox}>
          {isRider ? (
            <Image
              fill={true}
              alt={"Kabukabu Driver"}
              src="/home/rider.png"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <Image
              fill={true}
              alt={"Kabukabu Driver"}
              src="/home/driver.png"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <div className={styles.swtichBox}>
          <div>
            <RiderDriverSwitch isRider={isRider} setIsRider={setIsRider} />
          </div>
        </div>
        <div className={styles.bulletsBox}>
          <div>
            <RiderDriverBulletContainer
              data={isRider ? bulletPoints.rider : bulletPoints.drivers}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RiderDriverContainer;
