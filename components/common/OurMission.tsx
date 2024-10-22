import { useState } from "react";
import Button from "../ui/Button/Button";

const OurMission = () => {

    return (
        <div className="flex flex-col md:flex-row p-4 gap-4 mt-[10vh]">
            <div className="w-full md:w-[50%] px-4 flex items-center justify-center h-[60vh]">
                <img src="/home/better-community.png" className="w-full rounded-lg h-full" alt="" />                
            </div>
            <div className="w-full md:w-[50%] text-sm flex flex-col gap-3 items-center justify-start px-4 my-auto h-auto md:h-[60vh]">
                <div className="my-auto">
                    <p className="text:md sm:text-xl font-bold my-3 text-start w-full">Our <span className="text-[#FFBF00]">Mission</span></p>
                    <p className="font-semibold">At Kabukabu, our mission is to make every journey a joyful one. We are committed to connecting communities by offering affordable rides, creating sustainable earning opportunities for drivers, and fostering a sense of trust and safety for everyone who uses our platform. Whether you're a student heading to class, a professional on your daily commute, or a driver looking to maximize your earnings, Kabukabu is here to make every ride count.</p>
                </div>
            </div>
        </div>
    )
}

export default OurMission;