import { useState } from "react";
import Button from "../ui/Button/Button";

const OurVision = () => {

    return (
        <div className="flex flex-col md:flex-row p-4 gap-4 mt-[10vh]">
            <div className="w-full md:w-[50%] text-sm flex flex-col gap-3 items-center justify-start px-4 my-auto h-auto md:h-[60vh]">
                <div className="my-auto">
                    <p className="text:md sm:text-xl font-bold my-3 text-start w-full">Our <span className="text-[#FFBF00]">Vision</span></p>
                    <p className="font-semibold">We envision a world where transportation is simple, affordable, and accessible to everyone. As we continue to grow, our goal is to become the go-to platform for safe, reliable, and rewarding rides across the region. Kabukabu aims to transform the ride-hailing experience by making it more inclusive, driver-friendly, and community-oriented.</p>
                </div>
            </div>
            <div className="w-full md:w-[50%] px-4 flex items-center justify-center h-[60vh]">
                <img src="/home/better-community.png" className="w-full rounded-lg h-full" alt="" />                
            </div>
        </div>
    )
}

export default OurVision;