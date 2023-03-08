import Button from "@/components/ui/Button/Button";
import React, { FC, useState } from "react";

interface Props {
  isRider: boolean;
  setIsRider: React.Dispatch<React.SetStateAction<boolean>>
}

const RiderDriverSwitch: FC<Props> = ({ isRider, setIsRider }) => {

  return (
    <div className="w-full border border-[#D4D4D4] rounded-lg flex">
      <Button
        size="large"
        title="Ride with us"
        className={`w-[50%] ${isRider ? 'text-[#000]' : '!text-[#9A9A9A]'}`}
        variant={isRider ? "contained" : "text"}
        onClick={()=>setIsRider(true)}
      />
      <Button
        size="large"
        title="Drive with us"
        className={`w-[50%] ${!isRider ? 'text-[#000]' : '!text-[#9A9A9A]'}`}
        variant={!isRider ? "contained" : "text"}
        onClick={()=>setIsRider(false)}
      />
    </div>
  );
};

export default RiderDriverSwitch;
