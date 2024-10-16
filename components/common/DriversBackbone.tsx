import { useState } from "react";

const DriversBackbone = () => {

    return (
        <div className="flex flex-col md:flex-row p-4 gap-4">
            <div className="w-full md:w-1/2">
                <div className="text-sm flex items-center justify-center px-4 md:px-[7vw] my-auto h-auto md:h-[80vh]">
                    <p className="font-bold">At Kabukabu, we know drivers are the backbone of our service. That's why we've created a platform that empowers you to earn more, enjoy flexible hours, and benefit from better opportunities. Whether you're looking for a full-time income or a part-time hustle, Kabukabu gives you the freedom and tools you need to thrive.</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-[5vw] flex items-center justify-center h-[80vh]">
                <img src="/home/better-community.png" className="w-full rounded-lg" alt="" />                
            </div>
        </div>
    )
}

export default DriversBackbone;