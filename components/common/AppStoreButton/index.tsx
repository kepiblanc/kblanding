import React, { FC } from "react";
import s from "./styles.module.css";
import cn from "classnames";
import AppleStore from "@/components/icons/AppleStore";
import AndroidStore from "@/components/icons/AndroidStore";

interface Props {
  store: "android" | "apple";
  variant?: "light" | "dark";
  className?: string;
}

const AppStoreButton: FC<Props> = ({ store, variant = "light", className }) => {
  const btnText = store === "apple" ? "Download on the" : "GET IT ON";
  const storeName = store === "apple" ? "App Store" : "Google Play";

  const rootStyles = cn(
    s.root,
    {
      [s.light]: variant === "light",
      [s.dark]: variant === "dark",
    },
    className
  );

  return (
    <button type="button" className={`${rootStyles} `}>
      <div className="flex items-center">
        <span>{store === "apple" ? <span style={{fill: variant === "dark" ? "#ffffff" : "#161616"}}><AppleStore /></span> : <AndroidStore />}</span>
      </div>
      <div className="w-full text-left leading-[15px]">
        <p className="text-xs">{btnText}</p>
        <p className="font-bold">{storeName}</p>
      </div>
    </button>
  );
};

export default AppStoreButton;
